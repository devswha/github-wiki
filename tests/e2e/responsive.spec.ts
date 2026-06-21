import { expect, type Locator, test } from "@playwright/test";
import { writeFile } from "node:fs/promises";

type BoundingBox = {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
};

async function mustBox(locator: Locator, label: string): Promise<BoundingBox> {
  const box = await locator.boundingBox();

  if (box === null) {
    throw new Error(`${label} is not visible enough to measure.`);
  }

  return box;
}

function boxesOverlap(first: BoundingBox, second: BoundingBox): boolean {
  return (
    first.x < second.x + second.width &&
    first.x + first.width > second.x &&
    first.y < second.y + second.height &&
    first.y + first.height > second.y
  );
}

test("desktop article floats infobox and clears full-width sections", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/w/facebook%2Freact");

  await page.screenshot({
    fullPage: true,
    path: ".omo/evidence/task-8-article-desktop-layout.png",
  });

  const article = await mustBox(page.locator(".wiki-article"), "article");
  const infobox = await mustBox(page.locator(".article-aside"), "article infobox");
  const summary = await mustBox(page.locator(".article-summary"), "article summary");
  const firstHeading = await mustBox(page.locator(".article-section h2").first(), "first h2");

  expect(infobox.x).toBeGreaterThan(summary.x + summary.width + 12);
  expect(infobox.y).toBeLessThan(summary.y + 24);
  expect(firstHeading.y).toBeGreaterThan(infobox.y + infobox.height + 16);
  expect(firstHeading.width).toBeGreaterThanOrEqual(article.width - 70);
});

test("mobile article stacks infobox before sections without overlap", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/w/very-long-owner-name%2Fvery-long-repository-name-that-wraps");

  await page.screenshot({
    fullPage: true,
    path: ".omo/evidence/task-8-long-mobile-layout.png",
  });

  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  const title = await mustBox(page.locator(".article-title-group"), "article title");
  const actions = await mustBox(page.locator(".article-actions"), "article actions");
  const infobox = await mustBox(page.locator(".article-aside"), "article infobox");
  const firstSection = await mustBox(
    page.locator(".article-section").first(),
    "first article section",
  );
  const headerDisplay = await page
    .locator(".article-header")
    .evaluate((element) => getComputedStyle(element).display);

  expect(headerDisplay).toBe("flex");
  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
  expect(infobox.y).toBeLessThan(firstSection.y);
  expect(boxesOverlap(title, actions)).toBe(false);
});

test("keyboard tab order reaches wiki controls with visible focus", async ({ page }) => {
  await page.goto("/w/facebook%2Freact");

  const focusStates: string[] = [];

  for (let index = 0; index < 14; index += 1) {
    await page.keyboard.press("Tab");
    const state = await page.evaluate(() => {
      const element = document.activeElement;

      if (!(element instanceof HTMLElement)) {
        return "unknown:none:0px";
      }

      const styles = getComputedStyle(element);
      const label =
        element.getAttribute("aria-label") ??
        element.textContent?.trim() ??
        element.getAttribute("placeholder") ??
        element.tagName;

      return `${label}:${styles.outlineStyle}:${styles.outlineWidth}`;
    });

    focusStates.push(state);
  }

  const joinedStates = focusStates.join("\n");

  expect(joinedStates).toContain("Github.wiki");
  expect(joinedStates).toContain("검색");
  expect(joinedStates).toContain("이동");
  expect(joinedStates).toContain("편집");
  expect(focusStates.every((state) => !state.endsWith(":none:0px"))).toBe(true);

  await writeFile(".omo/evidence/task-8-keyboard-focus.txt", `${joinedStates}\n`);
});

test("mobile search results stay inside the viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.getByRole("searchbox", { name: "검색어" }).fill("react");
  await page.getByRole("button", { name: "검색" }).click();

  await expect(page.getByRole("list", { name: "검색 결과" })).toBeVisible();

  const metrics = await page.evaluate(() => {
    const results = document.querySelector(".search-results");
    const box =
      results instanceof HTMLElement ? results.getBoundingClientRect() : null;

    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      resultsLeft: box?.left ?? -1,
      resultsRight: box?.right ?? Number.POSITIVE_INFINITY,
    };
  });

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
  expect(metrics.resultsLeft).toBeGreaterThanOrEqual(0);
  expect(metrics.resultsRight).toBeLessThanOrEqual(metrics.clientWidth);
});
