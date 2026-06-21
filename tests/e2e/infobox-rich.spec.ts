import { expect, test } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

const evidenceDir = ".omo/evidence";

type InfoboxMetrics = {
  readonly h1: string | null;
  readonly linkLabels: readonly string[];
  readonly mobileClientWidth?: number;
  readonly mobileScrollWidth?: number;
  readonly rowLabels: readonly string[];
};

async function ensureEvidenceDir(): Promise<void> {
  await mkdir(evidenceDir, { recursive: true });
}

async function writeEvidence(name: string, value: InfoboxMetrics): Promise<void> {
  await ensureEvidenceDir();
  await writeFile(`${evidenceDir}/${name}`, `${JSON.stringify(value, null, 2)}\n`);
}

test.beforeEach(async () => {
  await ensureEvidenceDir();
});

test("trimmed Namu-style infobox renders linked Korean rows without version noise", async ({
  page,
}) => {
  // Given
  await page.setViewportSize({ width: 1280, height: 900 });

  // When
  await page.goto("/w/code-yeongyu%2Flazycodex");

  // Then
  const infobox = page.getByRole("table", { name: "repository information" });
  const metrics = await infobox.evaluate((element): InfoboxMetrics => {
    const rowLabels = Array.from(element.querySelectorAll("th")).map(
      (node) => node.textContent?.trim() ?? "",
    );
    const linkLabels = Array.from(element.querySelectorAll("a")).map(
      (node) => node.textContent?.trim() ?? "",
    );

    return {
      h1: document.querySelector("h1")?.textContent ?? null,
      linkLabels,
      rowLabels,
    };
  });

  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/g010-lazycodex-trimmed-infobox.png`,
  });
  await writeEvidence("g010-lazycodex-trimmed-infobox.json", metrics);

  await expect(page.getByRole("heading", { level: 1, name: "lazycodex" })).toBeVisible();
  await expect(infobox.getByRole("row", { name: /개발자 code-yeongyu/u })).toBeVisible();
  await expect(infobox.getByRole("row", { name: /저장소 lazycodex/u })).toBeVisible();
  await expect(infobox.getByRole("row", { name: /라이선스 MIT/u })).toBeVisible();
  await expect(infobox.getByRole("row", { name: /공식 사이트 lazycodex\.ai/u })).toBeVisible();
  await expect(infobox.getByRole("row", { name: /관련 링크/u })).toBeVisible();
  await expect(infobox.getByRole("row", { name: /성격/u })).toHaveCount(0);
  await expect(infobox.getByRole("row", { name: /^패키지/u })).toHaveCount(0);
  await expect(infobox.getByRole("row", { name: /기본 브랜치/u })).toHaveCount(0);
  await expect(infobox.getByRole("row", { name: /GitHub 릴리스/u })).toHaveCount(0);
  await expect(infobox.getByRole("row", { name: /npm 최신/u })).toHaveCount(0);
  await expect(infobox.getByRole("row", { name: /패키지 버전/u })).toHaveCount(0);
  await expect(infobox.getByRole("row", { name: /스타 \/ 포크/u })).toHaveCount(0);
  await expect(infobox.getByRole("link", { name: "GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/code-yeongyu/lazycodex",
  );
  await expect(infobox.getByRole("link", { name: "code-yeongyu" })).toHaveAttribute(
    "href",
    "https://github.com/code-yeongyu",
  );
  await expect(infobox.getByRole("link", { name: "공식 사이트" })).toHaveAttribute(
    "href",
    "https://lazycodex.ai",
  );
  await expect(infobox.getByRole("link", { name: "릴리스" })).toHaveCount(0);
  await expect(infobox.getByRole("link", { name: "npm" })).toHaveCount(0);
  await expect(infobox.getByRole("link", { name: "lazycodex-ai" })).toHaveCount(0);
  expect(metrics.rowLabels).toEqual(
    expect.arrayContaining(["개발자", "저장소", "주요 언어", "라이선스", "공식 사이트", "관련 링크"]),
  );
  expect(metrics.linkLabels).toEqual(
    expect.arrayContaining(["GitHub", "code-yeongyu", "lazycodex", "공식 사이트"]),
  );
});

test("trimmed patina infobox stays readable on mobile", async ({
  page,
}) => {
  // Given
  await page.setViewportSize({ width: 390, height: 844 });

  // When
  await page.goto("/w/devswha%2Fpatina");

  // Then
  const infobox = page.getByRole("table", { name: "repository information" });
  const metrics = await infobox.evaluate((element): InfoboxMetrics => {
    const linkLabels = Array.from(element.querySelectorAll("a")).map(
      (node) => node.textContent?.trim() ?? "",
    );
    const rowLabels = Array.from(element.querySelectorAll("th")).map(
      (node) => node.textContent?.trim() ?? "",
    );

    return {
      h1: document.querySelector("h1")?.textContent ?? null,
      linkLabels,
      mobileClientWidth: document.documentElement.clientWidth,
      mobileScrollWidth: document.documentElement.scrollWidth,
      rowLabels,
    };
  });

  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/g010-mobile-patina-trimmed-infobox.png`,
  });
  await writeEvidence("g010-mobile-patina-trimmed-infobox.json", metrics);

  await expect(infobox.getByRole("img", { name: "patina repository icon" })).toBeVisible();
  await expect(infobox.getByRole("row", { name: /개발자 devswha/u })).toBeVisible();
  await expect(infobox.getByRole("row", { name: /저장소 patina/u })).toBeVisible();
  await expect(infobox.getByRole("link", { name: "GitHub" })).toBeVisible();
  await expect(infobox.getByRole("link", { name: "공식 사이트" })).toHaveAttribute(
    "href",
    "https://patina.vibetip.help",
  );
  await expect(infobox.getByRole("row", { name: /성격/u })).toHaveCount(0);
  await expect(infobox.getByRole("row", { name: /^패키지/u })).toHaveCount(0);
  await expect(infobox.getByRole("row", { name: /GitHub 릴리스/u })).toHaveCount(0);
  await expect(infobox.getByRole("row", { name: /npm 최신/u })).toHaveCount(0);
  await expect(infobox.getByRole("row", { name: /패키지 버전/u })).toHaveCount(0);
  await expect(infobox.getByRole("row", { name: /스타 \/ 포크/u })).toHaveCount(0);
  await expect(infobox.getByRole("link", { name: "npm" })).toHaveCount(0);
  await expect(infobox.getByRole("link", { name: "patina-cli" })).toHaveCount(0);
  expect(metrics.linkLabels.length).toBeGreaterThanOrEqual(5);
  expect(metrics.mobileClientWidth).toBeDefined();
  expect(metrics.mobileScrollWidth).toBeDefined();
  if (
    metrics.mobileClientWidth === undefined ||
    metrics.mobileScrollWidth === undefined
  ) {
    throw new Error("Mobile infobox metrics were not captured.");
  }
  expect(metrics.mobileScrollWidth).toBeLessThanOrEqual(metrics.mobileClientWidth);
});

test("generic repository infobox derives GitHub links from owner repo slug", async ({
  page,
}) => {
  // Given
  await page.setViewportSize({ width: 1280, height: 900 });

  // When
  await page.goto("/w/facebook%2Freact");

  // Then
  const infobox = page.getByRole("table", { name: "repository information" });
  const metrics = await infobox.evaluate((element): InfoboxMetrics => {
    const linkLabels = Array.from(element.querySelectorAll("a")).map(
      (node) => node.textContent?.trim() ?? "",
    );
    const rowLabels = Array.from(element.querySelectorAll("th")).map(
      (node) => node.textContent?.trim() ?? "",
    );

    return {
      h1: document.querySelector("h1")?.textContent ?? null,
      linkLabels,
      rowLabels,
    };
  });

  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/g009-generic-derived-infobox.png`,
  });
  await writeEvidence("g009-generic-derived-infobox.json", metrics);

  await expect(page.getByRole("heading", { level: 1, name: "react" })).toBeVisible();
  await expect(infobox.getByRole("row", { name: /개발자 facebook/u })).toBeVisible();
  await expect(infobox.getByRole("row", { name: /저장소 react/u })).toBeVisible();
  await expect(infobox.getByRole("link", { name: "GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/facebook/react",
  );
  await expect(infobox.getByRole("link", { name: "릴리스" })).toHaveCount(0);
  expect(metrics.linkLabels).toEqual(expect.arrayContaining(["GitHub", "facebook", "react"]));
});
