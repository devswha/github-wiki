import { expect, type Locator, test } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

const evidenceDir = ".omo/evidence";

type Rgba = {
  readonly alpha: number;
  readonly blue: number;
  readonly green: number;
  readonly red: number;
};

type StyleSample = {
  readonly backgroundColor: string;
  readonly color: string;
};

async function ensureEvidenceDir(): Promise<void> {
  await mkdir(evidenceDir, { recursive: true });
}

async function sampleStyles(locator: Locator): Promise<StyleSample> {
  return locator.evaluate((element) => {
    const styles = getComputedStyle(element);

    return {
      backgroundColor: styles.backgroundColor,
      color: styles.color,
    };
  });
}

async function writeEvidence(name: string, value: unknown): Promise<void> {
  await ensureEvidenceDir();
  await writeFile(`${evidenceDir}/${name}`, `${JSON.stringify(value, null, 2)}\n`);
}

function parseColor(value: string): Rgba {
  const match = /rgba?\(([^)]+)\)/u.exec(value);

  if (match === null || match[1] === undefined) {
    throw new Error(`Cannot parse color: ${value}`);
  }

  const parts = match[1].split(",").map((part) => Number.parseFloat(part.trim()));
  const [red, green, blue, alpha] = parts;

  if (red === undefined || green === undefined || blue === undefined) {
    throw new Error(`Missing color channel: ${value}`);
  }

  return {
    alpha: alpha ?? 1,
    blue,
    green,
    red,
  };
}

function luminance(color: Rgba): number {
  const channel = (value: number): number => {
    const normalized = value / 255;

    return normalized <= 0.039_28
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  };

  return channel(color.red) * 0.2126 + channel(color.green) * 0.7152 + channel(color.blue) * 0.0722;
}

function contrastRatio(foreground: string, background: string): number {
  const foregroundColor = parseColor(foreground);
  const backgroundColor = parseColor(background);
  const lighter = Math.max(luminance(foregroundColor), luminance(backgroundColor));
  const darker = Math.min(luminance(foregroundColor), luminance(backgroundColor));

  return (lighter + 0.05) / (darker + 0.05);
}

test.beforeEach(async () => {
  await ensureEvidenceDir();
});

test("interaction desktop renders Namu-style links anchors tables and cards", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/w/devswha%2Fpatina");

  const overviewHeading = page.locator("#overview h2");
  const overviewNumberLink = overviewHeading.getByRole("link", { name: "1." });
  await overviewNumberLink.click();
  await page.mouse.move(0, 0);

  const linkStyles = {
    external: await sampleStyles(page.getByRole("link", { name: "GitHub 저장소" })),
    internal: await sampleStyles(page.getByRole("link", { name: "특징 문단" })),
    missing: await sampleStyles(page.getByRole("link", { name: "없는 문서 예시" })),
    number: await sampleStyles(overviewNumberLink),
    target: await sampleStyles(page.locator("#overview")),
  };
  const toc = page.getByRole("navigation", { name: "목차" });
  const counts = {
    cards: await page.locator(".article-card").count(),
    forbiddenAssets: await page.locator('img[src*="namu" i]').count(),
    forbiddenClasses: await page.locator('[class*="namu" i]').count(),
  };

  await page.screenshot({ fullPage: true, path: `${evidenceDir}/interaction-local-patina-desktop.png` });
  await writeEvidence("interaction-browser-desktop.txt", { counts, linkStyles, url: page.url() });

  await expect(page).toHaveURL(/#overview$/u);
  await expect(overviewHeading).toHaveText(/^1\. 개요$/u);
  await expect(toc.getByRole("link", { name: "개요" })).toBeVisible();
  await expect(toc.getByRole("link", { name: "1. 개요" })).toHaveCount(0);
  await expect(page.getByRole("table", { name: "patina 기능 요약" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "감사 모드" })).toBeVisible();
  expect(counts).toEqual({ cards: 3, forbiddenAssets: 0, forbiddenClasses: 0 });
  expect(new Set([linkStyles.external.color, linkStyles.internal.color, linkStyles.missing.color]).size).toBe(3);
  expect(linkStyles.number.color).toBe(linkStyles.internal.color);
  expect(linkStyles.target.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
});

test("interaction mobile night mode keeps tables cards and links readable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/w/devswha%2Fpatina");
  await page.getByRole("button", { name: "나이트 모드" }).click();
  await page.reload();
  await page.goto("/w/devswha%2Fpatina#features");

  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    theme: document.documentElement.dataset["theme"],
  }));
  const styles = {
    card: await sampleStyles(page.locator(".article-card").first()),
    link: await sampleStyles(page.getByRole("link", { name: "특징 문단" })),
    table: await sampleStyles(page.getByRole("table", { name: "patina 기능 요약" })),
  };
  const body = await sampleStyles(page.locator("body"));
  const contrast = {
    body: contrastRatio(body.color, body.backgroundColor),
    card: contrastRatio(styles.card.color, styles.card.backgroundColor),
    link: contrastRatio(styles.link.color, body.backgroundColor),
    table: contrastRatio(styles.table.color, styles.table.backgroundColor),
  };

  await page.screenshot({ fullPage: true, path: `${evidenceDir}/interaction-mobile-night-patina.png` });
  await writeEvidence("interaction-browser-mobile-night.txt", { contrast, metrics, styles });

  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator("#features")).toBeInViewport();
  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
  expect(Object.values(contrast).every((value) => value >= 4.5)).toBe(true);
});

test("interaction regressions preserve navigation copy-safety and prior visual contracts", async ({ page }) => {
  await page.goto("/w/devswha%2Fpatina");

  const search = page.getByRole("searchbox");
  await search.fill("facebook/react");
  await page.getByRole("button", { name: "이동" }).click();

  const findings = {
    forbiddenAssets: await page.locator('img[src*="namu" i]').count(),
    forbiddenClasses: await page.locator('[class*="namu" i]').count(),
    fontImports: await page.locator('link[href*="fonts."]').count(),
  };

  await page.screenshot({ fullPage: true, path: `${evidenceDir}/interaction-local-react-regression.png` });
  await writeEvidence("interaction-browser-regression.txt", { findings, url: page.url() });

  await expect(page).toHaveURL(/\/w\/facebook%2Freact$/u);
  await expect(page.getByRole("heading", { level: 1, name: "react" })).toBeVisible();
  await expect(page.getByRole("link", { name: /라이브러리/u })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "목차" })).toBeVisible();
  expect(findings).toEqual({ forbiddenAssets: 0, forbiddenClasses: 0, fontImports: 0 });
});
