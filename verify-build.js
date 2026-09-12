const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { PDFDocument, PDFName, PDFDict, PDFArray, PDFString, PDFHexString } = require('pdf-lib');
const { fingerprint } = require('./build');

async function verify() {
  const target = path.join(__dirname, 'target');
  const report = JSON.parse(fs.readFileSync(path.join(target, 'build-report.json'), 'utf8'));
  const version = require('./package.json').version;
  const manifest = JSON.parse(fs.readFileSync(path.join(target, 'build-manifest.json'), 'utf8'));
  assert.equal(fingerprint(target, manifest.outputs), manifest.outputHash, 'Generated output changed or is incomplete');
  const bundle = await PDFDocument.load(fs.readFileSync(path.join(target, `VisionR-Wiki-${version}.pdf`)));
  const pageRefs = new Set(bundle.getPages().map(page => page.ref.toString()));
  let total = 0;
  let internalLinks = 0;
  function checkLinks(doc, bundled) {
    for (const page of doc.getPages()) {
      for (const ref of page.node.Annots()?.asArray() || []) {
        const annotation = doc.context.lookup(ref, PDFDict);
        const action = annotation.lookupMaybe(PDFName.of('A'), PDFDict);
        const uri = action?.lookup(PDFName.of('URI'));
        if (uri instanceof PDFString || uri instanceof PDFHexString) {
          assert.doesNotMatch(uri.decodeText(), /^http:\/\/localhost:\d+\//, 'Temporary browser URL remains');
        }
        const dest = annotation.lookup(PDFName.of('Dest'));
        if (bundled && dest instanceof PDFArray) {
          assert.ok(pageRefs.has(dest.get(0).toString()), 'Internal link points outside the bundle');
          internalLinks++;
        }
      }
    }
  }
  for (const document of report.documents) {
    const pdf = await PDFDocument.load(fs.readFileSync(path.join(target, document.pdf)));
    assert.ok(pdf.getPageCount() > 0, `Empty PDF: ${document.pdf}`);
    assert.equal(pdf.getPageCount(), document.pageCount, document.pdf);
    assert.equal(document.startPage, total + 1, document.source);
    checkLinks(pdf, false);
    total += pdf.getPageCount();
  }
  assert.equal(bundle.getPageCount(), total, 'Bundle page count differs from individual PDFs');
  assert.equal(report.pageCount, total);
  checkLinks(bundle, true);
  assert.ok(internalLinks > 0, 'Bundle has no internal page links');
  console.log(`Verified ${report.documents.length} PDFs, ${total} bundled pages, and ${internalLinks} internal destinations.`);
  console.log(`${report.unresolvedLinks.length} unresolved source links are documented in target/build-report.json.`);
}

verify().catch(error => {
  console.error('PDF verification failed:', error);
  process.exitCode = 1;
});
