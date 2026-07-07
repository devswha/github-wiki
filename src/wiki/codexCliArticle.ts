import type { WikiArticle } from "./types";

export const codexCliArticle = {
  slug: "openai/codex",
  title: "codex",
  modifiedAt: "2026-07-07T03:56:41.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "Codex CLI는 OpenAI가 만든, 로컬 컴퓨터에서 도는 코딩 에이전트다. 터미널·IDE·데스크톱 앱·클라우드(Codex Web) 표면을 두며, 이 위키의 oh-my-codex, lazycodex, oh-my-openagent가 실행 엔진으로 삼는 기반 도구다.",
  image: {
    src: "https://raw.githubusercontent.com/openai/codex/main/.github/codex-cli-splash.png",
    alt: "Codex CLI 스플래시",
  },
  infobox: [
    {
      label: "Owner",
      value: "openai",
      valueHref: "https://github.com/openai",
    },
    {
      label: "Repository",
      value: "codex",
      valueHref: "https://github.com/openai/codex",
    },
    { label: "Primary language", value: "Rust" },
    {
      label: "License",
      value: "Apache-2.0",
      valueHref: "https://github.com/openai/codex/blob/main/LICENSE",
    },
    {
      label: "Homepage",
      value: "developers.openai.com/codex",
      valueHref: "https://developers.openai.com/codex",
    },
    { label: "npm", value: "@openai/codex" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/openai/codex" },
        { label: "공식 문서", href: "https://developers.openai.com/codex" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "로컬 코딩 에이전트",
      body: [
        "README는 Codex CLI를 OpenAI가 만든, 로컬 컴퓨터에서 도는 코딩 에이전트라고 소개한다. 터미널이 기본 표면이지만, VS Code·Cursor·Windsurf용 IDE 설치, codex app 데스크톱 경험, 그리고 클라우드 기반 에이전트인 Codex Web(chatgpt.com/codex)까지 여러 실행 형태를 함께 제시한다.",
        "언어는 Rust이며, 저장소는 Apache-2.0으로 공개되어 있다. 명령 표면은 codex 하나로 시작하고, 인증은 ChatGPT 로그인 또는 API 키 두 경로를 안내한다.",
      ],
      links: [
        {
          description: "이 주제를 다루는 나무위키 문서다.",
          href: "https://namu.wiki/w/Codex",
          label: "나무위키 문서",
          variant: "external",
        },
        {
          description: "설치, 인증, 기여 문서를 담은 저장소다.",
          href: "https://github.com/openai/codex",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "Codex 전반을 다루는 OpenAI 개발자 문서다.",
          href: "https://developers.openai.com/codex",
          label: "공식 문서",
          variant: "external",
        },
      ],
    },
    {
      id: "install",
      title: "설치와 인증",
      body: [
        "README는 macOS/Linux는 curl 설치 스크립트, Windows는 PowerShell irm 스크립트를 기본 경로로 제시하고, npm(@openai/codex)과 Homebrew cask, GitHub Release 바이너리도 대안으로 안내한다. 설치 후에는 codex 명령으로 시작한다.",
        "인증은 Sign in with ChatGPT가 권장 경로다. Plus/Pro/Business/Edu/Enterprise 플랜의 일부로 Codex를 쓰는 방식이며, API 키 로그인은 별도 설정이 필요하다고 적혀 있다.",
      ],
      table: {
        caption: "Codex CLI 설치 경로",
        headers: ["플랫폼 / 방식", "명령"],
        rows: [
          ["macOS / Linux", "curl -fsSL https://chatgpt.com/codex/install.sh | sh"],
          ["Windows", 'powershell -c "irm https://chatgpt.com/codex/install.ps1 | iex"'],
          ["npm", "npm install -g @openai/codex"],
          ["Homebrew", "brew install --cask codex"],
        ],
      },
    },
    {
      id: "ecosystem",
      title: "OMX 생태계와의 관계",
      body: [
        "이 위키 기준으로 Codex CLI는 여러 확장이 실행 엔진으로 삼는 기반 도구다. oh-my-codex(OMX)는 Codex를 대체하지 않고 그 위에 강한 기본 세션과 workflow를 얹으며, lazycodex는 Codex에서 OmO를 바로 설치하기 좋게 포장한 배포 입구다.",
        "oh-my-openagent 역시 Codex를 하네스 대상 중 하나로 다룬다. 즉 이 위키의 Codex 계열 문서 대부분은 openai/codex라는 같은 기반 위에서 서로 다른 워크플로 계층을 설명하는 구조다.",
      ],
      links: [
        {
          description: "Codex 위에 일관된 workflow와 .omx 상태를 얹는 OMX 계층 문서다.",
          href: "/w/Yeachan-Heo%2Foh-my-codex",
          label: "oh-my-codex",
          variant: "internal",
        },
        {
          description: "Codex에서 OmO를 바로 설치하는 배포 입구 문서다.",
          href: "/w/code-yeongyu%2Flazycodex",
          label: "lazycodex",
          variant: "internal",
        },
        {
          description: "Codex와 OpenCode를 함께 오케스트레이션하는 하네스 문서다.",
          href: "/w/code-yeongyu%2Foh-my-openagent",
          label: "oh-my-openagent",
          variant: "internal",
        },
      ],
    },
  ],
} satisfies WikiArticle;
