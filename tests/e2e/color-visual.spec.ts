import { expect, type Locator, test } from "@playwright/test";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const evidenceDir = ".omo/evidence";
const namuText = "rgb(33, 37, 41)";
const namuLink = "rgb(2, 117, 216)";
const namuMuted = "rgba(33, 37, 41, 0.75)";
const namuHeadingBorder = "rgb(204, 204, 204)";
const infoboxGridBorder = "rgb(143, 155, 155)";
const black = "rgb(0, 0, 0)";
const white = "rgb(255, 255, 255)";

type Box = {
  readonly height: number;
  readonly width: number;
  readonly x: number;
  readonly y: number;
};

type ColorStyles = {
  readonly backgroundColor: string;
  readonly borderBottomColor: string;
  readonly borderColor: string;
  readonly color: string;
};

type Rgba = {
  readonly alpha: number;
  readonly blue: number;
  readonly green: number;
  readonly red: number;
};

async function ensureEvidenceDir(): Promise<void> {
  await mkdir(evidenceDir, { recursive: true });
}

async function colorStyles(locator: Locator): Promise<ColorStyles> {
  return locator.evaluate((element) => {
    const styles = getComputedStyle(element);

    return {
      backgroundColor: styles.backgroundColor,
      borderBottomColor: styles.borderBottomColor,
      borderColor: styles.borderColor,
      color: styles.color,
    };
  });
}

async function visibleBox(locator: Locator, label: string): Promise<Box> {
  const box = await locator.boundingBox();

  if (box === null) {
    throw new Error(`${label} is not visible enough to measure.`);
  }

  return box;
}

async function writeMetrics(path: string, metrics: Record<string, unknown>): Promise<void> {
  await ensureEvidenceDir();
  await writeFile(`${evidenceDir}/${path}`, `${JSON.stringify(metrics, null, 2)}\n`);
}

function parseColor(value: string): Rgba {
  const match = /rgba?\(([^)]+)\)/u.exec(value);

  if (match === null) {
    throw new Error(`Cannot parse CSS color: ${value}`);
  }

  const colorBody = match[1];

  if (colorBody === undefined) {
    throw new Error(`Cannot read CSS color body: ${value}`);
  }

  const parts = colorBody
    .split(",")
    .map((part) => part.trim())
    .filter((part) => part.length > 0);

  if (parts.length < 3 || parts.length > 4) {
    throw new Error(`Unexpected CSS color component count: ${value}`);
  }

  const [red, green, blue, alpha] = parts;

  if (red === undefined || green === undefined || blue === undefined) {
    throw new Error(`Missing CSS color component: ${value}`);
  }

  return {
    red: Number.parseFloat(red),
    green: Number.parseFloat(green),
    blue: Number.parseFloat(blue),
    alpha: alpha === undefined ? 1 : Number.parseFloat(alpha),
  };
}

function blend(foreground: Rgba, background: Rgba): Rgba {
  const alpha = foreground.alpha + background.alpha * (1 - foreground.alpha);

  if (alpha === 0) {
    return { red: 255, green: 255, blue: 255, alpha: 1 };
  }

  return {
    red: (foreground.red * foreground.alpha + background.red * background.alpha * (1 - foreground.alpha)) / alpha,
    green:
      (foreground.green * foreground.alpha + background.green * background.alpha * (1 - foreground.alpha)) / alpha,
    blue:
      (foreground.blue * foreground.alpha + background.blue * background.alpha * (1 - foreground.alpha)) / alpha,
    alpha,
  };
}

function luminance(color: Rgba): number {
  const channelLuminance = (channel: number): number => {
    const normalized = channel / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  };

  return (
    channelLuminance(color.red) * 0.2126 +
    channelLuminance(color.green) * 0.7152 +
    channelLuminance(color.blue) * 0.0722
  );
}

function contrastRatio(foreground: string, background: string): number {
  const blendedForeground = blend(parseColor(foreground), parseColor(background));
  const backgroundColor = parseColor(background);
  const lighter = Math.max(luminance(blendedForeground), luminance(backgroundColor));
  const darker = Math.min(luminance(blendedForeground), luminance(backgroundColor));

  return (lighter + 0.05) / (darker + 0.05);
}

function expectTextColor(styles: ColorStyles): void {
  expect(styles.color).toBe(namuText);
}

test.beforeEach(async () => {
  await ensureEvidenceDir();
});

test("color desktop article palette matches Namu Codex reference", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/w/devswha%2Fpatina");

  const styles = {
    actionButton: await colorStyles(page.locator(".article-actions button").first()),
    article: await colorStyles(page.locator(".wiki-article")),
    body: await colorStyles(page.locator("body")),
    caption: await colorStyles(page.locator(".repo-infobox caption")),
    categoryLabel: await colorStyles(page.locator(".category-label")),
    h1: await colorStyles(page.getByRole("heading", { level: 1, name: "patina" })),
    h2: await colorStyles(page.locator(".article-section h2").first()),
    link: await colorStyles(page.locator(".category-strip a").first()),
    modified: await colorStyles(page.locator(".article-modified")),
    paragraph: await colorStyles(page.locator(".article-section p").first()),
    table: await colorStyles(page.locator(".repo-infobox")),
    tableCell: await colorStyles(page.locator(".repo-infobox td").first()),
    tableHead: await colorStyles(page.locator(".repo-infobox th").first()),
  };

  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/color-desktop-test-before-after.png`,
  });
  await writeMetrics("color-desktop-metrics.json", styles);

  expectTextColor(styles.body);
  expectTextColor(styles.article);
  expectTextColor(styles.h1);
  expectTextColor(styles.h2);
  expectTextColor(styles.paragraph);
  expectTextColor(styles.table);
  expectTextColor(styles.tableCell);
  expect(styles.link.color).toBe(namuLink);
  expect(styles.modified.color).toBe(namuMuted);
  expect(styles.actionButton.color).toBe(namuMuted);
  expect(styles.categoryLabel.color).toBe(namuText);
  expect(styles.h2.borderBottomColor).toBe(namuHeadingBorder);
  expect(styles.table.borderColor).toBe(black);
  expect(styles.tableCell.borderColor).toBe(infoboxGridBorder);
  expect(styles.caption.backgroundColor).toBe(black);
  expect(styles.caption.color).toBe(white);
  expect(styles.tableHead.backgroundColor).toBe(black);
  expect(styles.tableHead.borderColor).toBe(infoboxGridBorder);
  expect(styles.tableHead.color).toBe(white);
});

test("color mobile palette keeps Namu colors without overflow", async ({ page }) => {
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
    actionButton: await colorStyles(page.locator(".article-actions button").first()),
    body: await colorStyles(page.locator("body")),
    h1: await colorStyles(page.getByRole("heading", { level: 1, name: "patina" })),
    h2: await colorStyles(page.locator(".article-section h2").first()),
    link: await colorStyles(page.locator(".category-strip a").first()),
    modified: await colorStyles(page.locator(".article-modified")),
    paragraph: await colorStyles(page.locator(".article-section p").first()),
    table: await colorStyles(page.locator(".repo-infobox")),
    tableCell: await colorStyles(page.locator(".repo-infobox td").first()),
    tableHead: await colorStyles(page.locator(".repo-infobox th").first()),
  };
  const contrast = {
    body: contrastRatio(styles.body.color, styles.body.backgroundColor),
    link: contrastRatio(styles.link.color, white),
    table: contrastRatio(styles.tableCell.color, styles.tableCell.backgroundColor),
    tableHead: contrastRatio(styles.tableHead.color, styles.tableHead.backgroundColor),
  };

  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/color-mobile-patina-test.png`,
  });
  await writeMetrics("color-mobile-metrics.json", {
    contrast,
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
  expectTextColor(styles.body);
  expectTextColor(styles.h1);
  expectTextColor(styles.h2);
  expectTextColor(styles.paragraph);
  expectTextColor(styles.table);
  expectTextColor(styles.tableCell);
  expect(styles.link.color).toBe(namuLink);
  expect(styles.modified.color).toBe(namuMuted);
  expect(styles.actionButton.color).toBe(namuMuted);
  expect(styles.tableHead.backgroundColor).toBe(black);
  expect(styles.tableHead.color).toBe(white);
  expect(contrast.body).toBeGreaterThanOrEqual(4.5);
  expect(contrast.link).toBeGreaterThanOrEqual(4.5);
  expect(contrast.table).toBeGreaterThanOrEqual(4.5);
  expect(contrast.tableHead).toBeGreaterThanOrEqual(4.5);
});

test("color regressions preserve navigation copy-safety and prior visual gates", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/w/devswha%2Fpatina");

  const header = await colorStyles(page.locator(".wiki-header"));
  const headerBrand = await colorStyles(page.locator(".brand-link"));
  const railPanel = await colorStyles(page.locator(".wiki-side-panel").first());
  const railRank = await colorStyles(page.locator(".wiki-side-panel li > span:first-child").first());
  const copiedClassSignals = await page
    .locator("[class*='wiki-heading-content'], [class*='wiki-table'], [class*='wiki-link-internal']")
    .count();
  const copiedAssetSignals = await page.locator("img[src*='namu.wiki']").count();
  const sourceCss = `${await readFile("src/styles/wiki.css", "utf8")}\n${await readFile(
    "src/styles/article.css",
    "utf8",
  )}`;

  await page.getByRole("link", { name: "문서화" }).click();
  await expect(page).toHaveURL(/\/w\/category\/documentation$/);
  await page.goto("/");
  const homePanelHeading = await colorStyles(page.locator(".home-panel h2").first());
  await page.goto("/w/devswha%2Fpatina");
  await page.getByRole("searchbox", { name: "검색어" }).fill("facebook/react");
  await page.getByRole("button", { name: "이동" }).click();
  await expect(page).toHaveURL(/\/w\/facebook%2Freact$/);
  await expect(page.getByRole("heading", { level: 1, name: "react" })).toBeVisible();

  const styles = {
    reactHeading: await colorStyles(page.getByRole("heading", { level: 1, name: "react" })),
    railLink: await colorStyles(page.locator(".wiki-side-rail a").first()),
  };
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/color-local-react-after.png`,
  });
  await writeMetrics("color-regression-metrics.json", {
    copiedAssetSignals,
    copiedClassSignals,
    contrast: {
      header: contrastRatio(headerBrand.color, header.backgroundColor),
      homePanelHeading: contrastRatio(homePanelHeading.color, homePanelHeading.backgroundColor),
      railRank: contrastRatio(railRank.color, railPanel.backgroundColor),
    },
    styles,
    url: page.url(),
  });

  expect(contrastRatio(headerBrand.color, header.backgroundColor)).toBeGreaterThanOrEqual(4.5);
  expect(contrastRatio(homePanelHeading.color, homePanelHeading.backgroundColor)).toBeGreaterThanOrEqual(4.5);
  expect(contrastRatio(railRank.color, railPanel.backgroundColor)).toBeGreaterThanOrEqual(4.5);
  expect(styles.reactHeading.color).toBe(namuText);
  expect(styles.railLink.color).toBe(namuLink);
  expect(copiedClassSignals).toBe(0);
  expect(copiedAssetSignals).toBe(0);
  expect(sourceCss).not.toContain("namu.wiki");
  expect(sourceCss).not.toContain("@font-face");
});
