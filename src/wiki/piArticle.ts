import type { WikiArticle } from "./types";

export const piArticle = {
  slug: "earendil-works/pi",
  title: "pi",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "코딩 에이전트", path: "/w/category/coding-agent" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
  ],
  summary:
    "Pi는 earendil-works의 에이전트 하네스 프로젝트다. 자기 확장형 코딩 에이전트 CLI, tool calling·상태관리 런타임, OpenAI·Anthropic·Google을 아우르는 통합 LLM API를 패키지로 나눠 제공한다.",
  infobox: [
    { label: "Owner", value: "earendil-works", valueHref: "https://github.com/earendil-works" },
    {
      label: "Repository",
      value: "pi",
      valueHref: "https://github.com/earendil-works/pi",
    },
    { label: "Primary language", value: "TypeScript" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/earendil-works/pi/blob/main/LICENSE",
    },
    { label: "Homepage", value: "pi.dev", valueHref: "https://pi.dev" },
    { label: "Package", value: "@earendil-works/pi-coding-agent" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/earendil-works/pi" },
        { label: "공식 사이트", href: "https://pi.dev" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "Pi 에이전트 하네스",
      body: [
        "README는 이 저장소를 Pi agent harness 프로젝트의 본거지로 소개하며, 그 안에 self-extensible coding agent를 둔다. 즉 단일 CLI가 아니라 에이전트 하네스를 이루는 패키지 묶음이다.",
        "구성은 세 축이다. @earendil-works/pi-coding-agent는 대화형 코딩 에이전트 CLI, @earendil-works/pi-agent-core는 tool calling과 상태 관리를 담당하는 에이전트 런타임, @earendil-works/pi-ai는 OpenAI·Anthropic·Google 등을 아우르는 통합 멀티 프로바이더 LLM API다.",
      ],
      links: [
        {
          description: "Pi 하네스 소스와 패키지를 확인할 수 있는 저장소다.",
          href: "https://github.com/earendil-works/pi",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "Pi를 하네스 대상 중 하나로 언급하는 이 위키의 메타 하네스 문서다.",
          href: "/w/omnigent-ai%2Fomnigent",
          label: "omnigent",
          variant: "internal",
        },
      ],
    },
    {
      id: "notes",
      title: "기여와 운영 메모",
      body: [
        "README 상단은 신규 기여자의 이슈·PR이 기본적으로 자동 종료되며, 메인테이너가 매일 자동 종료분을 검토한다고 안내한다. 기여 전에는 CONTRIBUTING 문서를 확인하라는 정책이 명시되어 있다.",
        "TypeScript로 작성되고 MIT 라이선스로 공개되어 있어, 코딩 에이전트 CLI 자체뿐 아니라 하네스 런타임과 통합 LLM API를 따로 떼어 쓰는 것도 목표에 든다.",
      ],
    },
  ],
} satisfies WikiArticle;
