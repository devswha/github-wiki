import { expect, type Locator, type Page, test } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

const evidenceDir = ".omo/evidence";
const themeStorageKey = "github-wiki-theme";
const namuText = "rgb(33, 37, 41)";
const namuLink = "rgb(2, 117, 216)";
const namuHeadingBorder = "rgb(204, 204, 204)";
const namuDarkText = "rgb(224, 224, 224)";
const namuDarkLink = "rgb(236, 159, 25)";
const namuDarkHeadingBorder = "rgb(56, 59, 64)";

type ColorStyles = {
  readonly backgroundColor: string;
  readonly borderBottomColor: string;
  readonly color: string;
};

type HeadingSample = {
  readonly heading: ColorStyles;
  readonly number: ColorStyles;
  readonly text: string;
};

type TocLinkPolicy = {
  readonly color: string;
  readonly visitedRuleColor: string | null;
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

async function writeMetrics(path: string, metrics: Record<string, unknown>): Promise<void> {
  await ensureEvidenceDir();
  await writeFile(`${evidenceDir}/${path}`, `${JSON.stringify(metrics, null, 2)}\n`);
}

async function colorStyles(locator: Locator): Promise<ColorStyles> {
  return locator.evaluate((element) => {
    const styles = getComputedStyle(element);

    return {
      backgroundColor: styles.backgroundColor,
      borderBottomColor: styles.borderBottomColor,
      color: styles.color,
    };
  });
}

async function sampleHeading(page: Page, sectionId: string): Promise<HeadingSample> {
  const section = page.locator(`#${sectionId}`);
  const heading = section.locator("h2");

  return {
    heading: await colorStyles(heading),
    number: await colorStyles(heading.locator(".section-number-link")),
    text: await heading.innerText(),
  };
}

async function sampleTocLinkPolicy(page: Page, href: string): Promise<TocLinkPolicy> {
  return page.locator(`.toc a[href="${href}"]`).evaluate((element) => {
    const styleRules = Array.from(document.styleSheets).flatMap((sheet) =>
      Array.from(sheet.cssRules).filter((rule): rule is CSSStyleRule => rule instanceof CSSStyleRule),
    );
    const visitedRule = styleRules.find((rule) =>
      rule.selectorText.split(",").some((selector) => selector.trim() === ".toc a:visited"),
    );

    return {
      color: getComputedStyle(element).color,
      visitedRuleColor: visitedRule?.style.color || null,
    };
  });
}

async function useStoredTheme(page: Page, theme: "dark" | "light"): Promise<void> {
  await page.addInitScript(
    ({ storageKey, storageValue }: { readonly storageKey: string; readonly storageValue: string }) => {
      window.localStorage.setItem(storageKey, storageValue);
    },
    { storageKey: themeStorageKey, storageValue: theme },
  );
}

function parseColor(value: string): Rgba {
  const match = /rgba?\(([^)]+)\)/u.exec(value);

  if (match === null || match[1] === undefined) {
    throw new Error(`Cannot parse CSS color: ${value}`);
  }

  const [red, green, blue, alpha] = match[1].split(",").map((part) => Number.parseFloat(part.trim()));

  if (red === undefined || green === undefined || blue === undefined) {
    throw new Error(`Missing CSS color channel: ${value}`);
  }

  return {
    alpha: alpha ?? 1,
    blue,
    green,
    red,
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
  const foregroundColor = parseColor(foreground);
  const backgroundColor = parseColor(background);
  const lighter = Math.max(luminance(foregroundColor), luminance(backgroundColor));
  const darker = Math.min(luminance(foregroundColor), luminance(backgroundColor));

  return (lighter + 0.05) / (darker + 0.05);
}

test.beforeEach(async () => {
  await ensureEvidenceDir();
});

test("section heading palette matches live Namu in light and night modes", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await useStoredTheme(page, "light");
  await page.goto("/w/devswha%2Fpatina");

  const light = {
    limits: await sampleHeading(page, "limits"),
    overview: await sampleHeading(page, "overview"),
  };

  await page.getByRole("button", { name: "나이트 모드" }).click();

  const dark = {
    limits: await sampleHeading(page, "limits"),
    overview: await sampleHeading(page, "overview"),
  };

  await page.screenshot({ fullPage: true, path: `${evidenceDir}/section-color-desktop-after.png` });
  await writeMetrics("section-color-browser-desktop.json", { dark, light });

  expect(light.overview.text).toBe("1. 개요");
  expect(light.limits.text).toBe("6. 용도와 한계");
  expect(light.overview.heading.color).toBe(namuText);
  expect(light.limits.heading.color).toBe(namuText);
  expect(light.overview.number.color).toBe(namuLink);
  expect(light.limits.number.color).toBe(namuLink);
  expect(light.overview.heading.borderBottomColor).toBe(namuHeadingBorder);
  expect(light.limits.heading.borderBottomColor).toBe(namuHeadingBorder);
  expect(dark.overview.heading.color).toBe(namuDarkText);
  expect(dark.limits.heading.color).toBe(namuDarkText);
  expect(dark.overview.number.color).toBe(namuDarkLink);
  expect(dark.limits.number.color).toBe(namuDarkLink);
  expect(dark.overview.heading.borderBottomColor).toBe(namuDarkHeadingBorder);
  expect(dark.limits.heading.borderBottomColor).toBe(namuDarkHeadingBorder);
});

test("section heading mobile night palette stays readable without overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await useStoredTheme(page, "dark");
  await page.goto("/w/devswha%2Fpatina");
  await page.locator('a[href="#limits"]').first().click();

  const pageSize = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  const article = await colorStyles(page.locator(".wiki-article"));
  const limits = await sampleHeading(page, "limits");
  const contrast = {
    number: contrastRatio(limits.number.color, article.backgroundColor),
    title: contrastRatio(limits.heading.color, article.backgroundColor),
  };

  await page.screenshot({ fullPage: true, path: `${evidenceDir}/section-color-mobile-night-after.png` });
  await writeMetrics("section-color-browser-mobile-night.json", {
    article,
    contrast,
    limits,
    pageSize,
  });

  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator("#limits")).toBeInViewport();
  expect(pageSize.scrollWidth).toBeLessThanOrEqual(pageSize.clientWidth);
  expect(limits.heading.color).toBe(namuDarkText);
  expect(limits.number.color).toBe(namuDarkLink);
  expect(limits.heading.borderBottomColor).toBe(namuDarkHeadingBorder);
  expect(contrast.title).toBeGreaterThanOrEqual(4.5);
  expect(contrast.number).toBeGreaterThanOrEqual(4.5);
});

test("section toc anchors do not inherit global visited purple", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await useStoredTheme(page, "light");
  await page.goto("/w/devswha%2Fpatina");

  const light = {
    limits: await sampleTocLinkPolicy(page, "#limits"),
    overview: await sampleTocLinkPolicy(page, "#overview"),
  };

  await page.getByRole("button", { name: "나이트 모드" }).click();

  const dark = {
    limits: await sampleTocLinkPolicy(page, "#limits"),
    overview: await sampleTocLinkPolicy(page, "#overview"),
  };

  await writeMetrics("section-color-toc-link-policy.json", { dark, light });

  expect(light.overview.color).toBe(namuLink);
  expect(light.limits.color).toBe(namuLink);
  expect(light.overview.visitedRuleColor).toBe("var(--wiki-link)");
  expect(light.limits.visitedRuleColor).toBe("var(--wiki-link)");
  expect(dark.overview.color).toBe(namuDarkLink);
  expect(dark.limits.color).toBe(namuDarkLink);
  expect(dark.overview.visitedRuleColor).toBe("var(--wiki-link)");
  expect(dark.limits.visitedRuleColor).toBe("var(--wiki-link)");
});
