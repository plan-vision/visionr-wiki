
const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');
const { resolve,normalize } = require('path');
const { readdir } = require('fs').promises;

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = dir+"/"+dirent.name;
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

(async () => {
  var root = [
      {
        dir : "de",
        entry : 'home.md'
      },
      {
        dir : "en",
        entry : 'home-en.md'
      }
  ];
  var files = [];
  for (var r of root) {
    var f1 = await getFiles(r.dir);
    f1=[r.entry].concat(f1);
    files=files.concat(f1);
  }

  var ver = JSON.parse(fs.readFileSync("package.json")).version;
  var mfile = 'target/VisionR-Wiki-'+ver+'.pdf';
  // cleanup on version change
  if (!fs.existsSync(mfile))
      fs.rmdirSync("target/", { recursive: true });
  //-------------------------------------------
  var p = 0;
  var ofiles = [];
  var crrpage = 1;

  console.log(" >>> Synchronizing PDF dir")
  for (var e of files) if (e.endsWith(".md")) {
    p++;
    var tp = resolve("target/tmp/"+e+"/..")
    var outf = "target/tmp/"+e;
    fs.mkdirSync(tp, { recursive: true });
    //---------------------------------------------------
    var rpfx = normalize(e+"/..").split("\\").join("/");
    var newc = fs.readFileSync(e,"utf8");
    // REPLACE IMAGES RELATIVE PATHS WITH ABSOLUTE
    newc=newc.split("(_images/").join("(/"+rpfx+"/_images/");
    //---------------------------------------------------
    var oc = ""; try { oc = fs.readFileSync(outf,"utf8"); } catch(ex) {}
    var outfpdf = "target/tmp/"+e.substring(0,e.length-3)+".pdf";
    if (fs.existsSync(outfpdf) && oc == newc) {
        // do not need refresh
        continue;
    }
    console.log("["+p+"] "+e);
    fs.writeFileSync(outf,newc,"utf8");
    require('child_process').execSync('node node_modules/md-to-pdf/dist/cli.js '+outf+' --port 12345');
    var buf = fs.readFileSync(outfpdf);
    var exd = require("pdfjs").ExternalDocument;
    var doc = new exd(buf);
    var nump = doc.pageCount;
    fs.writeFileSync("target/tmp/"+e.substring(0,e.length-3)+".json",'{"pageCount":'+nump+'}');

    var tkn = "/URI (http://localhost:12345/";
    var xp = 0;
    while (xp < buf.length) {
         var ni = buf.indexOf(tkn,xp);
         if (ni < 0) break;
         var nx = buf.indexOf(")",ni+6);
         if (nx < 0) break;
         var rel = buf.slice(ni+tkn.length,nx).toString();
         if (rel.startsWith("target/tmp/")) {
           rel = rel.substring(11);
         }
         if (fs.existsSync(rel+".md")) {
           rel+=".pdf";

           var occ = e.split("/").length - 1;
           for(var i=0;i<occ;i++) {
        	   rel="../"+rel;
           }
           var buf = Buffer.concat([buf.slice(0,ni+6),Buffer.from(rel),buf.slice(nx)]);
         }
         xp=buf.indexOf("\n",ni);
         if (xp < 0) break;
    }
    tp = resolve("target/pdf/"+e+"/..");
    fs.mkdirSync(tp, { recursive: true });
    outfpdf = "target/pdf/"+e.substring(0,e.length-3)+".pdf";
    fs.writeFileSync(outfpdf,buf);
  }
  console.log(" >>> Prepare bundle");
  var crrpage=1;
  var file2page = [];
  for (var e of files) if (e.endsWith(".md")) {
      var key = e.substring(0,e.length-3);
      var jc = fs.readFileSync("target/tmp/"+e.substring(0,e.length-3)+".json","utf8");
      var pnum = JSON.parse(jc).pageCount;
      file2page[key]=crrpage;
      //console.log(key+" > "+crrpage);
      crrpage+=pnum;
  }
  var mfiles = [];
  for (var e of files) if (e.endsWith(".md")) {
      var inpf = "target/tmp/"+e.substring(0,e.length-3)+".pdf";
      mfiles.push(inpf);
  }
  console.log(" >>> Building bundle ("+mfiles.length+" files)");
  const PDFMerger = require('pdf-merger-js');
  var merger = new PDFMerger();
  for (var e of mfiles) merger.add(e);
  await merger.save(mfile);

  console.log(" >>> Saving bundle");

  var buf = fs.readFileSync(mfile);
  var tkn = "/URI (http://localhost:12345/";
  var xp = 0;
  while (xp < buf.length) {
       var ni = buf.indexOf(tkn,xp);
       if (ni < 0) break;
       var nx = buf.indexOf(")",ni+6);
       if (nx < 0) break;
       var rel = buf.slice(ni+tkn.length,nx).toString();
       if (rel.startsWith("target/tmp/"))
          rel=rel.substring(11);
       if (fs.existsSync("target/pdf/"+rel+".pdf")) {
         if (file2page[rel] != undefined) {
            buf = Buffer.concat([buf.slice(0,ni+6),Buffer.from("#page="+file2page[rel]),buf.slice(nx)]);
         } else {
            //console.log(" !!!!!!!! NOT FOUND "+rel);
         }
       } else {
         //console.log(" !!!!!!!! NOT FOUND 2 "+rel);
       }
       xp=nx+1;
  }
  fs.writeFileSync(mfile,buf);
})();

/*


const PDFMerger = require('pdf-merger-js');
var merger = new PDFMerger();

(async () => {
  merger.add('home.pdf');  //merge all pages. parameter is the path to file and filename.
  merger.add('de/admin-guide.pdf'); // merge only page 2
  await merger.save('merged.pdf'); //save under given name
})();
*/
