import { expect, type Page, test } from "@playwright/test";

async function expectNoHorizontalOverflow(page: Page): Promise<void> {
  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
}

type BoundingBox = {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
};

async function mustBox(locator: ReturnType<Page["locator"]>, label: string): Promise<BoundingBox> {
  const box = await locator.boundingBox();

  if (box === null) {
    throw new Error(`${label} could not be measured.`);
  }

  return box;
}

test("desktop keeps patina star action beside special functions", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  const header = page.getByRole("banner");
  const primaryNavigation = header.getByRole("navigation", { name: "주요 메뉴" });
  const specialButton = primaryNavigation.getByRole("button", { name: "특수 기능" });
  const starLink = primaryNavigation.getByRole("link", {
    name: "devswha/patina GitHub Star 찍기",
  });

  await expect(page.getByRole("region", { name: "patina 저장소 홍보" })).toHaveCount(0);
  await expect(starLink).toBeVisible();
  await expect(starLink).toHaveAttribute("href", "https://github.com/devswha/patina");

  const headerBox = await mustBox(header, "wiki header");
  const specialBox = await mustBox(specialButton, "special functions button");
  const starBox = await mustBox(starLink, "patina star link");

  expect(headerBox.height).toBeLessThanOrEqual(60);
  expect(starBox.x).toBeGreaterThan(specialBox.x);
  expect(Math.abs(starBox.y - specialBox.y)).toBeLessThanOrEqual(4);
  await expectNoHorizontalOverflow(page);

  await page.screenshot({
    fullPage: true,
    path: ".omo/evidence/patina-banner-desktop.png",
  });
});

test("mobile keeps patina star action in the header without widening the page", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/w/devswha%2Fpatina");

  const header = page.getByRole("banner");
  const primaryNavigation = header.getByRole("navigation", { name: "주요 메뉴" });
  const starLink = primaryNavigation.getByRole("link", {
    name: "devswha/patina GitHub Star 찍기",
  });

  await expect(page.getByRole("region", { name: "patina 저장소 홍보" })).toHaveCount(0);
  await expect(starLink).toBeVisible();
  await expectNoHorizontalOverflow(page);

  await page.screenshot({
    fullPage: true,
    path: ".omo/evidence/patina-banner-mobile.png",
  });
});
