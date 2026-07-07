import type { WikiArticle } from "./types";

export const langchainArticle = {
  slug: "langchain-ai/langchain",
  title: "langchain",
  modifiedAt: "2026-07-06T00:00:00.000Z",
  categories: [
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
    { label: "오케스트레이션", path: "/w/category/orchestration" },
  ],
  summary:
    "LangChain은 에이전트 엔지니어링 플랫폼을 표방하는 LLM 개발 프레임워크다. 여러 모델·도구·데이터 소스를 엮어 LLM 애플리케이션과 에이전트를 구성하는 표준 계층으로 널리 쓰인다.",
  infobox: [
    { label: "Owner", value: "langchain-ai", valueHref: "https://github.com/langchain-ai" },
    {
      label: "Repository",
      value: "langchain",
      valueHref: "https://github.com/langchain-ai/langchain",
    },
    { label: "Primary language", value: "Python" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/langchain-ai/langchain/blob/master/LICENSE",
    },
    { label: "Homepage", value: "docs.langchain.com", valueHref: "https://docs.langchain.com/langchain/" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/langchain-ai/langchain" },
        { label: "공식 문서", href: "https://docs.langchain.com/langchain/" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "에이전트 엔지니어링 플랫폼",
      body: [
        "저장소 설명은 LangChain을 'The agent engineering platform'으로 정의한다. LLM 애플리케이션과 에이전트를 만들기 위한 프레임워크로, 모델·도구·데이터 연결을 표준화하는 계층을 제공한다.",
        "Python 생태계에서 사실상의 기준 라이브러리 중 하나로, 방대한 통합과 문서(docs.langchain.com)를 갖췄다. MIT로 공개되어 있다.",
      ],
      links: [
        {
          description: "LangChain 소스와 패키지를 확인할 수 있는 저장소다.",
          href: "https://github.com/langchain-ai/langchain",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "프레임워크 사용 전반을 다루는 공식 문서다.",
          href: "https://docs.langchain.com/langchain/",
          label: "공식 문서",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "코딩 에이전트 제품이라기보다, 에이전트·LLM 앱을 만드는 개발자용 프레임워크다. 이 위키의 코딩 에이전트들이 내부적으로 참고하거나 대체하는 '엔지니어링 계층'을 대표한다.",
        "검색 수요가 큰 LLM 개발 키워드의 허브라, 위키의 검색 표면을 넓히는 인접 문서로 둔다.",
      ],
    },
  ],
} satisfies WikiArticle;
