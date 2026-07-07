import type { WikiArticle } from "./types";

export const firecrawlArticle = {
  slug: "firecrawl/firecrawl",
  title: "firecrawl",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "Firecrawl은 웹을 대규모로 검색·스크레이프하고 상호작용하는 API다. 웹페이지를 LLM이 쓰기 좋은 형태로 변환해 에이전트의 웹 데이터 수집을 돕는다.",
  infobox: [
    { label: "Owner", value: "firecrawl", valueHref: "https://github.com/firecrawl" },
    {
      label: "Repository",
      value: "firecrawl",
      valueHref: "https://github.com/firecrawl/firecrawl",
    },
    { label: "Primary language", value: "TypeScript" },
    {
      label: "License",
      value: "AGPL-3.0",
      valueHref: "https://github.com/firecrawl/firecrawl/blob/main/LICENSE",
    },
    { label: "Homepage", value: "firecrawl.dev", valueHref: "https://firecrawl.dev" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/firecrawl/firecrawl" },
        { label: "공식 사이트", href: "https://firecrawl.dev" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "LLM용 웹 검색·스크레이프 API",
      body: [
        "저장소 설명은 Firecrawl을 웹을 대규모로 검색·스크레이프하고 상호작용하는 API로 정의한다. 웹페이지를 마크다운 등 LLM 친화적 형태로 변환해 에이전트가 웹 데이터를 다루기 쉽게 만든다.",
        "TypeScript로 작성되고 AGPL-3.0으로 공개되어 있으며, 클라우드 API와 자가호스팅을 함께 제공한다.",
      ],
      links: [
        {
          description: "Firecrawl 소스와 API 문서로 이어지는 저장소다.",
          href: "https://github.com/firecrawl/firecrawl",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "코딩 에이전트가 아니라, 에이전트·RAG 파이프라인에 웹 데이터를 공급하는 데이터 수집 계층이다. browser-use가 웹을 조작한다면 Firecrawl은 웹을 읽어 구조화한다.",
        "이 위키에서는 에이전트의 웹 데이터 입력 축을 대표하는 인접 문서로 둔다.",
      ],
    },
  ],
} satisfies WikiArticle;
