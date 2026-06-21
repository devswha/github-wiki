import { expect, type Locator, test } from "@playwright/test";
import { writeFile } from "node:fs/promises";

type BoundingBox = {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
};

type Rgb = readonly [number, number, number];

function parseRgb(value: string): Rgb {
  const match = /rgba?\((\d+),\s*(\d+),\s*(\d+)/u.exec(value);

  if (match === null) {
    throw new Error(`Cannot parse RGB color: ${value}`);
  }

  const red = Number(match[1] ?? Number.NaN);
  const green = Number(match[2] ?? Number.NaN);
  const blue = Number(match[3] ?? Number.NaN);

  if (!Number.isFinite(red) || !Number.isFinite(green) || !Number.isFinite(blue)) {
    throw new Error(`Cannot parse RGB channels: ${value}`);
  }

  return [red, green, blue] as const;
}

function luminance(channel: number): number {
  const normalized = channel / 255;

  return normalized <= 0.03928
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
}

function contrastRatio(foreground: string, background: string): number {
  const [fr, fg, fb] = parseRgb(foreground);
  const [br, bg, bb] = parseRgb(background);
  const foregroundLuminance = 0.2126 * luminance(fr) + 0.7152 * luminance(fg) + 0.0722 * luminance(fb);
  const backgroundLuminance = 0.2126 * luminance(br) + 0.7152 * luminance(bg) + 0.0722 * luminance(bb);
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

async function mustBox(locator: Locator, label: string): Promise<BoundingBox> {
  const box = await locator.boundingBox();

  if (box === null) {
    throw new Error(`${label} is not visible enough to measure.`);
  }

  return box;
}

async function writeJsonEvidence(path: string, value: unknown): Promise<void> {
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`);
}

test("patina article renders readable Namu-style body lists", async ({ page }) => {
  // Given
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/w/devswha%2Fpatina");

  // When
  const usageList = page.getByRole("list", { name: "patina 사용 흐름" });
  const proseParagraph = page.getByText(/^patina는 AI가 쓴 것처럼 보이는/u);

  // Then
  await expect(usageList).toBeVisible();
  await expect(usageList.getByRole("listitem")).toHaveCount(3);
  await expect(usageList.getByText(/언어와 프로필을 고른다/u)).toBeVisible();
  await expect(usageList.getByText(/audit이나 score로 의심 구간을 확인한다/u)).toBeVisible();
  await expect(usageList.getByText(/rewrite는 의미 앵커를 확인한 뒤 적용한다/u)).toBeVisible();
  await expect(page.getByRole("table", { name: "patina 기능 요약" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "감사 모드" })).toBeVisible();

  const tagName = await proseParagraph.evaluate((element) => element.tagName);
  const listStyleType = await usageList
    .getByRole("listitem")
    .first()
    .evaluate((element) => getComputedStyle(element).listStyleType);
  const listBox = await mustBox(usageList, "patina usage list");
  const articleBox = await mustBox(page.locator(".wiki-article"), "article");

  expect(tagName).toBe("P");
  expect(listStyleType).not.toBe("none");
  expect(listBox.x).toBeGreaterThan(articleBox.x);
  expect(listBox.x + listBox.width).toBeLessThanOrEqual(articleBox.x + articleBox.width + 1);

  const metrics = { articleBox, listBox, listStyleType, tagName };
  await writeJsonEvidence(".omo/evidence/list-blocks-patina-desktop.json", metrics);
  await page.screenshot({
    fullPage: true,
    path: ".omo/evidence/list-blocks-patina-desktop.png",
  });
});

test("mobile night article lists remain readable without overflow", async ({ page }) => {
  // Given
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/w/devswha%2Fpatina");

  // When
  await page.getByRole("button", { name: "나이트 모드" }).click();
  await page.getByRole("navigation", { name: "목차" }).getByRole("link", { name: "용도와 한계" }).click();

  // Then
  const limitsList = page.getByRole("list", { name: "patina 사용 제한" });
  await expect(page.getByRole("heading", { level: 2, name: /용도와 한계/u })).toBeInViewport();
  await expect(limitsList).toBeVisible();
  await expect(limitsList.getByRole("listitem")).toHaveCount(3);

  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  const listStyles = await limitsList.evaluate((element) => {
    const styles = getComputedStyle(element);
    const article = element.closest(".wiki-article");
    const articleStyles = article === null ? styles : getComputedStyle(article);

    return {
      backgroundColor: articleStyles.backgroundColor,
      color: styles.color,
      paddingInlineStart: styles.paddingInlineStart,
    };
  });
  const listBox = await mustBox(limitsList, "patina limits list");
  const articleBox = await mustBox(page.locator(".wiki-article"), "article");
  const contrast = contrastRatio(listStyles.color, listStyles.backgroundColor);

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
  expect(contrast).toBeGreaterThanOrEqual(4.5);
  expect(listBox.x).toBeGreaterThanOrEqual(articleBox.x);
  expect(listBox.x + listBox.width).toBeLessThanOrEqual(articleBox.x + articleBox.width + 1);

  await writeJsonEvidence(".omo/evidence/list-blocks-patina-mobile-night.json", {
    contrast,
    listBox,
    listStyles,
    metrics,
  });
  await page.screenshot({
    fullPage: true,
    path: ".omo/evidence/list-blocks-patina-mobile-night.png",
  });
});
