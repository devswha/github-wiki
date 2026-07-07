import type { WikiArticle } from "./types";

export const gooseArticle = {
  slug: "aaif-goose/goose",
  title: "goose",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "코딩 에이전트", path: "/w/category/coding-agent" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
  ],
  summary:
    "goose는 데스크톱 앱·CLI·API로 제공되는 오픈소스 네이티브 AI 에이전트다. 코드 제안을 넘어 어떤 LLM으로든 설치·실행·편집·테스트까지 수행하며, 지금은 Linux Foundation의 Agentic AI Foundation(AAIF)에서 관리된다.",
  infobox: [
    { label: "Owner", value: "aaif-goose", valueHref: "https://github.com/aaif-goose" },
    {
      label: "Repository",
      value: "goose",
      valueHref: "https://github.com/aaif-goose/goose",
    },
    { label: "Primary language", value: "Rust" },
    {
      label: "License",
      value: "Apache-2.0",
      valueHref: "https://github.com/aaif-goose/goose/blob/main/LICENSE",
    },
    { label: "Homepage", value: "goose-docs.ai", valueHref: "https://goose-docs.ai/" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/aaif-goose/goose" },
        { label: "공식 문서", href: "https://goose-docs.ai/" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "네이티브 오픈소스 에이전트",
      body: [
        "README는 goose를 코드·워크플로 전반을 다루는 네이티브 오픈소스 AI 에이전트로 소개한다. 데스크톱 앱, CLI, API 세 형태로 제공되며, 코드 제안에 그치지 않고 install·execute·edit·test까지 어떤 LLM으로든 수행하는 확장형 에이전트를 표방한다.",
        "프로젝트는 block/goose에서 Linux Foundation 산하 Agentic AI Foundation(AAIF)으로 이관됐다. 일부 링크·참조가 전환 중이라는 안내가 README 상단에 있다.",
      ],
      links: [
        {
          description: "goose 소스와 릴리스를 확인할 수 있는 저장소다.",
          href: "https://github.com/aaif-goose/goose",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "표면과 거버넌스",
      body: [
        "Rust로 작성되고 Apache-2.0으로 공개되어 있으며, 데스크톱·CLI·API 표면과 Discord 커뮤니티, goose-docs.ai 문서를 둔다. Linux Foundation 산하로 이동한 점은 벤더 중립적 거버넌스 신호로 읽힌다.",
        "확장성(extensible)을 핵심 가치로 내세워 도구·모델을 자유롭게 붙이는 구조이며, 이 위키의 다른 코딩 에이전트와 같은 범주에 든다.",
      ],
    },
  ],
} satisfies WikiArticle;
