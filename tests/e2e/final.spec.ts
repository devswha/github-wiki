import { expect, test } from "@playwright/test";
import { writeFile } from "node:fs/promises";

const evidenceDir = ".omo/evidence";

test("final home route exposes main wiki panels", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Github.wiki:대문" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "최근 편집된 저장소" })).toBeVisible();
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/final-home.png`,
  });
});

test("final Github.wiki article route renders site article", async ({ page }) => {
  await page.goto("/w/Github.wiki");

  await expect(page.getByRole("heading", { name: "Github.wiki" })).toBeVisible();
  await expect(page.getByRole("table", { name: "repository information" })).toBeVisible();
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/final-github-wiki-article.png`,
  });
});

test("final repository article route renders encoded owner repo", async ({ page }) => {
  // Given
  const route = "/w/facebook%2Freact";

  // When
  await page.goto(route);

  // Then
  await expect(page).toHaveURL(/\/w\/facebook%2Freact$/);
  await expect(page.getByRole("heading", { level: 1, name: "react" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "목차" })).toBeVisible();
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/final-facebook-react-article.png`,
  });
});

test("final patina article route renders repo-name title and GitHub icon", async ({
  page,
}) => {
  // Given
  const route = "/w/devswha%2Fpatina";

  // When
  await page.goto(route);

  // Then
  await expect(page.getByRole("heading", { level: 1, name: "patina" })).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 1, name: "devswha/patina" }),
  ).toHaveCount(0);
  const infobox = page.getByRole("table", { name: "repository information" });
  const icon = infobox.getByRole("img", { name: "patina repository icon" });
  await expect(icon).toBeVisible();
  await expect
    .poll(async () =>
      icon.evaluate((element) => {
        const image = element as HTMLImageElement;

        return image.complete && image.naturalWidth > 0;
      }),
    )
    .toBe(true);
  await expect(infobox.getByRole("row", { name: /개발자 devswha/u })).toBeVisible();
  await expect(infobox.getByRole("row", { name: /저장소 patina/u })).toBeVisible();
  await expect(infobox.getByRole("row", { name: /성격/u })).toHaveCount(0);
  await expect(infobox.getByRole("row", { name: /^패키지/u })).toHaveCount(0);
  await expect(infobox).not.toContainText("GitHub repository icon");
  await expect(infobox).not.toContainText("assets/brand/patina-icon.svg");
  await expect(infobox).not.toContainText("patina-cli");
  await expect(infobox).not.toContainText("패키지 버전");
  await expect(infobox).not.toContainText("3.12.0");
  await expect(infobox).not.toContainText("npm 최신");
  await expect(infobox).not.toContainText("3.11.0");
  await expect(infobox).not.toContainText("GitHub 릴리스");
  await expect(infobox).not.toContainText("v3.9.0");
  await expect(infobox.getByRole("link", { name: "npm" })).toHaveCount(0);
  await expect(infobox.getByRole("link", { name: "GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/devswha/patina",
  );
  await expect(infobox.getByRole("link", { name: "공식 사이트" })).toHaveAttribute(
    "href",
    "https://patina.vibetip.help",
  );
  await expect(page.getByRole("navigation", { name: "목차" })).toContainText("용도와 한계");
  await expect(page.getByRole("heading", { name: "벤치마크" })).toBeVisible();
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/final-patina-article.png`,
  });
});

test("final go search opens encoded article route", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("searchbox", { name: "검색어" }).fill("facebook/react");
  await page.getByRole("button", { name: "이동" }).click();

  await expect(page).toHaveURL(/\/w\/facebook%2Freact$/);
  await expect(page.getByRole("heading", { name: "react" })).toBeVisible();
  await writeFile(
    `${evidenceDir}/final-search-go.txt`,
    `query=facebook/react\nurl=${page.url()}\n`,
  );
});

test("final missing repo search renders not-found shell", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("searchbox", { name: "검색어" }).fill("missing/repo");
  await page.getByRole("button", { name: "이동" }).click();

  await expect(page).toHaveURL(/\/w\/missing%2Frepo$/);
  await expect(page.getByRole("banner")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "문서를 찾을 수 없습니다" }),
  ).toBeVisible();
  await writeFile(
    `${evidenceDir}/final-search-missing-repo.txt`,
    `query=missing/repo\nurl=${page.url()}\n`,
  );
});

test("final visible scaffold links resolve to implemented surfaces", async ({ page }) => {
  await page.goto("/");

  await page
    .getByRole("navigation", { name: "주요 메뉴" })
    .getByRole("link", { name: "최근 변경" })
    .click();
  await expect(
    page.getByRole("article").getByRole("heading", { level: 1, name: "최근 변경" }),
  ).toBeVisible();

  await page.goto("/");
  await page
    .getByRole("navigation", { name: "주요 메뉴" })
    .getByRole("link", { name: "최근 토론" })
    .click();
  await expect(
    page.getByRole("article").getByRole("heading", { level: 1, name: "최근 토론" }),
  ).toBeVisible();

  await page.goto("/");
  await page
    .getByRole("navigation", { name: "분류" })
    .getByRole("link", { name: "저장소 문서" })
    .click();
  await expect(
    page
      .getByRole("article")
      .getByRole("heading", { level: 1, name: "분류: 저장소 문서" }),
  ).toBeVisible();

  await page.goto("/");
  await expect(page.getByRole("article").getByRole("link", { name: "vitejs/vite" })).toHaveCount(0);
  await expect(page.getByText("vitejs/vite")).toBeVisible();

  await page.goto("/w/facebook%2Freact");
  await page
    .getByRole("navigation", { name: "분류" })
    .getByRole("link", { name: "UI 프레임워크" })
    .click();
  await expect(
    page
      .getByRole("article")
      .getByRole("heading", { level: 1, name: "분류: UI 프레임워크" }),
  ).toBeVisible();
});

test("final mobile long repository article has no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/w/very-long-owner-name%2Fvery-long-repository-name-that-wraps");

  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/final-mobile-long-repo.png`,
  });
  await writeFile(
    `${evidenceDir}/final-mobile-long-repo.txt`,
    `clientWidth=${metrics.clientWidth}\nscrollWidth=${metrics.scrollWidth}\n`,
  );
});

test("final mobile patina article has no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/w/devswha%2Fpatina");

  const icon = page
    .getByRole("table", { name: "repository information" })
    .getByRole("img", {
      name: "patina repository icon",
    });
  await expect(icon).toBeVisible();
  await expect
    .poll(async () =>
      icon.evaluate((element) => {
        const image = element as HTMLImageElement;

        return image.complete && image.naturalWidth > 0;
      }),
    )
    .toBe(true);
  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/final-mobile-patina-article.png`,
  });
  await writeFile(
    `${evidenceDir}/final-mobile-patina-article.txt`,
    `clientWidth=${metrics.clientWidth}\nscrollWidth=${metrics.scrollWidth}\n`,
  );
});
