import { expect, type Locator, test } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

const evidenceDir = ".omo/evidence";

type BoundingBox = {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
};

type Rgba = {
  readonly alpha: number;
  readonly blue: number;
  readonly green: number;
  readonly red: number;
};

async function visibleBox(locator: Locator, label: string): Promise<BoundingBox> {
  const box = await locator.boundingBox();

  if (box === null) {
    throw new Error(`${label} is not visible enough to measure.`);
  }

  return box;
}

async function writeMetrics(path: string, metrics: Record<string, unknown>): Promise<void> {
  await mkdir(evidenceDir, { recursive: true });
  await writeFile(`${evidenceDir}/${path}`, `${JSON.stringify(metrics, null, 2)}\n`);
}

function parsePixelValue(value: string): number {
  return Number.parseFloat(value.replace("px", ""));
}

function parseColor(value: string): Rgba {
  const match = /rgba?\(([^)]+)\)/u.exec(value);

  if (match === null || match[1] === undefined) {
    throw new Error(`Cannot parse CSS color: ${value}`);
  }

  const parts = match[1].split(",").map((part) => part.trim());
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

function contrastRatio(firstColor: string, secondColor: string): number {
  const first = parseColor(firstColor);
  const second = parseColor(secondColor);
  const lighter = Math.max(luminance(first), luminance(second));
  const darker = Math.min(luminance(first), luminance(second));

  return (lighter + 0.05) / (darker + 0.05);
}

function boxesOverlap(first: BoundingBox, second: BoundingBox): boolean {
  return (
    first.x < second.x + second.width &&
    first.x + first.width > second.x &&
    first.y < second.y + second.height &&
    first.y + first.height > second.y
  );
}

test("article page uses compact wiki column with right rail", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/w/facebook%2Freact");

  const header = await visibleBox(page.locator(".wiki-header"), "wiki header");
  const article = await visibleBox(page.locator(".wiki-article"), "article");
  const rail = await visibleBox(page.locator(".wiki-side-rail"), "side rail");
  const articleHeading = page.getByRole("heading", { name: "react" });
  const articleStyles = await page.locator(".wiki-article").evaluate((element) => {
    const styles = getComputedStyle(element);

    return {
      borderRadius: styles.borderRadius,
      boxShadow: styles.boxShadow,
    };
  });
  const headingFontSize = await articleHeading.evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).fontSize),
  );
  const paragraphFontSize = await page
    .locator(".article-section p")
    .first()
    .evaluate((element) => Number.parseFloat(getComputedStyle(element).fontSize));

  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/namu-visual-article-desktop.png`,
  });
  await writeMetrics("namu-visual-article-desktop.txt", {
    article,
    articleStyles,
    header,
    headingFontSize,
    paragraphFontSize,
    rail,
  });

  expect(header.height).toBeLessThanOrEqual(58);
  expect(article.width).toBeGreaterThanOrEqual(880);
  expect(article.width).toBeLessThanOrEqual(930);
  expect(rail.x).toBeGreaterThan(article.x + article.width + 10);
  expect(rail.width).toBeGreaterThanOrEqual(220);
  expect(rail.width).toBeLessThanOrEqual(280);
  expect(headingFontSize).toBeGreaterThanOrEqual(34);
  expect(headingFontSize).toBeLessThanOrEqual(37);
  expect(paragraphFontSize).toBeLessThanOrEqual(15);
  expect(parsePixelValue(articleStyles.borderRadius)).toBeLessThanOrEqual(3);
  expect(articleStyles.boxShadow).toBe("none");
});

test("home page reads as stacked wiki sections beside a right rail", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/");

  const article = await visibleBox(page.locator(".wiki-article"), "home article");
  const rail = await visibleBox(page.locator(".wiki-side-rail"), "side rail");
  const firstPanel = await visibleBox(page.locator(".home-panel").nth(0), "first home panel");
  const secondPanel = await visibleBox(
    page.locator(".home-panel").nth(1),
    "second home panel",
  );
  const firstPanelHeadingStyles = await page
    .locator(".home-panel h2")
    .first()
    .evaluate((element) => {
      const styles = getComputedStyle(element);

      return {
        backgroundColor: styles.backgroundColor,
        color: styles.color,
      };
    });
  const firstPanelHeadingBackground = parseColor(firstPanelHeadingStyles.backgroundColor);

  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/namu-visual-home-desktop.png`,
  });
  await writeMetrics("namu-visual-home-desktop.txt", {
    article,
    firstPanel,
    firstPanelHeadingStyles,
    rail,
    secondPanel,
  });

  expect(article.width).toBeGreaterThanOrEqual(880);
  expect(article.width).toBeLessThanOrEqual(930);
  expect(rail.x).toBeGreaterThan(article.x + article.width + 10);
  expect(rail.width).toBeGreaterThanOrEqual(220);
  expect(rail.width).toBeLessThanOrEqual(280);
  expect(secondPanel.x).toBeCloseTo(firstPanel.x, 0);
  expect(secondPanel.y).toBeGreaterThan(firstPanel.y + firstPanel.height - 1);
  expect(firstPanelHeadingBackground.red).toBeLessThanOrEqual(5);
  expect(firstPanelHeadingBackground.green).toBeGreaterThanOrEqual(120);
  expect(firstPanelHeadingBackground.blue).toBeGreaterThanOrEqual(100);
  expect(firstPanelHeadingBackground.green).toBeGreaterThan(firstPanelHeadingBackground.blue);
  expect(contrastRatio(firstPanelHeadingStyles.color, firstPanelHeadingStyles.backgroundColor)).toBeGreaterThanOrEqual(4.5);
});

test("mobile wiki layout stays narrow without horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/w/very-long-owner-name%2Fvery-long-repository-name-that-wraps");

  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  const article = await visibleBox(page.locator(".wiki-article"), "mobile article");
  const rail = await visibleBox(page.locator(".wiki-side-rail"), "mobile side rail");
  const title = await visibleBox(page.locator(".article-title-group"), "mobile article title");
  const actions = await visibleBox(page.locator(".article-actions"), "mobile article actions");

  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/namu-visual-mobile-article.png`,
  });
  await writeMetrics("namu-visual-mobile-article.txt", {
    actions,
    article,
    metrics,
    rail,
    title,
  });

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
  expect(article.width).toBeLessThanOrEqual(metrics.clientWidth - 12);
  expect(rail.width).toBeLessThanOrEqual(metrics.clientWidth - 12);
  expect(rail.y).toBeGreaterThan(article.y + article.height - 1);
  expect(boxesOverlap(title, actions)).toBe(false);
});
