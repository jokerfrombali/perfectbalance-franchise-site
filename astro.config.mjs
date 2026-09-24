// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import articles from "./src/data/articles.json" with { type: "json" };
import { readdirSync, existsSync } from "node:fs";
// статьи без готового текста (noindex) не попадают в sitemap
const ready = new Set(existsSync("./src/content/articles") ? readdirSync("./src/content/articles").map((f) => f.replace(".md", "")) : []);
const draft = new Set(articles.filter((a) => !ready.has(a.id)).map((a) => `/blog/${a.hub}/${a.slug}/`));
export default defineConfig({
  site: "https://perfectbalance.club",
  trailingSlash: "always",
  integrations: [sitemap({ filter: (p) => !draft.has(new URL(p).pathname) })],
});
