import { expect, type Locator, test } from "@playwright/test";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const evidenceDir = ".omo/evidence";
const namuFontFamily =
  '"Pretendard JP", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", "Noto Sans CJK KR", NanumBarunGothic, Roboto, "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, emoji';

type BoundingBox = {
  readonly height: number;
  readonly width: number;
  readonly x: number;
  readonly y: number;
};

type FontStyles = {
  readonly fontFamily: string;
  readonly fontSize: string;
  readonly fontWeight: string;
  readonly lineHeight: string;
  readonly overflowWrap: string;
  readonly wordBreak: string;
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

async function fontStyles(locator: Locator): Promise<FontStyles> {
  return locator.evaluate((element) => {
    const styles = getComputedStyle(element);

    return {
      fontFamily: styles.fontFamily,
      fontSize: styles.fontSize,
      fontWeight: styles.fontWeight,
      lineHeight: styles.lineHeight,
      overflowWrap: styles.overflowWrap,
      wordBreak: styles.wordBreak,
    };
  });
}

async function writeMetrics(path: string, metrics: Record<string, unknown>): Promise<void> {
  await ensureEvidenceDir();
  await writeFile(`${evidenceDir}/${path}`, `${JSON.stringify(metrics, null, 2)}\n`);
}

function expectNamuArticleText(styles: FontStyles): void {
  expect(styles.fontFamily).toBe(namuFontFamily);
  expect(styles.wordBreak).toBe("break-all");
}

test.beforeEach(async () => {
  await ensureEvidenceDir();
});

test("font desktop article typography matches Namu Codex stack", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/w/devswha%2Fpatina");

  const styles = {
    article: await fontStyles(page.locator(".wiki-article")),
    body: await fontStyles(page.locator("body")),
    h1: await fontStyles(page.getByRole("heading", { level: 1, name: "patina" })),
    h2: await fontStyles(page.locator(".article-section h2").first()),
    paragraph: await fontStyles(page.locator(".article-section p").first()),
    table: await fontStyles(page.locator(".repo-infobox")),
  };

  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/font-local-patina-test-desktop.png`,
  });
  await writeMetrics("font-local-desktop-metrics.json", styles);

  expect(styles.body.fontFamily).toBe(namuFontFamily);
  expect(styles.body.fontSize).toBe("15px");
  expect(styles.body.lineHeight).toBe("22.5px");
  expect(styles.body.wordBreak).toBe("normal");
  expectNamuArticleText(styles.article);
  expectNamuArticleText(styles.h1);
  expectNamuArticleText(styles.h2);
  expectNamuArticleText(styles.paragraph);
  expectNamuArticleText(styles.table);
  expect(styles.h1.fontWeight).toBe("700");
  expect(styles.h1.lineHeight).toBe("36px");
  expect(styles.h2.fontWeight).toBe("700");
  expect(styles.h2.lineHeight).toBe("40.5px");
  expect(styles.paragraph.fontSize).toBe("15px");
  expect(styles.paragraph.lineHeight).toBe("22.5px");
  expect(styles.table.fontSize).toBe("15px");
  expect(styles.table.lineHeight).toBe("22.5px");
});

test("font mobile typography keeps Namu stack without overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/w/devswha%2Fpatina");

  const pageSize = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  const h1 = await visibleBox(page.getByRole("heading", { level: 1, name: "patina" }), "h1");
  const h2 = await visibleBox(page.locator(".article-section h2").first(), "first h2");
  const infobox = await visibleBox(page.locator(".article-aside"), "repo infobox");
  const styles = {
    h1: await fontStyles(page.getByRole("heading", { level: 1, name: "patina" })),
    h2: await fontStyles(page.locator(".article-section h2").first()),
    paragraph: await fontStyles(page.locator(".article-section p").first()),
    table: await fontStyles(page.locator(".repo-infobox")),
  };

  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/font-mobile-patina-test.png`,
  });
  await writeMetrics("font-local-mobile-metrics.json", {
    h1,
    h2,
    infobox,
    pageSize,
    styles,
  });

  expect(pageSize.scrollWidth).toBeLessThanOrEqual(pageSize.clientWidth);
  expect(h1.width).toBeLessThanOrEqual(pageSize.clientWidth - 20);
  expect(h2.width).toBeLessThanOrEqual(pageSize.clientWidth - 20);
  expect(infobox.width).toBeLessThanOrEqual(pageSize.clientWidth - 20);
  expect(Number.parseFloat(styles.h1.fontSize)).toBeLessThanOrEqual(24);
  expectNamuArticleText(styles.h1);
  expectNamuArticleText(styles.h2);
  expectNamuArticleText(styles.paragraph);
  expectNamuArticleText(styles.table);
});

test("font regressions preserve pixel geometry and navigation", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/w/devswha%2Fpatina");

  const article = await visibleBox(page.locator(".wiki-article"), "article");
  const rail = await visibleBox(page.locator(".wiki-side-rail"), "right rail");
  const infobox = await visibleBox(page.locator(".article-aside"), "repo infobox");
  const h1Styles = await fontStyles(page.getByRole("heading", { level: 1, name: "patina" }));
  const h2 = await visibleBox(page.locator(".article-section h2").first(), "first h2");
  const h2Styles = await fontStyles(page.locator(".article-section h2").first());
  const copiedClassSignals = await page
    .locator("[class*='wiki-heading-content'], [class*='wiki-table'], [class*='wiki-link-internal']")
    .count();
  const copiedAssetSignals = await page.locator("img[src*='namu.wiki']").count();
  const sourceCss = `${await readFile("src/styles/wiki.css", "utf8")}\n${await readFile(
    "src/styles/article.css",
    "utf8",
  )}`;

  await page.getByRole("searchbox", { name: "검색어" }).fill("facebook/react");
  await page.getByRole("button", { name: "이동" }).click();
  await expect(page).toHaveURL(/\/w\/facebook%2Freact$/);
  await expect(page.getByRole("heading", { level: 1, name: "react" })).toBeVisible();
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/font-local-react-after.png`,
  });
  await writeMetrics("font-regression-metrics.json", {
    article,
    copiedAssetSignals,
    copiedClassSignals,
    h1Styles,
    h2,
    h2Styles,
    infobox,
    rail,
    url: page.url(),
  });

  expect(article.x).toBeLessThanOrEqual(32);
  expect(article.width).toBeGreaterThanOrEqual(880);
  expect(article.width).toBeLessThanOrEqual(930);
  expect(rail.x).toBeGreaterThan(article.x + article.width + 8);
  expect(rail.width).toBeGreaterThanOrEqual(220);
  expect(infobox.width).toBeGreaterThanOrEqual(380);
  expect(infobox.width).toBeLessThanOrEqual(420);
  expect(h1Styles.fontFamily).toBe(namuFontFamily);
  expect(h2.width).toBeGreaterThanOrEqual(840);
  expect(h2Styles.fontFamily).toBe(namuFontFamily);
  expect(h2Styles.wordBreak).toBe("break-all");
  expect(copiedClassSignals).toBe(0);
  expect(copiedAssetSignals).toBe(0);
  expect(sourceCss).not.toContain("namu.wiki");
  expect(sourceCss).not.toContain("@font-face");
});
