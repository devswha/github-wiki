import { expect, type Locator, test } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

const evidenceDir = ".omo/evidence";

type BoundingBox = {
  readonly height: number;
  readonly width: number;
  readonly x: number;
  readonly y: number;
};

type ElementStyles = {
  readonly backgroundColor: string;
  readonly borderTopWidth: string;
  readonly fontSize: number;
};

async function ensureEvidenceDir(): Promise<void> {
  await mkdir(evidenceDir, { recursive: true });
}

async function visibleBox(locator: Locator, label: string): Promise<BoundingBox> {
  const box = await locator.boundingBox();

  if (box === null) {
    throw new Error(`${label} is not visible enough to measure.`);
  }

  return box;
}

async function elementStyles(locator: Locator): Promise<ElementStyles> {
  return locator.evaluate((element) => {
    const styles = getComputedStyle(element);

    return {
      backgroundColor: styles.backgroundColor,
      borderTopWidth: styles.borderTopWidth,
      fontSize: Number.parseFloat(styles.fontSize),
    };
  });
}

async function writeMetrics(path: string, metrics: Record<string, unknown>): Promise<void> {
  await ensureEvidenceDir();
  await writeFile(`${evidenceDir}/${path}`, `${JSON.stringify(metrics, null, 2)}\n`);
}

test("pixel article metrics track Namu Codex reference", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/w/devswha%2Fpatina");
  await ensureEvidenceDir();

  const article = await visibleBox(page.locator(".wiki-article"), "article");
  const h1 = await visibleBox(page.getByRole("heading", { level: 1, name: "patina" }), "h1");
  const h1Styles = await elementStyles(page.getByRole("heading", { level: 1, name: "patina" }));
  const infobox = await visibleBox(page.locator(".article-aside"), "repo infobox");
  const h2 = await visibleBox(page.locator(".article-section h2").first(), "first h2");
  const h2Styles = await elementStyles(page.locator(".article-section h2").first());

  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/pixel-qa-after-local-patina.png`,
  });
  await writeMetrics("pixel-local-desktop-metrics.json", {
    article,
    h1,
    h1Styles,
    h2,
    h2Styles,
    infobox,
  });

  expect.soft(article.x).toBeLessThanOrEqual(32);
  expect.soft(article.width).toBeGreaterThanOrEqual(880);
  expect.soft(article.width).toBeLessThanOrEqual(930);
  expect.soft(h1.y).toBeGreaterThanOrEqual(88);
  expect.soft(h1Styles.fontSize).toBeGreaterThanOrEqual(34);
  expect.soft(infobox.width).toBeGreaterThanOrEqual(380);
  expect.soft(infobox.width).toBeLessThanOrEqual(420);
  expect.soft(infobox.x).toBeGreaterThanOrEqual(480);
  expect.soft(infobox.x).toBeLessThanOrEqual(540);
  expect.soft(h2.width).toBeGreaterThanOrEqual(840);
  expect.soft(h2Styles.backgroundColor).toBe("rgba(0, 0, 0, 0)");
  expect.soft(h2Styles.borderTopWidth).toBe("0px");
});

test("pixel mobile article keeps Namu-like stack without overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/w/devswha%2Fpatina");
  await ensureEvidenceDir();

  const pageSize = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  const h1 = await visibleBox(page.getByRole("heading", { level: 1, name: "patina" }), "h1");
  const h1Styles = await elementStyles(page.getByRole("heading", { level: 1, name: "patina" }));
  const infobox = await visibleBox(page.locator(".article-aside"), "repo infobox");
  const summary = await visibleBox(page.locator(".article-summary"), "summary");
  const toc = await visibleBox(page.getByRole("navigation", { name: "목차" }), "toc");
  const h2 = await visibleBox(page.locator(".article-section h2").first(), "first h2");

  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/pixel-qa-after-mobile-patina.png`,
  });
  await writeMetrics("pixel-local-mobile-metrics.json", {
    h1,
    h1Styles,
    h2,
    infobox,
    pageSize,
    summary,
    toc,
  });

  expect(pageSize.scrollWidth).toBeLessThanOrEqual(pageSize.clientWidth);
  expect(infobox.y).toBeLessThan(summary.y);
  expect(summary.y).toBeLessThan(toc.y);
  expect(toc.y).toBeLessThan(h2.y);
  expect(h1Styles.fontSize).toBeLessThanOrEqual(24);
  expect(h1.width).toBeLessThanOrEqual(pageSize.clientWidth - 20);
  expect(h2.width).toBeLessThanOrEqual(pageSize.clientWidth - 20);
});

test("pixel regressions preserve navigation and copy-safety", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/w/devswha%2Fpatina");
  await ensureEvidenceDir();

  const rail = await visibleBox(page.locator(".wiki-side-rail"), "right rail");
  const article = await visibleBox(page.locator(".wiki-article"), "article");
  const copiedClassSignals = await page
    .locator(
      "[class*='wiki-heading-content'], [class*='wiki-table'], [class*='wiki-link-internal']",
    )
    .count();
  const copiedAssetSignals = await page.locator("img[src*='namu.wiki']").count();

  await page.getByRole("link", { name: "AI 글쓰기 도구" }).click();
  await expect(
    page.getByRole("article").getByRole("heading", {
      level: 1,
      name: "분류: AI 글쓰기 도구",
    }),
  ).toBeVisible();

  await page.goto("/w/devswha%2Fpatina");
  await page.getByRole("searchbox", { name: "검색어" }).fill("facebook/react");
  await page.getByRole("button", { name: "이동" }).click();
  await expect(page).toHaveURL(/\/w\/facebook%2Freact$/);
  await expect(page.getByRole("heading", { level: 1, name: "react" })).toBeVisible();
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/pixel-qa-after-local-react.png`,
  });
  await writeMetrics("pixel-regression-metrics.json", {
    article,
    copiedAssetSignals,
    copiedClassSignals,
    rail,
    url: page.url(),
  });

  expect(rail.x).toBeGreaterThan(article.x + article.width + 8);
  expect(rail.width).toBeGreaterThanOrEqual(220);
  expect(copiedClassSignals).toBe(0);
  expect(copiedAssetSignals).toBe(0);
});
