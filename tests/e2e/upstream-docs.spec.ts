import { expect, type Page, test } from "@playwright/test";
import { writeFile } from "node:fs/promises";

const evidenceDir = ".omo/evidence";

const upstreamArticles = [
  {
    homeLabel: "Yeachan-Heo/gajae-code",
    keyword: "red-claw",
    phrase: "deep-interview",
    route: "/w/Yeachan-Heo%2Fgajae-code",
    title: "gajae-code",
    toc: [
      "베타 상태",
      "gjc 실행 방식",
      "작업 루프",
      "패키지 배치",
      "패키지 경계",
      "provider 인증",
      "재시도와 검증",
      "운영 전제",
    ],
  },
  {
    homeLabel: "code-yeongyu/lazycodex",
    keyword: "orchestration",
    phrase: "npx --yes --package oh-my-openagent",
    route: "/w/code-yeongyu%2Flazycodex",
    title: "lazycodex",
    toc: [
      "배포 레포",
      "설치 진입점",
      "OmO 위임 구조",
      "hooks.json",
      "zero-config 설치",
      "플러그인 묶음",
      "문서 사이트",
      "맞는 사용처",
    ],
  },
  {
    homeLabel: "Yeachan-Heo/oh-my-claudecode",
    keyword: "Claude Code",
    phrase: "Team Mode",
    route: "/w/Yeachan-Heo%2Foh-my-claudecode",
    title: "oh-my-claudecode",
    toc: [
      "Claude Code 플러그인",
      "전문 에이전트",
      "hook 라이프사이클",
      "설치 이름",
      "협업 모드",
      "명령 표면",
      "스킬 묶음",
      "요구 조건",
    ],
  },
  {
    homeLabel: "Yeachan-Heo/oh-my-codex",
    keyword: "OpenAI Codex CLI",
    phrase: "$ultragoal",
    route: "/w/Yeachan-Heo%2Foh-my-codex",
    title: "oh-my-codex",
    toc: [
      "Codex CLI 전제",
      "인증 확인",
      "단발 실행",
      "OMX 설치",
      "스토리형 워크플로우",
      "플러그인 런타임",
      "운영 명령",
      "주의점",
    ],
  },
  {
    homeLabel: "code-yeongyu/oh-my-openagent",
    keyword: "OpenAgent",
    phrase: "ultrawork",
    route: "/w/code-yeongyu%2Foh-my-openagent",
    title: "oh-my-openagent",
    toc: [
      "하네스 전환",
      "설치 가이드 흐름",
      "패키지와 설정 이름",
      "익명 telemetry",
      "내장 기능 지도",
      "Team Mode와 모델",
      "도구 계층",
      "Manifesto",
    ],
  },
] as const;

async function collectOverflowMetrics(page: Page) {
  return page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
}

test("renders every oh-my-docs upstream article from search and direct routes", async ({
  page,
}) => {
  await page.goto("/");

  for (const article of upstreamArticles) {
    await expect(
      page.getByRole("article").getByRole("link", { name: article.homeLabel }),
    ).toBeVisible();
  }

  for (const article of upstreamArticles) {
    await page.goto("/");
    await page.getByRole("searchbox", { name: "검색어" }).fill(article.keyword);
    await page.getByRole("button", { name: "검색" }).click();
    await expect(page.getByRole("list", { name: "검색 결과" })).toContainText(article.title);

    await page.goto(article.route);
    await expect(page.getByRole("heading", { level: 1, name: article.title })).toBeVisible();
    await expect(page.getByRole("table", { name: "repository information" })).toBeVisible();
    await expect(page.getByRole("navigation", { name: "목차" })).toBeVisible();
    await expect(page.getByRole("navigation", { name: "목차" }).getByRole("link")).toHaveText(
      article.toc,
    );
    await expect(
      page.getByRole("main", { name: "Github.wiki shell" }),
    ).toContainText(article.phrase);
    await expect(
      page.getByRole("table", { name: "repository information" }).getByRole("link", {
        name: "GitHub",
      }),
    ).toHaveAttribute("href", /^https:\/\/github\.com\//u);
  }

  await page.goto("/w/code-yeongyu%2Foh-my-openagent");
  const metrics = await collectOverflowMetrics(page);
  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
  const paragraphWrapping = await page.locator(".article-section p").first().evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      overflowWrap: style.overflowWrap,
      wordBreak: style.wordBreak,
    };
  });
  expect(paragraphWrapping).toEqual({
    overflowWrap: "break-word",
    wordBreak: "normal",
  });
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/upstream-docs-desktop.png`,
  });
  await writeFile(
    `${evidenceDir}/upstream-docs-desktop.json`,
    JSON.stringify({ checked: upstreamArticles.map((article) => article.title), metrics }, null, 2),
  );
});

test("keeps malformed and unknown upstream routes inside the shell", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  await page.goto("/w/%25E0%25A4%25A");
  await expect(page.getByRole("banner")).toBeVisible();
  await expect(page.getByRole("heading", { name: "문서를 찾을 수 없습니다" })).toBeVisible();

  await page.goto("/w/Yeachan-Heo%2Fnot-real-upstream");
  await expect(page.getByRole("banner")).toBeVisible();
  await expect(page.getByRole("heading", { name: "문서를 찾을 수 없습니다" })).toBeVisible();

  const metrics = await collectOverflowMetrics(page);
  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/upstream-docs-edge-mobile.png`,
  });
  await writeFile(
    `${evidenceDir}/upstream-docs-edge.json`,
    JSON.stringify(metrics, null, 2),
  );
});

test("keeps upstream mobile night article readable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/w/Yeachan-Heo%2Foh-my-codex");
  await page.getByRole("button", { name: "나이트 모드" }).click();

  await expect(page.getByRole("heading", { level: 1, name: "oh-my-codex" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "목차" })).toBeVisible();
  await expect(page.getByRole("list", { name: "oh-my-codex 기본 흐름" })).toBeVisible();

  const metrics = await collectOverflowMetrics(page);
  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
  await page.screenshot({
    fullPage: true,
    path: `${evidenceDir}/upstream-docs-mobile-night.png`,
  });
  await writeFile(
    `${evidenceDir}/upstream-docs-mobile-night.json`,
    JSON.stringify(metrics, null, 2),
  );
});
