import { expect, test } from "@playwright/test";

test("serves Github.wiki shell through the browser surface", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("navigation", { name: "주요 메뉴" }).getByRole("link", {
      name: "Github.wiki",
    }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Github.wiki:대문" })).toBeVisible();
});
