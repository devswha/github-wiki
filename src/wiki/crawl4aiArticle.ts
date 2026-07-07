import type { WikiArticle } from "./types";

export const crawl4aiArticle = {
  slug: "unclecode/crawl4ai",
  title: "crawl4ai",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "Crawl4AI는 LLM 친화적인 오픈소스 웹 크롤러·스크레이퍼다. 웹 콘텐츠를 에이전트·RAG가 바로 쓰기 좋은 형태로 수집한다.",
  infobox: [
    { label: "Owner", value: "unclecode", valueHref: "https://github.com/unclecode" },
    {
      label: "Repository",
      value: "crawl4ai",
      valueHref: "https://github.com/unclecode/crawl4ai",
    },
    { label: "Primary language", value: "Python" },
    {
      label: "License",
      value: "Apache-2.0",
      valueHref: "https://github.com/unclecode/crawl4ai/blob/main/LICENSE",
    },
    { label: "Homepage", value: "crawl4ai.com", valueHref: "https://crawl4ai.com" },
    { label: "Package", value: "crawl4ai" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/unclecode/crawl4ai" },
        { label: "공식 사이트", href: "https://crawl4ai.com" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "LLM 친화적 웹 크롤러",
      body: [
        "README는 Crawl4AI를 'Open-source LLM Friendly Web Crawler & Scraper'로 소개한다. 웹 콘텐츠를 LLM이 다루기 좋은 형태로 크롤링·스크레이프하는 데 초점을 둔다.",
        "Python으로 작성되고 Apache-2.0으로 공개되어 있으며, PyPI 패키지(crawl4ai)로 배포된다.",
      ],
      links: [
        {
          description: "Crawl4AI 소스와 문서로 이어지는 저장소다.",
          href: "https://github.com/unclecode/crawl4ai",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "Firecrawl과 같은 '에이전트용 웹 데이터 수집' 축에 속하며, Python·오픈소스로 로컬 크롤링·스크레이핑 파이프라인을 구성하려는 쪽에 맞는다.",
        "RAG·에이전트의 컨텍스트 입력을 만드는 계층이라, 이 위키의 인접 문서로 둔다.",
      ],
    },
  ],
} satisfies WikiArticle;
