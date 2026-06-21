import { expect, test } from "@playwright/test";
import { writeFile } from "node:fs/promises";

test("article route updates browser title", async ({ page }) => {
  await page.goto("/w/facebook%2Freact");

  await expect(page).toHaveTitle("react - Github.wiki");
  await writeFile(
    ".omo/evidence/task-9-article-title.txt",
    `title=${await page.title()}\nurl=${page.url()}\n`,
  );
});
