import type { WikiArticle } from "./types";

export const browserUseArticle = {
  slug: "browser-use/browser-use",
  title: "browser-use",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "browser-use는 AI 에이전트가 웹사이트를 다룰 수 있게 해 주는 도구다. 에이전트가 브라우저로 온라인 작업을 자동화하도록 웹을 접근 가능하게 만든다.",
  infobox: [
    { label: "Owner", value: "browser-use", valueHref: "https://github.com/browser-use" },
    {
      label: "Repository",
      value: "browser-use",
      valueHref: "https://github.com/browser-use/browser-use",
    },
    { label: "Primary language", value: "Python" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/browser-use/browser-use/blob/main/LICENSE",
    },
    { label: "Homepage", value: "browser-use.com", valueHref: "https://browser-use.com" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/browser-use/browser-use" },
        { label: "공식 사이트", href: "https://browser-use.com" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "AI 에이전트용 브라우저 자동화",
      body: [
        "저장소 설명은 browser-use를 'Make websites accessible for AI agents. Automate tasks online with ease.'로 정의한다. AI 에이전트가 브라우저를 통해 웹 작업을 수행하도록 돕는 도구다.",
        "Python으로 작성되고 MIT로 공개되어 있으며, 공식 사이트(browser-use.com)에 사용 예시와 문서를 제공한다.",
      ],
      links: [
        {
          description: "browser-use 소스와 예제를 확인할 수 있는 저장소다.",
          href: "https://github.com/browser-use/browser-use",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "코드베이스를 다루는 코딩 에이전트와 달리, 브라우저·웹 인터페이스를 조작하는 에이전트 능력을 제공한다. 예약·검색·폼 입력 같은 온라인 태스크 자동화에 쓰인다.",
        "이 위키에서는 코딩 에이전트가 다루지 못하는 '웹 조작' 축을 채우는 인접 에이전트 도구로 둔다.",
      ],
    },
  ],
} satisfies WikiArticle;
