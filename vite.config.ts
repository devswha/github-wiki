import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

import { collectRepoStats } from "./scripts/collect-repo-stats.mjs";

import { wikiArticles } from "./src/wiki/fixtures";

const SITE_ORIGIN = "https://wiki.vibetip.help";

function buildSitemapXml(): string {
  const now = new Date().toISOString();
  const staticEntries = ["/", "/recent-changes", "/recent-discussions"].map((path) => ({
    loc: `${SITE_ORIGIN}${path}`,
    lastmod: now,
  }));
  const articleEntries = wikiArticles.map((article) => ({
    loc: `${SITE_ORIGIN}/w/${encodeURIComponent(article.slug)}`,
    lastmod: article.modifiedAt,
  }));
  const categoryEntries = Array.from(
    new Set(
      wikiArticles.flatMap((article) =>
        article.categories.map((category) => category.path),
      ),
    ),
  ).map((path) => ({ loc: `${SITE_ORIGIN}${path}`, lastmod: now }));

  const urls = [...staticEntries, ...articleEntries, ...categoryEntries]
    .map(
      (entry) =>
        `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

const ROBOTS_TXT = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`;

export default defineConfig({
  plugins: [
    react(),
    {
      name: "github-wiki-repo-stats",
      apply: "build",
      async buildStart() {
        // Refresh committed GitHub stats before the bundle is built. Fail-safe:
        // never throws; per-repo errors keep the cached value.
        try {
          await collectRepoStats({
            slugs: wikiArticles.map((article) => article.slug),
            cachePath: fileURLToPath(
              new URL("./src/wiki/repoStats.generated.ts", import.meta.url),
            ),
            token: process.env["GITHUB_TOKEN"] ?? process.env["GH_TOKEN"],
            log: (message) => this.info?.(message),
          });
        } catch (error) {
          this.warn(`repo stats collection skipped: ${String(error)}`);
        }
      },
    },
    {
      name: "github-wiki-seo-artifacts",
      apply: "build",
      generateBundle() {
        this.emitFile({
          type: "asset",
          fileName: "sitemap.xml",
          source: buildSitemapXml(),
        });
        this.emitFile({ type: "asset", fileName: "robots.txt", source: ROBOTS_TXT });
      },
    },
    {
      name: "github-wiki-static-asset-404",
      configureServer(server) {
        server.middlewares.use((request, response, next) => {
          const requestUrl = request.url ?? "";

          if (requestUrl.startsWith("/assets/")) {
            response.statusCode = 404;
            response.end("Not found");
            return;
          }

          next();
        });
      },
    },
  ],
  server: {
    watch: {
      ignored: [
        "**/.git/**",
        "**/.omo/**",
        "**/dist/**",
        "**/node_modules/**",
        "**/playwright-report/**",
        "**/test-results/**",
        "**/tests/**",
      ],
      usePolling: true,
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    setupFiles: ["./src/test/setup.ts"],
  },
});
