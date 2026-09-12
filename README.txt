Content of VisionR Wiki on http://plan-vision.com:8282

PDF build
---------
Requires Node.js 22.12 or newer (Node.js 24 recommended) and npm.

  npm ci
  npm test
  npm run build
  npm run verify
  npm audit

Puppeteer downloads Chrome during installation. If npm blocks its install
script, run `node node_modules/puppeteer/install.mjs` before building.

The build converts all German and English Markdown pages, embeds their images,
and writes:
  target/VisionR-Wiki-<version>.pdf - combined wiki with internal page links
  target/pdf/                    - individual PDFs and linked attachments
  target/build-report.json       - page counts, starting pages, missing links

Links to existing wiki pages open the corresponding standalone PDF or jump to
the first page of that document in the combined PDF. Links to missing source
pages are listed in the report; the build does not create missing wiki content.
External URLs remain unchanged.

Build inputs and outputs are hashed. An unchanged build is skipped; changed
content, assets, dependencies, build code, or missing/corrupt outputs trigger
a full rebuild. `npm run clean` removes generated output and can be run twice.
`npm run verify` checks PDF parsing, page counts, and internal destinations.

Dependencies
------------
The lockfile records upgraded dependencies with no overrides. pdf-lib handles
page counting, merging, and link rewriting. To check for newly disclosed issues,
run `npm audit` (including development dependencies, which provide the build).
After dependency upgrades, repeat the build and verification commands above.
