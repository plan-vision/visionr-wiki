//require("any-observable/register")('rxjs');
const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');
const { resolve, relative, dirname } = require('path');
const { readdir } = require('fs').promises;

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = dir + "/" + dirent.name;
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}
(async () => {
  var root = [
    {
      dir: "de",
      entry: 'home.md'
    },
    {
      dir: "en",
      entry: 'home-en.md'
    }
  ];
  var files = [];
  for (var r of root) {
    var f1 = await getFiles(r.dir);
    f1 = [r.entry].concat(f1);
    files = files.concat(f1);
  }
  var maxTSFiles = 0;
  for (const file of files) {
    const stat = fs.statSync(file);
    const ts = stat.mtimeMs; // modification time in ms since epoch
    if (ts > maxTSFiles) {
      maxTSFiles = ts;
    }
  }
  //maxTSFiles = Math.floor(maxTSFiles);
  //---------------------------------------------------------
  var ver = JSON.parse(fs.readFileSync("package.json")).version;
  var mfile = 'target/VisionR-Wiki-' + ver + '.pdf';
  // cleanup on version change
  if (fs.existsSync("target")) 
  {
    if (!fs.existsSync(mfile)) 
        fs.rmSync("target/", { recursive: true });
    else {
        //console.warn("!!! TS CRR FS ",Math.floor(maxTSFiles),Math.floor(fs.statSync(mfile).mtimeMs));
        // cleanup temporary / outdated builds
        if (Math.floor(fs.statSync(mfile).mtimeMs) != Math.floor(maxTSFiles))
            fs.rmSync("target/", { recursive: true });
        else { // UP TO DATE 
            console.info("Everything up to date in VisionR-Wiki, skipping rebuild!");
            return; 
        }
    }
  }
  //-------------------------------------------
  var crrpage = 1;
  var p = 0;
  for (const e of files) if (e.endsWith(".md")) {
    p++;
    const tp = resolve("target/tmp/" + e + "/..");
    const outf = "target/tmp/" + e;
    fs.mkdirSync(tp, { recursive: true });
    let newc = fs.readFileSync(e, "utf8");
    let oc = ""; try { oc = fs.readFileSync(outf, "utf8"); } catch { }
    let outfpdf = "target/tmp/" + e.substring(0, e.length - 3) + ".pdf";
    if (fs.existsSync(outfpdf) && oc === newc) {
      // up-to-date
      continue;
    }
    const idst = tp + '/_images';
    const isrc = dirname(e) + '/_images';
    if (fs.existsSync(isrc) && !fs.existsSync(idst)) {
      //console.warn("COPY images :", isrc, idst);
      fs.cpSync(isrc, idst, { recursive: true });
    }
    console.log("[" + p + "] " + e);
    fs.writeFileSync(outf, newc, "utf8");
    await mdToPdf(
      { path: outf },                // input markdown file
      {
        dest: "target/tmp/" + e.substring(0, e.length - 3) + ".pdf",
        basedir: 'target/tmp'
      }
    );
    // pageCount + link rewriting for the per-file PDF
    let buf = fs.readFileSync(outfpdf);
    const exd = require("pdfjs").ExternalDocument;
    const doc = new exd(buf);
    const nump = doc.pageCount;
    fs.writeFileSync(
      "target/tmp/" + e.substring(0, e.length - 3) + ".json",
      JSON.stringify({ pageCount: nump })
    );
    const outDir = resolve("target/pdf/" + e + "/..");
    fs.mkdirSync(outDir, { recursive: true });
    outfpdf = "target/pdf/" + e.substring(0, e.length - 3) + ".pdf";
    //--------------------------------------------------------------------------------------
    const dir = dirname(e);
    buf = rewriteLocalhostUris(buf, (pth) => {
      var fp = '.' + pth;
      var sfx = fs.existsSync(fp + '.md') ? '.pdf' : '';
      return relative(dir, fp).replace(/\\/g, '/') + sfx;
    });    
    fs.writeFileSync(outfpdf, buf);
  }
  //---------------------------------------------------------------------------------------
  console.log(" >>> Prepare bundle");
  var crrpage = 1;
  var file2page = [];
  for (var e of files) if (e.endsWith(".md")) {
    var key = e.substring(0, e.length - 3);
    var jc = fs.readFileSync("target/tmp/" + e.substring(0, e.length - 3) + ".json", "utf8");
    var pnum = JSON.parse(jc).pageCount;
    file2page[key] = crrpage;
    crrpage += pnum;
  }
  var mfiles = [];
  for (var e of files) if (e.endsWith(".md")) {
    var basf = "target/tmp/" + e.substring(0, e.length - 3);
    var inpf =  basf + ".pdf";
    var outpf =  basf + ".PAGES.pdf";
    if (!fs.existsSync(outpf)) {
      let buf = fs.readFileSync(inpf);  
      buf = rewriteLocalhostUris(buf, (pth) => {
        while (pth.startsWith("/")) pth=pth.substring(1);
        if (pth.endsWith(".pdf")) 
          pth=pth.substring(0,pth.length-4);
        var p = file2page[pth];
        if (p != undefined) 
            return "#page="+p; 
        console.warn("UNRESOLVED path in '"+e+"' : can not find page for ",pth);
        return pth;
      }); 
      fs.writeFileSync(outpf, buf);
    }
    mfiles.push(outpf);
  }
  console.log(" >>> Building bundle (" + mfiles.length + " files)");//, mfiles);
  const PDFMerger = require('pdf-merger-js').default;
  var merger = new PDFMerger();
  for (var e of mfiles) await merger.add(e);
  console.log(" >>> Saving bundle", mfile);
  await merger.save(mfile);

  // @END : SET FILE MTIME 
  setMtime(mfile,maxTSFiles);
  function setMtime(filePath, mtimeMs) {
    const mtimeSec = mtimeMs / 1000; // utimesSync expects seconds
    const atimeSec = fs.statSync(filePath).atimeMs / 1000; // preserve access time
    fs.utimesSync(filePath, atimeSec, mtimeSec);
  }

})();


function rewriteLocalhostUris(buf, mapPathFn) {
  const TKN = Buffer.from("/URI (http://localhost:");
  let off = 0;
  while (true) {
    const i = buf.indexOf(TKN, off);
    if (i < 0) break;
    const portStart = i + TKN.length;
    const slash = buf.indexOf(0x2f /* '/' */, portStart); // after port
    if (slash < 0) break;
    const close = buf.indexOf(0x29 /* ')' */, slash); // closing ')'
    if (close < 0) break;
    var absPath = buf.slice(slash, close).toString(); // e.g. "target/tmp/de/foo.md"
    const targetPath = mapPathFn(absPath);
    let toPath = targetPath.replace(/\\/g, '/'); // force forward slashes */
    //console.warn(dir+" | REWRITE ", absPath, "->", toPath);
    const replacement = Buffer.from(toPath);
    buf = Buffer.concat([buf.slice(0, i + 6), replacement, buf.slice(close)]);
    off = i + 6 + replacement.length; // continue after what we inserted
  }
  return buf;
  }