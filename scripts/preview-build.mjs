// Сборка превью для GitHub Pages: сайт живёт в подпапке /<repo>/, поэтому переписываем корневые ссылки
// и закрываем превью от индексации (боевой домен — perfectbalance.club).
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";
const BASE = process.argv[2] || "/perfectbalance-franchise-site";
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
for (const f of walk("dist")) {
  if (f.endsWith(".html")) {
    let s = readFileSync(f, "utf8");
    s = s.replace(/(href|src|action)="\/(?!\/)/g, `$1="${BASE}/`);
    s = s.replace("<head>", '<head><meta name="robots" content="noindex, nofollow">');
    writeFileSync(f, s);
  } else if (f.endsWith(".css") || f.endsWith(".js")) {
    const s = readFileSync(f, "utf8"); writeFileSync(f, s.replace(/url\(\/(?!\/)/g, `url(${BASE}/`));
  }
}
writeFileSync("dist/robots.txt", "User-agent: *\nDisallow: /\n");
writeFileSync("dist/.nojekyll", "");
console.log("preview ready for", BASE);
