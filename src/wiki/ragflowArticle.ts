import type { WikiArticle } from "./types";

export const ragflowArticle = {
  slug: "infiniflow/ragflow",
  title: "ragflow",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "오케스트레이션", path: "/w/category/orchestration" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "RAGFlow는 최신 RAG에 에이전트 능력을 결합한 오픈소스 검색증강생성 엔진이다. LLM을 위한 우수한 컨텍스트 계층을 만드는 것을 목표로 한다.",
  infobox: [
    { label: "Owner", value: "infiniflow", valueHref: "https://github.com/infiniflow" },
    {
      label: "Repository",
      value: "ragflow",
      valueHref: "https://github.com/infiniflow/ragflow",
    },
    { label: "Primary language", value: "Go / Python / TypeScript" },
    {
      label: "License",
      value: "Apache-2.0",
      valueHref: "https://github.com/infiniflow/ragflow/blob/main/LICENSE",
    },
    { label: "Homepage", value: "ragflow.io", valueHref: "https://ragflow.io" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/infiniflow/ragflow" },
        { label: "공식 사이트", href: "https://ragflow.io" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "RAG + 에이전트 엔진",
      body: [
        "README는 RAGFlow를 최신 RAG와 에이전트 능력을 결합한 선도적 오픈소스 검색증강생성(RAG) 엔진으로 소개한다. LLM을 위한 우수한 컨텍스트 계층을 만드는 것을 지향한다.",
        "Apache-2.0으로 공개되어 있고 클라우드(cloud.ragflow.io)와 자가호스팅을 제공하며, 다국어 문서를 갖췄다.",
      ],
      links: [
        {
          description: "RAGFlow 소스와 배포 문서로 이어지는 저장소다.",
          href: "https://github.com/infiniflow/ragflow",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "문서·지식베이스를 색인해 LLM·에이전트에 근거 있는 컨텍스트를 공급하는 RAG 계층이다. 크롤러(Firecrawl·Crawl4AI)가 데이터를 모으면 RAGFlow가 그걸 검색 가능한 컨텍스트로 만든다.",
        "이 위키에서는 에이전트의 지식·컨텍스트 축을 대표하는 인접 문서로 둔다.",
      ],
    },
  ],
} satisfies WikiArticle;
