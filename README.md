# Github.wiki

Github.wiki is a Vite, React 19, and TypeScript scaffold for reading GitHub repository explanations as wiki articles. It uses typed local fixture data, so the app works without a backend or live GitHub data.

Namu.wiki was used only as a structural reference for the dense wiki shell, main-page panels, article actions, category strip, table of contents, and right-side repository infobox. This scaffold does not copy Namu assets, prose, styling, or class names.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run test -- --run
npm run test:e2e
npm run build
```

- `npm run typecheck` runs `tsc -b --noEmit`.
- `npm run test` runs Vitest; pass `-- --run` for a single non-watch run.
- `npm run build` runs `tsc -b && vite build`.

`npm run test:e2e` runs Playwright. It starts the Vite dev server with
`npm run dev -- --host 127.0.0.1 --port 4173` when needed, and reuses
`http://127.0.0.1:4173` if it is already running. To inspect the app manually,
start the same server:

```bash
npm run dev -- --host 127.0.0.1 --port 4173
```

## Routes

- `/` renders the wiki-style main page (대문) with featured, popular, request, and category panels.
- `/recent-changes` and `/recent-discussions` render sample activity pages.
- `/w/category/*` renders a category listing, e.g. `/w/category/ui-framework`.
- `/w/*` renders an article by encoded slug, e.g. `/w/facebook%2Freact`.
- Any other path renders the not-found page.

## Articles

Featured repository articles ship as fixtures:

- `/w/Yeachan-Heo%2Fgajae-code`
- `/w/code-yeongyu%2Flazycodex`
- `/w/Yeachan-Heo%2Foh-my-claudecode`
- `/w/Yeachan-Heo%2Foh-my-codex`
- `/w/code-yeongyu%2Foh-my-openagent`
- `/w/devswha%2Fpatina`

Sample articles cover the scaffold itself and layout edge cases:

- `/w/Github.wiki` is the site overview article.
- `/w/facebook%2Freact` is a sample popular-repository page.
- `/w/very-long-owner-name%2Fvery-long-repository-name-that-wraps` is a layout stress page for long names.

Search, go, and random controls read only from local fixtures. Edit, discuss,
history, watch, more, and floating scroll controls are visible placeholders.

## Content Model

Each article is a typed module under `src/wiki/` (for example `gajaeCodeArticle.ts`,
`patinaArticle.ts`, and `sampleArticles.ts`). `src/wiki/fixtures.ts` aggregates them
into `wikiArticles` and defines the main-page panels, and `src/wiki/types.ts` defines
the article contract. Supporting modules are `categories.ts` (category labels and
paths), `meta.ts` (route titles and site metadata), and `lookup.ts` (slug
normalization, search, and random selection). A future writing pipeline can emit the
same article shape and replace or generate fixture modules without changing page
components.

## Boundaries

This iteration has no backend, no persistence, no deployment setup, and no live repository ingestion. The repository fields shown in fixture pages are sample content for scaffold verification.
