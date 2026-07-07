import type { WikiArticle } from "./types";

export const copilotKitArticle = {
  slug: "CopilotKit/CopilotKit",
  title: "CopilotKit",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "CopilotKit은 에이전트와 generative UI를 위한 프런트엔드 스택이다. React·Angular·모바일·Slack 등에 인앱 AI 코파일럿을 붙이며, AG-UI 프로토콜을 만든 프로젝트다.",
  infobox: [
    { label: "Owner", value: "CopilotKit", valueHref: "https://github.com/CopilotKit" },
    {
      label: "Repository",
      value: "CopilotKit",
      valueHref: "https://github.com/CopilotKit/CopilotKit",
    },
    { label: "Primary language", value: "TypeScript" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/CopilotKit/CopilotKit/blob/main/LICENSE",
    },
    { label: "Homepage", value: "docs.copilotkit.ai", valueHref: "https://docs.copilotkit.ai" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/CopilotKit/CopilotKit" },
        { label: "공식 문서", href: "https://docs.copilotkit.ai" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "에이전트·generative UI 프런트엔드",
      body: [
        "저장소 설명은 CopilotKit을 'The Frontend Stack for Agents & Generative UI'로 정의한다. React·Angular·모바일·Slack 등에 인앱 AI 코파일럿과 에이전트 UI를 붙이는 프런트엔드 계층을 제공한다.",
        "에이전트와 UI가 상호작용하는 규격인 AG-UI 프로토콜을 만든 프로젝트이기도 하다. TypeScript·MIT로 공개되어 있다.",
      ],
      links: [
        {
          description: "CopilotKit 소스와 예제를 확인할 수 있는 저장소다.",
          href: "https://github.com/CopilotKit/CopilotKit",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "컴포넌트·훅 사용법을 다루는 공식 문서다.",
          href: "https://docs.copilotkit.ai",
          label: "공식 문서",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "백엔드 에이전트 프레임워크와 달리, 사용자에게 보이는 에이전트 UI를 제품에 통합하는 프런트엔드 스택이다. AG-UI 프로토콜로 에이전트-UI 상호작용을 표준화하려는 시도가 특징이다.",
        "이 위키에서는 에이전트를 실제 제품 화면에 붙이는 프런트엔드 축을 대표하는 인접 문서로 둔다.",
      ],
    },
  ],
} satisfies WikiArticle;
