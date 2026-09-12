const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { PDFDocument, PDFName, PDFDict, PDFString, PDFHexString } = require('pdf-lib');

const roots = [{ dir: 'de', entry: 'home.md' }, { dir: 'en', entry: 'home-en.md' }];
const pdfCss = `
  pre, pre code { white-space: pre-wrap; overflow-wrap: anywhere; }
  table { display: table; table-layout: fixed; overflow: visible; }
  table th, table td { overflow-wrap: anywhere; padding: 0.5em; }
  table tr { break-inside: avoid; }
  h1, h2, h3, h4, h5, h6 { break-after: avoid; }
`;

function getFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name, 'en')).flatMap(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? getFiles(file) : [file];
  });
}

function fingerprint(root, files) {
  const hash = createHash('sha256').update(process.version);
  for (const file of files) {
    hash.update(JSON.stringify(file)).update(fs.readFileSync(path.join(root, file)));
  }
  return hash.digest('hex');
}

// Update PDF objects, then serialize normally so xref offsets remain valid.
function rewriteLinks(doc, mapLink) {
  for (const page of doc.getPages()) {
    for (const ref of page.node.Annots()?.asArray() || []) {
      const annotation = doc.context.lookup(ref, PDFDict);
      const action = annotation.lookupMaybe(PDFName.of('A'), PDFDict);
      const uri = action?.lookup(PDFName.of('URI'));
      if (!(uri instanceof PDFString || uri instanceof PDFHexString)) continue;
      let url;
      try { url = new URL(uri.decodeText()); } catch { continue; }
      if (url.hostname !== 'localhost' || !url.port || url.protocol !== 'http:') continue;
      const result = mapLink(url);
      if (typeof result === 'string') {
        action.set(PDFName.of('URI'), PDFHexString.fromText(result));
      } else if (result) {
        annotation.delete(PDFName.of('A'));
        annotation.set(PDFName.of('Dest'), doc.context.obj([result.ref, PDFName.of('Fit')]));
      }
    }
  }
}

function linkPath(url) {
  return decodeURIComponent(url.pathname).replace(/^\/+/, '');
}

function pageKey(url, known) {
  const key = linkPath(url).replace(/\/$/, '').replace(/\.(md|pdf)$/i, '');
  // Wiki directory links, e.g. /de/user-guide, open their matching index page.
  const index = `${key}/${path.posix.basename(key)}`;
  return !known?.has(key) && known?.has(index) ? index : key;
}

async function build(root = __dirname) {
  const files = roots.flatMap(({ dir, entry }) => [entry, ...getFiles(path.join(root, dir)).map(file => path.relative(root, file).split(path.sep).join('/'))]);
  const markdown = files.filter(file => file.endsWith('.md'));
  const version = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version;
  const bundleName = `VisionR-Wiki-${version}.pdf`;
  const target = path.join(root, 'target');
  const bundlePath = path.join(target, bundleName);
  const manifestPath = path.join(target, 'build-manifest.json');
  const inputHash = fingerprint(root, ['build.js', 'package.json', 'package-lock.json', ...files]);
  let previous;
  try { previous = JSON.parse(fs.readFileSync(manifestPath, 'utf8')); } catch { /* First or interrupted build. */ }
  if (previous?.inputHash === inputHash && previous.outputs?.length &&
      previous.outputs.every(file => fs.existsSync(path.join(target, file))) &&
      previous.outputHash === fingerprint(target, previous.outputs)) {
    console.log('Everything up to date in VisionR-Wiki, skipping rebuild!');
    return;
  }

  // target is always the generated directory beneath the project root.
  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(path.join(target, 'tmp'), { recursive: true });
  fs.mkdirSync(path.join(target, 'pdf'), { recursive: true });
  const { mdToPdf } = require('md-to-pdf');
  const bundle = await PDFDocument.create();
  const file2page = new Map();
  const outputs = [];
  const report = { documents: [], unresolvedLinks: [] };
  const known = new Set(markdown.map(file => file.slice(0, -3)));
  const assets = new Set(files.filter(file => !file.endsWith('.md')));
  const attachments = new Set();
  const unresolved = new Set();
  for (const [index, file] of markdown.entries()) {
    console.log(`[${index + 1}/${markdown.length}] ${file}`);
    const pdfFile = file.replace(/\.md$/, '.pdf');
    const temporary = path.join(target, 'tmp', pdfFile);
    fs.mkdirSync(path.dirname(temporary), { recursive: true });
    await mdToPdf({ path: path.join(root, file) }, {
      dest: temporary,
      basedir: root,
      css: pdfCss,
    });
    const source = await PDFDocument.load(fs.readFileSync(temporary));
    const startPage = bundle.getPageCount();
    const copied = await bundle.copyPages(source, source.getPageIndices());
    copied.forEach(page => bundle.addPage(page));
    file2page.set(file.slice(0, -3), startPage);
    report.documents.push({ source: file, pdf: `pdf/${pdfFile}`, pageCount: source.getPageCount(), startPage: startPage + 1 });

    rewriteLinks(source, url => {
      const key = pageKey(url, known);
      const destination = known.has(key) ? `${key}.pdf` : linkPath(url);
      if (assets.has(destination)) attachments.add(destination);
      if (!known.has(key) && !assets.has(destination)) {
        const warning = `${file}: ${destination}`;
        if (!unresolved.has(warning)) {
          unresolved.add(warning);
          report.unresolvedLinks.push({ source: file, target: destination });
        }
      }
      return path.posix.relative(path.posix.dirname(file), destination) + url.search + url.hash;
    });
    const output = `pdf/${pdfFile}`;
    fs.mkdirSync(path.dirname(path.join(target, output)), { recursive: true });
    fs.writeFileSync(path.join(target, output), await source.save());
    outputs.push(output);
  }

  rewriteLinks(bundle, url => {
    const start = file2page.get(pageKey(url, known));
    if (start !== undefined) return bundle.getPage(start);
    return `pdf/${linkPath(url)}` + url.search + url.hash;
  });
  bundle.setTitle(`VisionR Wiki ${version}`);
  console.log(` >>> Saving bundle (${markdown.length} files, ${bundle.getPageCount()} pages): ${bundleName}`);
  fs.writeFileSync(bundlePath, await bundle.save());
  outputs.push(bundleName);

  // Preserve local attachment targets for links in the standalone PDFs and bundle.
  for (const file of attachments) {
    const output = `pdf/${file}`;
    fs.mkdirSync(path.dirname(path.join(target, output)), { recursive: true });
    fs.copyFileSync(path.join(root, file), path.join(target, output));
    outputs.push(output);
  }
  report.pageCount = bundle.getPageCount();
  fs.writeFileSync(path.join(target, 'build-report.json'), JSON.stringify(report, null, 2) + '\n');
  outputs.push('build-report.json');
  fs.writeFileSync(manifestPath, JSON.stringify({ inputHash, outputs, outputHash: fingerprint(target, outputs) }, null, 2) + '\n');
  if (report.unresolvedLinks.length) {
    console.warn(`${report.unresolvedLinks.length} links point to missing wiki content; see target/build-report.json.`);
  }
}

if (require.main === module) {
  build().catch(error => {
    console.error('Wiki PDF build failed:', error);
    // md-to-pdf can leave its HTTP server/browser alive after a conversion error.
    process.exit(1);
  });
}

module.exports = { build, fingerprint, rewriteLinks, pageKey, pdfCss };
