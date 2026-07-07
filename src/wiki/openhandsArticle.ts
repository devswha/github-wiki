import type { WikiArticle } from "./types";

export const openhandsArticle = {
  slug: "OpenHands/OpenHands",
  title: "OpenHands",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "코딩 에이전트", path: "/w/category/coding-agent" },
    { label: "오케스트레이션", path: "/w/category/orchestration" },
  ],
  summary:
    "OpenHands는 코딩 에이전트와 자동화를 위한 자가호스팅 개발자 관제 센터다. OpenHands·Claude Code·Codex·Gemini 등 ACP 호환 에이전트를 로컬·원격·클라우드 백엔드에서 실행하는 것을 목표로 한다.",
  infobox: [
    { label: "Owner", value: "OpenHands", valueHref: "https://github.com/OpenHands" },
    {
      label: "Repository",
      value: "OpenHands",
      valueHref: "https://github.com/OpenHands/OpenHands",
    },
    { label: "Primary language", value: "Python" },
    {
      label: "License",
      value: "저장소 LICENSE 참고",
      valueHref: "https://github.com/OpenHands/OpenHands",
    },
    { label: "Homepage", value: "openhands.dev", valueHref: "https://openhands.dev" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/OpenHands/OpenHands" },
        { label: "공식 문서", href: "https://docs.openhands.dev" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "자가호스팅 에이전트 관제 센터",
      body: [
        "README는 OpenHands를 코딩 에이전트와 자동화를 위한 self-hosted developer control center로 소개한다. 슬로건은 AI-Driven Development이며, 여러 에이전트를 한 곳에서 다루는 관제 계층을 지향한다.",
        "핵심은 에이전트 이식성이다. OpenHands 자체 에이전트뿐 아니라 Claude Code, Codex, Gemini 등 ACP(Agent Client Protocol) 호환 에이전트를 로컬·원격·클라우드 백엔드에서 돌릴 수 있다고 설명한다.",
      ],
      links: [
        {
          description: "OpenHands 소스와 셀프호스팅 문서로 이어지는 저장소다.",
          href: "https://github.com/OpenHands/OpenHands",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "OpenHands가 함께 돌릴 수 있다고 밝힌 기반 에이전트 문서다.",
          href: "/w/anthropics%2Fclaude-code",
          label: "claude-code",
          variant: "internal",
        },
        {
          description: "OpenHands가 백엔드로 지원하는 또 다른 기반 에이전트 문서다.",
          href: "/w/openai%2Fcodex",
          label: "codex",
          variant: "internal",
        },
      ],
    },
    {
      id: "notes",
      title: "상태와 표면",
      body: [
        "프로젝트 상태는 beta로 표기되고, npm 패키지(@openhands/agent-canvas)와 문서 사이트(docs.openhands.dev), Slack 커뮤니티를 표면으로 둔다. Python 중심이며 로컬·VM·클라우드 백엔드 설정 문서를 별도로 제공한다.",
        "이 위키 관점에서 OpenHands는 개별 코딩 에이전트라기보다, 여러 에이전트를 한 관제판에서 오케스트레이션하는 상위 계층으로 읽는 편이 정확하다.",
      ],
    },
  ],
} satisfies WikiArticle;
