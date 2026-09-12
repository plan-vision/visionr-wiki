const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { PDFDocument, PDFName, PDFDict, PDFString, PDFHexString, PDFArray } = require('pdf-lib');
const { rewriteLinks, pageKey, fingerprint } = require('../build');

function addLink(doc, page, uri, hex = false) {
  const link = doc.context.obj({
    Type: 'Annot', Subtype: 'Link', Rect: [0, 0, 100, 20],
    A: { S: 'URI', URI: hex ? PDFHexString.fromText(uri) : PDFString.of(uri) },
  });
  page.node.addAnnot(doc.context.register(link));
}

function annotations(doc) {
  return doc.getPage(0).node.Annots().asArray().map(ref => doc.context.lookup(ref, PDFDict));
}

test('wiki directory links resolve to existing index pages without masking missing pages', () => {
  const known = new Set(['de/user-guide/user-guide']);
  assert.equal(pageKey(new URL('http://localhost:12345/de/user-guide/'), known), 'de/user-guide/user-guide');
  assert.equal(pageKey(new URL('http://localhost:12345/de/missing'), known), 'de/missing');
});

test('standalone links survive serialization, including PDF escaping and hex strings', async () => {
  const doc = await PDFDocument.create();
  const page = doc.addPage();
  addLink(doc, page, 'http://localhost:12345/de/a%20%28%C3%BC.md#heading', true);
  addLink(doc, page, 'http://localhost:54321/home-en', true);
  addLink(doc, page, 'https://example.com/external');
  addLink(doc, page, 'mailto:info@example.com');
  rewriteLinks(doc, url => pageKey(url) + '.pdf' + url.hash);
  const saved = await PDFDocument.load(await doc.save());
  const uris = annotations(saved).map(a => a.lookup(PDFName.of('A'), PDFDict).lookup(PDFName.of('URI')).decodeText());
  assert.deepEqual(uris, ['de/a (ü.pdf#heading', 'home-en.pdf', 'https://example.com/external', 'mailto:info@example.com']);
});

test('bundle links use actual page destinations after copying and serialization', async () => {
  const source = await PDFDocument.create();
  const first = source.addPage();
  addLink(source, first, 'http://localhost:12345/en/guide');
  const bundle = await PDFDocument.create();
  for (const page of await bundle.copyPages(source, [0])) bundle.addPage(page);
  const destination = bundle.addPage();
  rewriteLinks(bundle, () => destination);
  const saved = await PDFDocument.load(await bundle.save());
  const annotation = annotations(saved)[0];
  assert.equal(annotation.has(PDFName.of('A')), false);
  const dest = annotation.lookup(PDFName.of('Dest'), PDFArray);
  assert.equal(dest.get(0).toString(), saved.getPage(1).ref.toString());
  assert.equal(dest.get(1).toString(), '/Fit');
});

test('fingerprint notices content edits even if timestamps are preserved, and file removal', t => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'wiki-cache-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const file = path.join(directory, 'page.md');
  fs.writeFileSync(file, 'before');
  const timestamp = fs.statSync(file).mtime;
  const before = fingerprint(directory, ['page.md']);
  fs.writeFileSync(file, 'after!');
  fs.utimesSync(file, timestamp, timestamp);
  assert.notEqual(fingerprint(directory, ['page.md']), before);
  assert.notEqual(fingerprint(directory, []), before);
});

test('cleanup succeeds twice and targets its project, even from another working directory', t => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'wiki-clean-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const project = path.join(directory, 'project');
  const elsewhere = path.join(directory, 'elsewhere');
  fs.mkdirSync(path.join(project, 'target'), { recursive: true });
  fs.mkdirSync(path.join(elsewhere, 'target'), { recursive: true });
  fs.copyFileSync(path.join(__dirname, '../cleanup.js'), path.join(project, 'cleanup.js'));
  for (let i = 0; i < 2; i++) {
    const result = spawnSync(process.execPath, [path.join(project, 'cleanup.js')], { cwd: elsewhere });
    assert.equal(result.status, 0, result.stderr.toString());
  }
  assert.equal(fs.existsSync(path.join(project, 'target')), false);
  assert.equal(fs.existsSync(path.join(elsewhere, 'target')), true);
});
