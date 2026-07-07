import type { WikiArticle } from "./types";

export const cherryStudioArticle = {
  slug: "CherryHQ/cherry-studio",
  title: "cherry-studio",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "Cherry Studio는 스마트 챗·자율 에이전트·300개 이상의 어시스턴트를 갖춘 AI 생산성 스튜디오다. 프런티어 LLM들을 하나의 데스크톱 앱에서 통합해 다룬다.",
  infobox: [
    { label: "Owner", value: "CherryHQ", valueHref: "https://github.com/CherryHQ" },
    {
      label: "Repository",
      value: "cherry-studio",
      valueHref: "https://github.com/CherryHQ/cherry-studio",
    },
    { label: "Primary language", value: "TypeScript" },
    {
      label: "License",
      value: "AGPL-3.0",
      valueHref: "https://github.com/CherryHQ/cherry-studio/blob/main/LICENSE",
    },
    { label: "Homepage", value: "cherryai.com", valueHref: "https://cherryai.com" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/CherryHQ/cherry-studio" },
        { label: "공식 사이트", href: "https://cherryai.com" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "AI 생산성 스튜디오",
      body: [
        "저장소 설명은 Cherry Studio를 스마트 챗, 자율 에이전트, 300개 이상 어시스턴트를 갖춘 AI 생산성 스튜디오로 정의한다. 여러 프런티어 LLM에 통합 접근하는 것을 강조한다.",
        "TypeScript 기반 데스크톱 앱이며 AGPL-3.0으로 공개되어 있고, 다국어 문서를 제공한다.",
      ],
      links: [
        {
          description: "Cherry Studio 소스와 릴리스를 확인할 수 있는 저장소다.",
          href: "https://github.com/CherryHQ/cherry-studio",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "여러 모델과 어시스턴트·에이전트를 한 데스크톱 앱에서 다루는 통합 클라이언트다. 채팅을 넘어 자율 에이전트와 어시스턴트 마켓 성격을 겸한다.",
        "이 위키에서는 데스크톱형 멀티모델 클라이언트 축을 대표하는 인접 문서로 둔다.",
      ],
    },
  ],
} satisfies WikiArticle;
