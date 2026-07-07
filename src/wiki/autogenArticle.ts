import type { WikiArticle } from "./types";

export const autogenArticle = {
  slug: "microsoft/autogen",
  title: "autogen",
  modifiedAt: "2026-04-15T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "오케스트레이션", path: "/w/category/orchestration" },
    { label: "LLM 도구", path: "/w/category/llm-tool" },
  ],
  summary:
    "AutoGen은 Microsoft가 만든 agentic AI 프로그래밍 프레임워크다. 여러 에이전트가 대화하며 협업해 작업을 처리하는 멀티 에이전트 애플리케이션을 코드로 구성한다.",
  infobox: [
    { label: "Owner", value: "microsoft", valueHref: "https://github.com/microsoft" },
    {
      label: "Repository",
      value: "autogen",
      valueHref: "https://github.com/microsoft/autogen",
    },
    { label: "Primary language", value: "Python" },
    {
      label: "License",
      value: "CC-BY-4.0 (저장소 표기)",
      valueHref: "https://github.com/microsoft/autogen",
    },
    { label: "Homepage", value: "microsoft.github.io/autogen", valueHref: "https://microsoft.github.io/autogen/" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/microsoft/autogen" },
        { label: "공식 문서", href: "https://microsoft.github.io/autogen/" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "agentic AI 프로그래밍 프레임워크",
      body: [
        "저장소 설명은 AutoGen을 'A programming framework for agentic AI'로 정의한다. Microsoft가 주도하는 프로젝트로, 여러 에이전트가 상호작용하며 작업을 수행하는 멀티 에이전트 시스템을 코드로 구성하도록 돕는다.",
        "Python 중심이며 공식 문서 사이트(microsoft.github.io/autogen)와 블로그·커뮤니티를 갖춘 대형 프레임워크다.",
      ],
      links: [
        {
          description: "AutoGen 소스와 릴리스를 확인할 수 있는 저장소다.",
          href: "https://github.com/microsoft/autogen",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "프레임워크 사용 전반을 다루는 공식 문서다.",
          href: "https://microsoft.github.io/autogen/",
          label: "공식 문서",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "CrewAI·LangChain과 함께 멀티 에이전트/에이전트 오케스트레이션 프레임워크를 대표한다. 코딩 에이전트 제품이라기보다, 에이전트 시스템을 설계·구현하는 개발자용 계층이다.",
        "대기업(Microsoft) 주도라 생태계·문서가 두텁고, 검색 수요가 큰 agentic AI 키워드의 허브 중 하나다.",
      ],
    },
  ],
} satisfies WikiArticle;
