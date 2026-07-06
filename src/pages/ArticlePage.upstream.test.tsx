import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { AppRoutes } from "../App";
import type { ArticleBodyBlock, WikiArticle } from "../wiki/types";
import { findArticleBySlug } from "../wiki/lookup";

const upstreamArticleCases = [
  {
    route: "/w/Yeachan-Heo%2Fgajae-code",
    title: "gajae-code",
    owner: "Yeachan-Heo",
    repository: "gajae-code",
    expectedText: "deep-interview",
    sourceTerms: ["auth-broker", "컨텍스트 승격", "append-only", "agent.db"],
    expectedToc: [
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
    route: "/w/code-yeongyu%2Flazycodex",
    title: "lazycodex",
    owner: "code-yeongyu",
    repository: "lazycodex",
    expectedText: "npx --yes --package oh-my-openagent",
    sourceTerms: ["규율 에이전트", "hooks.json", "zero-config", "remove-ai-slops"],
    expectedToc: [
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
    route: "/w/Yeachan-Heo%2Foh-my-claudecode",
    title: "oh-my-claudecode",
    owner: "Yeachan-Heo",
    repository: "oh-my-claudecode",
    expectedText: "Team Mode",
    sourceTerms: ["19개의 전문 에이전트", "11개 라이프사이클", "project-memory", "AST-Grep"],
    expectedToc: [
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
    route: "/w/Yeachan-Heo%2Foh-my-codex",
    title: "oh-my-codex",
    owner: "Yeachan-Heo",
    repository: "oh-my-codex",
    expectedText: "$ultragoal",
    sourceTerms: ["codex login status", "context-hooks", "omx exec", "v0.19.0"],
    expectedToc: [
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
    route: "/w/code-yeongyu%2Foh-my-openagent",
    title: "oh-my-openagent",
    owner: "code-yeongyu",
    repository: "oh-my-openagent",
    expectedText: "ultrawork",
    sourceTerms: ["models.dev", "task_create", "NDJSON", "hashline_edit"],
    expectedToc: [
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

function requireArticle(slug: string): WikiArticle {
  const article = findArticleBySlug(slug);

  if (article === null) {
    throw new Error(`Missing article fixture: ${slug}`);
  }

  return article;
}

function bodyBlockText(block: ArticleBodyBlock): string {
  if (typeof block === "string") {
    return block;
  }

  return [block.label, ...block.items].join(" ");
}

function articleText(article: WikiArticle): string {
  return [
    article.summary,
    ...article.sections.flatMap((section) => [
      section.title,
      ...section.body.map(bodyBlockText),
      ...(section.links?.map((link) => `${link.label} ${link.description ?? ""}`) ?? []),
      ...(section.cards?.map((card) => `${card.title} ${card.body}`) ?? []),
      ...(section.table?.rows.flatMap((row) => row) ?? []),
      ...(section.subsections?.flatMap((subsection) => [
        subsection.title,
        ...subsection.body.map(bodyBlockText),
        ...(subsection.table?.rows.flatMap((row) => row) ?? []),
      ]) ?? []),
    ]),
  ].join(" ");
}

function paragraphCount(article: WikiArticle): number {
  return article.sections.reduce((total, section) => {
    const sectionParagraphs = section.body.filter(
      (block) => typeof block === "string",
    ).length;
    const subsectionParagraphs =
      section.subsections?.reduce(
        (subTotal, subsection) =>
          subTotal +
          subsection.body.filter((block) => typeof block === "string").length,
        0,
      ) ?? 0;

    return total + sectionParagraphs + subsectionParagraphs;
  }, 0);
}

const patinaBannedFragments = [
  "workflow layer",
  "agent harness",
  "coding-agent harness",
  "multi-harness",
  "제공합니다",
  "가지고 있습니다",
  "다음과 같습니다",
  "에 의해",
  "당신",
] as const;

describe("ArticlePage upstream repositories", () => {
  it.each(upstreamArticleCases)(
    "renders the sourced upstream page for $title",
    ({ expectedText, owner, repository, route, title }) => {
      // Given
      render(
        <MemoryRouter initialEntries={[route]}>
          <AppRoutes />
        </MemoryRouter>,
      );

      // When
      const infobox = screen.getByRole("table", { name: /repository information/i });

      // Then
      expect(screen.getByRole("heading", { level: 1, name: title })).toBeVisible();
      expect(
        within(infobox).getByRole("row", {
          name: new RegExp(`개발자 ${owner}`, "u"),
        }),
      ).toBeVisible();
      expect(
        within(infobox).getByRole("row", {
          name: new RegExp(`저장소 ${repository}`, "u"),
        }),
      ).toBeVisible();
      expect(within(infobox).getByRole("link", { name: "GitHub" })).toHaveAttribute(
        "href",
        `https://github.com/${owner}/${repository}`,
      );
      expect(screen.getByRole("main", { name: "Github.wiki shell" })).toHaveTextContent(
        expectedText,
      );
      expect(screen.getByRole("navigation", { name: "목차" })).toBeVisible();
    },
  );

  it.each(upstreamArticleCases)(
    "renders a repository-specific outline for $title",
    ({ expectedToc, route }) => {
      // Given
      render(
        <MemoryRouter initialEntries={[route]}>
          <AppRoutes />
        </MemoryRouter>,
      );

      // When
      const toc = screen.getByRole("navigation", { name: "목차" });
      const tocItems = within(toc)
        .getAllByRole("link")
        .map((link) => link.textContent);

      // Then
      expect(tocItems).toEqual(expectedToc);
      expect(tocItems[0]).not.toBe("개요");
    },
  );

  it.each(upstreamArticleCases)(
    "renders expanded source-backed content for $title",
    ({ route, sourceTerms }) => {
      // Given
      const article = requireArticle(decodeURIComponent(route.slice(3)));
      const text = articleText(article);

      // When
      const stringParagraphCount = paragraphCount(article);

      // Then
      expect(stringParagraphCount).toBeGreaterThanOrEqual(18);
      for (const sourceTerm of sourceTerms) {
        expect(text).toContain(sourceTerm);
      }
    },
  );

  it.each(upstreamArticleCases)(
    "keeps upstream prose patina-clean for $title",
    ({ route }) => {
      // Given
      const article = requireArticle(decodeURIComponent(route.slice(3)));
      const text = articleText(article);

      // When
      const leftovers = patinaBannedFragments.filter((fragment) => text.includes(fragment));

      // Then
      expect(leftovers).toEqual([]);
    },
  );
});
