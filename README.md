# Github.wiki

Github.wiki is a Vite, React, and TypeScript scaffold for reading GitHub repository explanations as wiki articles. It currently uses typed local fixture data, so the app works without a backend or live GitHub data.

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

`npm run test:e2e` starts the fixed-port Vite server through Playwright when
needed, and reuses `http://127.0.0.1:4173` if it is already running. To inspect
the app manually, start the same server:

```bash
npm run dev -- --host 127.0.0.1 --port 4173
```

## Current Scope

- `/` renders the wiki-style main page.
- `/w/Github.wiki` renders the site overview article.
- `/w/facebook%2Freact` renders a repository article using encoded owner/repo routing.
- `/w/very-long-owner-name%2Fvery-long-repository-name-that-wraps` is a layout stress page for long names.
- Search, go, and random controls read only from local fixtures.
- Edit, discuss, history, watch, and special controls are visible placeholders.

## Content Model

Article data lives in `src/wiki/fixtures.ts` and is typed by `src/wiki/types.ts`. A future Patina or patina-wiki writer can emit the same article shape and replace or generate fixture modules without changing page components.

## Boundaries

This iteration has no backend, no persistence, no deployment setup, and no live repository ingestion. The repository fields shown in fixture pages are sample content for scaffold verification.
