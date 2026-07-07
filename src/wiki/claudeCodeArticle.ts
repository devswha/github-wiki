import type { WikiArticle } from "./types";

export const claudeCodeArticle = {
  slug: "anthropics/claude-code",
  title: "claude-code",
  modifiedAt: "2026-07-06T22:51:16.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "Claude Code는 Anthropic이 만든 터미널 기반 agentic 코딩 도구다. 코드베이스를 이해하고 자연어 명령으로 반복 작업 실행, 코드 설명, git 워크플로를 처리하며, 이 위키의 oh-my-claudecode 같은 확장이 붙는 기반 하네스다.",
  image: {
    src: "https://raw.githubusercontent.com/anthropics/claude-code/main/demo.gif",
    alt: "Claude Code 데모",
  },
  infobox: [
    {
      label: "Owner",
      value: "anthropics",
      valueHref: "https://github.com/anthropics",
    },
    {
      label: "Repository",
      value: "claude-code",
      valueHref: "https://github.com/anthropics/claude-code",
    },
    { label: "Primary language", value: "Python / TypeScript" },
    { label: "License", value: "미표기 (Anthropic, 소스 공개)" },
    {
      label: "Homepage",
      value: "code.claude.com/docs",
      valueHref: "https://code.claude.com/docs/en/overview",
    },
    { label: "npm", value: "@anthropic-ai/claude-code" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/anthropics/claude-code" },
        { label: "공식 문서", href: "https://code.claude.com/docs/en/overview" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "터미널 코딩 에이전트",
      body: [
        "README는 Claude Code를 터미널 안에서 동작하는 agentic 코딩 도구로 소개한다. 코드베이스를 이해하고, 자연어 명령만으로 반복 작업 실행, 복잡한 코드 설명, git 워크플로 처리를 돕는다는 것이 핵심 설명이다.",
        "실행 표면은 터미널 하나에 묶이지 않는다. README는 터미널, IDE, 그리고 GitHub에서 @claude를 태그하는 방식까지 세 가지 진입점을 제시한다. 자세한 사용법은 code.claude.com의 공식 문서로 안내한다.",
      ],
      links: [
        {
          description: "이 주제를 다루는 나무위키 문서다.",
          href: "https://namu.wiki/w/Claude%20Code",
          label: "나무위키 문서",
          variant: "external",
        },
        {
          description: "설치, 플러그인, 데이터 정책을 담은 저장소다.",
          href: "https://github.com/anthropics/claude-code",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "설치와 사용 전반을 다루는 공식 문서다.",
          href: "https://code.claude.com/docs/en/overview",
          label: "공식 문서",
          variant: "external",
        },
      ],
    },
    {
      id: "install",
      title: "설치 표면",
      body: [
        "README는 npm 전역 설치를 deprecated로 표시하고, 플랫폼별 설치 스크립트를 권장 경로로 제시한다. macOS/Linux는 curl 설치 스크립트나 Homebrew cask, Windows는 PowerShell irm 스크립트나 WinGet을 안내한다.",
        "설치 후에는 프로젝트 디렉터리로 이동해 claude 명령을 실행하는 것이 기본 흐름이다. Node.js 18 이상이 전제로 표시된다.",
      ],
      table: {
        caption: "Claude Code 설치 경로",
        headers: ["플랫폼", "권장 명령"],
        rows: [
          ["macOS / Linux", "curl -fsSL https://claude.ai/install.sh | bash"],
          ["macOS / Linux (Homebrew)", "brew install --cask claude-code"],
          ["Windows", "irm https://claude.ai/install.ps1 | iex"],
          ["Windows (WinGet)", "winget install Anthropic.ClaudeCode"],
        ],
      },
    },
    {
      id: "plugins",
      title: "플러그인과 확장 생태계",
      body: [
        "저장소는 custom command와 agent로 기능을 넓히는 여러 Claude Code 플러그인을 함께 담고, plugins 디렉터리 문서에서 사용 가능한 플러그인을 정리한다. /bug 명령으로 도구 안에서 이슈를 바로 보고할 수 있다.",
        "이 위키 기준으로 Claude Code는 확장이 올라타는 기반 계층이다. oh-my-claudecode는 Team Mode, skill, hook 같은 표면을 얹어 Claude Code를 멀티 에이전트 오케스트레이션 쪽으로 확장한다.",
      ],
      links: [
        {
          description: "Claude Code 위에 Team Mode와 멀티 에이전트 표면을 얹는 확장 문서다.",
          href: "/w/Yeachan-Heo%2Foh-my-claudecode",
          label: "oh-my-claudecode",
          variant: "internal",
        },
      ],
    },
    {
      id: "data",
      title: "데이터와 운영",
      body: [
        "README는 사용 시 코드 수락/거절 같은 usage data, 대화 데이터, /bug로 제출한 피드백을 수집한다고 밝힌다. 동시에 민감 정보 보존 기간 제한, 세션 데이터 접근 제한, 피드백을 모델 학습에 쓰지 않는다는 정책 같은 안전장치를 명시한다.",
        "정리하면 Claude Code는 Anthropic이 직접 운영하는 상용 코딩 에이전트이며, 데이터 사용과 프라이버시 정책이 공식 문서에 별도로 정리되어 있다.",
      ],
    },
  ],
} satisfies WikiArticle;
