import type { WikiArticle } from "./types";

export const aiderArticle = {
  slug: "Aider-AI/aider",
  title: "aider",
  modifiedAt: "2026-05-22T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "코딩 에이전트", path: "/w/category/coding-agent" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
  ],
  summary:
    "aider는 터미널에서 LLM과 페어 프로그래밍을 하는 도구다. 새 프로젝트를 시작하거나 기존 코드베이스 위에서 LLM과 함께 코드를 작성하는 흐름에 초점을 둔다.",
  infobox: [
    { label: "Owner", value: "Aider-AI", valueHref: "https://github.com/Aider-AI" },
    {
      label: "Repository",
      value: "aider",
      valueHref: "https://github.com/Aider-AI/aider",
    },
    { label: "Primary language", value: "Python" },
    {
      label: "License",
      value: "Apache-2.0",
      valueHref: "https://github.com/Aider-AI/aider/blob/main/LICENSE.txt",
    },
    { label: "Homepage", value: "aider.chat", valueHref: "https://aider.chat/" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/Aider-AI/aider" },
        { label: "공식 사이트", href: "https://aider.chat/" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "터미널 AI 페어 프로그래밍",
      body: [
        "README는 aider를 'AI Pair Programming in Your Terminal'로 소개한다. 사용자가 LLM과 짝을 이뤄 새 프로젝트를 시작하거나 기존 코드베이스를 확장하도록 돕는다.",
        "Python으로 작성되고 Apache-2.0으로 공개되어 있으며, 공식 사이트(aider.chat)에 사용법과 스크린캐스트를 제공한다.",
      ],
      links: [
        {
          description: "aider 소스와 릴리스를 확인할 수 있는 저장소다.",
          href: "https://github.com/Aider-AI/aider",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "특징",
      body: [
        "터미널 중심의 페어 프로그래밍 UX가 특징으로, git 저장소 위에서 변경을 제안·적용하는 흐름에 강점을 둔다. 여러 LLM 백엔드를 붙여 쓸 수 있다.",
        "에디터 확장형 도구들과 달리 CLI 페어 프로그래밍이라는 오래된 포지션을 유지해, 이 위키의 코딩 에이전트 목록에서 터미널 워크플로 축을 대표한다.",
      ],
    },
  ],
} satisfies WikiArticle;
