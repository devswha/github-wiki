# Github.wiki

Github.wiki is a Vite, React, and TypeScript app for reading GitHub repository explanations as dense wiki articles. It runs entirely on typed local fixture data, so it works without a backend or live GitHub access.

Namu.wiki was used only as a structural reference for the wiki shell, main-page panels, article actions, category strip, table of contents, and right-side repository infobox. This project does not copy Namu assets, prose, styling, or class names. The main page and article prose are written in Korean.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run test -- --run
npm run test:e2e
npm run build
```

`npm run test` runs Vitest in watch mode; pass `-- --run` for a single run. `npm run test:e2e` starts the fixed-port Vite server through Playwright when needed, and reuses `http://127.0.0.1:4173` if it is already running. To inspect the app manually, start the same server:

```bash
npm run dev -- --host 127.0.0.1 --port 4173
```

## Routes

- `/` renders the Korean wiki main page (recent edits, popular repositories, write requests, category shortcuts).
- `/recent-changes` and `/recent-discussions` render activity list pages.
- `/w/category/<slug>` renders a category listing (e.g. `/w/category/ui-framework`).
- `/w/<encoded-slug>` renders an article; missing slugs render an in-shell not-found page.
- Search, go, and random controls read only from local fixtures.
- Edit, discuss, history, watch, and special controls are visible placeholders.

## Articles

Sourced upstream repository articles:

- `/w/Yeachan-Heo%2Fgajae-code` — GJC harness (interview, planning, tmux execution, verification).
- `/w/code-yeongyu%2Flazycodex` — OmO install entrypoint for Codex.
- `/w/Yeachan-Heo%2Foh-my-claudecode` — OMC multi-agent extension for Claude Code.
- `/w/Yeachan-Heo%2Foh-my-codex` — OMX workflow layer for the OpenAI Codex CLI.
- `/w/code-yeongyu%2Foh-my-openagent` — OmO/OpenAgent multi-harness layer.
- `/w/devswha%2Fpatina` — multilingual AI writing pattern audit tool.

Sample/scaffold articles:

- `/w/Github.wiki` — site overview article.
- `/w/facebook%2Freact` — sample popular-repository page (original content, no live stats).
- `/w/very-long-owner-name%2Fvery-long-repository-name-that-wraps` — layout stress page for long names.

## Content Model

Each article is a typed `WikiArticle` (see `src/wiki/types.ts`). Sourced articles live in their own modules (`src/wiki/gajaeCodeArticle.ts`, `src/wiki/patinaArticle.ts`, and so on); scaffold pages live in `src/wiki/sampleArticles.ts`. They are aggregated into `wikiArticles` by `src/wiki/fixtures.ts`, which also defines the main-page panels. Category labels and paths are defined in `src/wiki/categories.ts`. A future writing pipeline can emit the same article shape and add or replace fixture modules without changing page components.

## Boundaries

This project has no backend, no persistence, and no live repository ingestion. Sourced articles are hand-authored summaries from public upstream material, and sample pages are placeholder content for layout and routing verification.
