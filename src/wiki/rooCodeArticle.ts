import type { WikiArticle } from "./types";

export const rooCodeArticle = {
  slug: "RooCodeInc/Roo-Code",
  title: "Roo-Code",
  modifiedAt: "2026-05-15T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "코딩 에이전트", path: "/w/category/coding-agent" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "Roo Code는 코드 에디터 안에 AI 에이전트 팀을 붙여 주는 VS Code 확장이다. 'Your AI-Powered Dev Team, Right in Your Editor'를 표방한다.",
  infobox: [
    { label: "Owner", value: "RooCodeInc", valueHref: "https://github.com/RooCodeInc" },
    {
      label: "Repository",
      value: "Roo-Code",
      valueHref: "https://github.com/RooCodeInc/Roo-Code",
    },
    { label: "Primary language", value: "TypeScript" },
    {
      label: "License",
      value: "Apache-2.0",
      valueHref: "https://github.com/RooCodeInc/Roo-Code/blob/main/LICENSE",
    },
    { label: "Homepage", value: "roocode.com", valueHref: "https://roocode.com" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/RooCodeInc/Roo-Code" },
        { label: "공식 사이트", href: "https://roocode.com" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "에디터 속 AI 개발팀",
      body: [
        "README는 Roo Code를 'Your AI-Powered Dev Team, Right in Your Editor'로 소개한다. VS Code 마켓플레이스로 설치하는 확장이며, 여러 역할의 AI 에이전트를 에디터 안에서 함께 쓰는 것을 지향한다.",
        "TypeScript로 작성되고 Apache-2.0으로 공개되어 있으며, 다국어 README를 제공한다.",
      ],
      links: [
        {
          description: "Roo Code 소스와 릴리스를 확인할 수 있는 저장소다.",
          href: "https://github.com/RooCodeInc/Roo-Code",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "특징",
      body: [
        "여러 모드·역할의 에이전트를 에디터 안에서 전환하며 쓰는 구조가 특징으로, 코드 작성·리팩터·설명 같은 작업을 팀처럼 나눠 처리하는 UX를 내세운다.",
        "IDE 통합형 코딩 에이전트라는 점에서 이 위키의 터미널·CLI 계열과 대비되는 에디터 축을 대표한다.",
      ],
    },
  ],
} satisfies WikiArticle;
