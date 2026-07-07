import type { WikiArticle } from "./types";

export const geminiCliArticle = {
  slug: "google-gemini/gemini-cli",
  title: "gemini-cli",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "코딩 에이전트", path: "/w/category/coding-agent" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
  ],
  summary:
    "Gemini CLI는 Google의 오픈소스 AI 에이전트로, Gemini의 능력을 터미널로 직접 가져온다. claude-code·codex와 같은 터미널 코딩 에이전트 계열의 Google판이다.",
  infobox: [
    { label: "Owner", value: "google-gemini", valueHref: "https://github.com/google-gemini" },
    {
      label: "Repository",
      value: "gemini-cli",
      valueHref: "https://github.com/google-gemini/gemini-cli",
    },
    { label: "Primary language", value: "TypeScript" },
    {
      label: "License",
      value: "Apache-2.0",
      valueHref: "https://github.com/google-gemini/gemini-cli/blob/main/LICENSE",
    },
    { label: "Homepage", value: "geminicli.com", valueHref: "https://geminicli.com" },
    { label: "Package", value: "@google/gemini-cli" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/google-gemini/gemini-cli" },
        { label: "공식 사이트", href: "https://geminicli.com" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "터미널 속 Gemini 에이전트",
      body: [
        "README는 Gemini CLI를 Gemini의 능력을 터미널로 직접 가져오는 오픈소스 AI 에이전트로 소개한다. @google/gemini-cli npm 패키지로 배포되고 Apache-2.0으로 공개되어 있다.",
        "이 위키 기준으로 Gemini CLI는 anthropics/claude-code, openai/codex와 같은 '터미널 코딩 에이전트 기반' 계열에 속한다. 세 프로바이더(Anthropic·OpenAI·Google)의 공식 터미널 에이전트가 나란히 서는 그림이다.",
      ],
      links: [
        {
          description: "Gemini CLI 소스와 릴리스를 확인할 수 있는 저장소다.",
          href: "https://github.com/google-gemini/gemini-cli",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "같은 터미널 코딩 에이전트 계열인 Anthropic의 도구 문서다.",
          href: "/w/anthropics%2Fclaude-code",
          label: "claude-code",
          variant: "internal",
        },
        {
          description: "같은 계열인 OpenAI의 터미널 코딩 에이전트 문서다.",
          href: "/w/openai%2Fcodex",
          label: "codex",
          variant: "internal",
        },
      ],
    },
    {
      id: "notes",
      title: "특징",
      body: [
        "TypeScript로 작성된 CLI이며, CI·E2E 파이프라인과 공식 문서 사이트(geminicli.com)를 갖춘 활발한 프로젝트다. Gemini 모델을 실행 엔진으로 삼아 터미널에서 코드·작업을 다룬다.",
        "OpenHands 같은 관제 계층이 Gemini를 백엔드 에이전트로 지원한다고 밝힐 만큼, 이 계열의 표준 터미널 에이전트 중 하나로 자리 잡았다.",
      ],
    },
  ],
} satisfies WikiArticle;
