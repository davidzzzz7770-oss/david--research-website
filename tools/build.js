/*
 * Bundles the site into one HTML file.
 *   node tools/build.js            -> dist/david-notebook.html (open by double-click)
 *   node tools/build.js --artifact -> dist/artifact.html (page body for a claude.ai artifact,
 *                                     which can edit and save itself)
 */
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const read = f => fs.readFileSync(path.join(root, f), "utf8");

global.window = {};
eval(read("data/site.js") + "\n" + read("data/notes.js"));
const state = { site: window.SITE, framework: window.FRAMEWORK, notes: window.REPORTS };

const index = read("index.html");
const title = index.match(/<title>(.*?)<\/title>/)[1];
const font = index.match(/<link rel="stylesheet" href="https:\/\/fonts[^>]*>/)[0].replace("<link ", '<link id="dr-font" ');
const css = read("assets/style.css"), js = read("assets/app.js");
if (/<\/script/i.test(js)) throw new Error("app.js must not contain a closing script tag");
const json = JSON.stringify(state).replace(/</g, "\\u003c");

const body =
  `<title>${title}</title>${font}<style id="dr-style">${css}</style>` +
  `<header class="topbar" id="topbar"></header><main id="app"></main><footer id="footer"></footer><div id="edbar" hidden></div>` +
  `<script type="application/json" id="dr-data">${json}</script><script id="dr-app">${js}</script>`;

fs.mkdirSync(path.join(root, "dist"), { recursive: true });
if (process.argv.includes("--artifact")) {
  fs.writeFileSync(path.join(root, "dist/artifact.html"), body);
  console.log("dist/artifact.html");
} else {
  const full = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></head><body>${body}</body></html>`;
  fs.writeFileSync(path.join(root, "dist/david-notebook.html"), full);
  console.log("dist/david-notebook.html");
}
