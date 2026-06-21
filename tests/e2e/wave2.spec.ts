import { expect, test } from "@playwright/test";
import { writeFile } from "node:fs/promises";

const evidenceDir = ".omo/evidence";

test("task 3 encoded repository route loads in the browser", async ({ page }) => {
  await page.goto("/w/facebook%2Freact");

  await expect(page.getByRole("heading", { name: "react" })).toBeVisible();
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/task-3-encoded-route.png`,
  });
});

test("task 3 unknown wiki route stays inside the shell", async ({ page }) => {
  await page.goto("/w/nope");

  await expect(page.getByRole("banner")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "문서를 찾을 수 없습니다" }),
  ).toBeVisible();
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/task-3-not-found-route.png`,
  });
});

test("task 4 shell header is usable on desktop and mobile", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/");

  await expect(page.getByRole("navigation", { name: "주요 메뉴" })).toBeVisible();
  await expect(page.getByRole("button", { name: "계정" })).toBeVisible();
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/task-4-header-desktop.png`,
  });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await expect(page.getByRole("navigation", { name: "주요 메뉴" })).toBeVisible();
  await expect(page.getByRole("searchbox", { name: "검색어" })).toBeVisible();
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/task-4-header-mobile.png`,
  });
});

test("task 5 home panels render and navigate to repository pages", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Github.wiki:대문" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "최근 편집된 저장소" })).toBeVisible();
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/task-5-home-panels.png`,
  });

  await page.getByRole("article").getByRole("link", { name: "facebook/react" }).click();
  await expect(page.getByRole("heading", { name: "react" })).toBeVisible();
  await writeFile(
    `${evidenceDir}/task-5-home-link-navigation.txt`,
    `clicked facebook/react link\nurl=${page.url()}\n`,
  );
});

test("task 6 repository article layout and toc anchor work", async ({ page }) => {
  await page.goto("/w/facebook%2Freact");

  await expect(page.getByRole("table", { name: "repository information" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "목차" })).toBeVisible();
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/task-6-article-desktop.png`,
  });

  await page.getByRole("navigation", { name: "목차" }).getByRole("link", { name: "구조" }).click();
  await expect(page).toHaveURL(/#structure$/);
  await writeFile(
    `${evidenceDir}/task-6-toc-anchor.txt`,
    `clicked toc item 구조\nurl=${page.url()}\n`,
  );
});

test("task 7 exact go and empty search behavior are deterministic", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("searchbox", { name: "검색어" }).fill("facebook/react");
  await page.getByRole("button", { name: "이동" }).click();
  await expect(page.getByRole("heading", { name: "react" })).toBeVisible();
  await writeFile(
    `${evidenceDir}/task-7-go-exact.txt`,
    `go query=facebook/react\nurl=${page.url()}\n`,
  );

  await page.goto("/");
  const beforeUrl = page.url();
  await page.getByRole("button", { name: "검색" }).click();
  await expect(page).toHaveURL(beforeUrl);
  await expect(page.getByRole("heading", { name: "Github.wiki:대문" })).toBeVisible();
  await writeFile(
    `${evidenceDir}/task-7-empty-search.txt`,
    `empty search stayed on home\nurl=${page.url()}\n`,
  );
});
