import type { WikiArticle } from "./types";

export const opencodeArticle = {
  slug: "anomalyco/opencode",
  title: "opencode",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "코딩 에이전트", path: "/w/category/coding-agent" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
  ],
  summary:
    "OpenCode는 'The open source AI coding agent'를 표방하는 오픈소스 터미널 코딩 에이전트다. 이 위키의 oh-my-openagent가 겨냥하는 OpenCode 계열의 기반이며, npm opencode-ai로 배포된다.",
  infobox: [
    { label: "Owner", value: "anomalyco", valueHref: "https://github.com/anomalyco" },
    {
      label: "Repository",
      value: "opencode",
      valueHref: "https://github.com/anomalyco/opencode",
    },
    { label: "Primary language", value: "TypeScript" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/anomalyco/opencode/blob/dev/LICENSE",
    },
    { label: "Homepage", value: "opencode.ai", valueHref: "https://opencode.ai" },
    { label: "Package", value: "opencode-ai" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/anomalyco/opencode" },
        { label: "공식 사이트", href: "https://opencode.ai" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "오픈소스 코딩 에이전트",
      body: [
        "README는 OpenCode를 'The open source AI coding agent'로 소개한다. 터미널에서 도는 오픈소스 코딩 에이전트이며, opencode-ai npm 패키지로 배포되고 영어·중국어·한국어·독일어 등 여러 언어 README를 제공한다.",
        "이 위키 기준으로 OpenCode는 확장이 올라타는 기반 하네스 중 하나다. oh-my-openagent(OmO)는 OpenCode를 하네스 대상으로 삼아 그 위에 규율 에이전트·팀·워크플로 표면을 얹는다.",
      ],
      links: [
        {
          description: "OpenCode 소스와 릴리스를 확인할 수 있는 저장소다.",
          href: "https://github.com/anomalyco/opencode",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "OpenCode를 하네스 대상으로 삼는 이 위키의 확장 문서다.",
          href: "/w/code-yeongyu%2Foh-my-openagent",
          label: "oh-my-openagent",
          variant: "internal",
        },
      ],
    },
    {
      id: "surface",
      title: "표면과 배포",
      body: [
        "설치·실행 표면은 터미널 CLI가 중심이고, Discord 커뮤니티와 공식 사이트(opencode.ai)를 문서 진입점으로 둔다. npm 배포(opencode-ai)와 GitHub Actions 기반 publish 파이프라인으로 릴리스가 이어진다.",
        "오픈소스이므로 자체 호스팅·커스터마이즈가 가능하고, 이 위키의 Codex/OpenCode 계열 문서들과 같은 '기반 도구 + 확장 계층' 구도로 읽으면 위치가 분명해진다.",
      ],
    },
  ],
} satisfies WikiArticle;
