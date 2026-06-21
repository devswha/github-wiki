import { expect, test } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

const evidenceDir = ".omo/evidence";

async function writeCopySafetyEvidence(message: string): Promise<void> {
  await mkdir(evidenceDir, { recursive: true });
  await writeFile(`${evidenceDir}/namu-visual-forbidden-patterns.txt`, message);
}

test("rendered pages do not expose copied Namu classes or assets", async ({ page }) => {
  const routes = [
    "/",
    "/w/facebook%2Freact",
    "/w/very-long-owner-name%2Fvery-long-repository-name-that-wraps",
  ] as const;
  const findings: string[] = [];

  for (const route of routes) {
    await page.goto(route);

    const forbiddenClasses = await page.locator('[class*="namu" i]').count();
    const forbiddenAssets = await page.locator('img[src*="namu" i]').count();

    if (forbiddenClasses > 0 || forbiddenAssets > 0) {
      findings.push(`${route}: classes=${forbiddenClasses} assets=${forbiddenAssets}`);
    }
  }

  await writeCopySafetyEvidence(
    findings.length === 0 ? "no rendered Namu classes/assets found\n" : findings.join("\n"),
  );

  expect(findings).toEqual([]);
});
