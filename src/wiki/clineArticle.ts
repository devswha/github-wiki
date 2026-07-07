import type { WikiArticle } from "./types";

export const clineArticle = {
  slug: "cline/cline",
  title: "cline",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "코딩 에이전트", path: "/w/category/coding-agent" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "Cline은 IDE와 터미널에서 도는 오픈소스 코딩 에이전트다. SDK, IDE 확장, CLI 어시스턴트 형태로 자율 코딩 에이전트를 제공한다.",
  infobox: [
    { label: "Owner", value: "cline", valueHref: "https://github.com/cline" },
    {
      label: "Repository",
      value: "cline",
      valueHref: "https://github.com/cline/cline",
    },
    { label: "Primary language", value: "TypeScript" },
    {
      label: "License",
      value: "Apache-2.0",
      valueHref: "https://github.com/cline/cline/blob/main/LICENSE",
    },
    { label: "Homepage", value: "cline.bot", valueHref: "https://cline.bot" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/cline/cline" },
        { label: "공식 문서", href: "https://docs.cline.bot" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "IDE·터미널 코딩 에이전트",
      body: [
        "README는 Cline을 IDE와 터미널에서 도는 오픈소스 코딩 에이전트로 소개한다. 저장소 설명은 'Autonomous coding agent as an SDK, IDE extension, or CLI assistant'로, 하나의 코어를 세 가지 사용 형태로 제공한다는 점을 강조한다.",
        "TypeScript로 작성되고 Apache-2.0으로 공개되어 있으며, 공식 문서(docs.cline.bot)와 Discord 커뮤니티를 표면으로 둔다.",
      ],
      links: [
        {
          description: "Cline 소스와 릴리스를 확인할 수 있는 저장소다.",
          href: "https://github.com/cline/cline",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "usage",
      title: "사용 형태",
      body: [
        "Cline은 SDK로 코드에 붙이거나, IDE 확장으로 에디터 안에서 쓰거나, CLI 어시스턴트로 터미널에서 돌리는 세 경로를 지원한다. 자율(autonomous) 에이전트를 표방해 작업을 스스로 계획·실행하는 흐름에 초점을 둔다.",
        "이 위키의 다른 에디터·터미널 코딩 에이전트들과 같은 범주에 들며, 사용 형태의 다양성(SDK/확장/CLI)이 차별점으로 제시된다.",
      ],
    },
  ],
} satisfies WikiArticle;
