import type { WikiArticle } from "./types";

export const nanobotArticle = {
  slug: "HKUDS/nanobot",
  title: "nanobot",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "nanobot은 도구·대화·워크플로를 위한 경량 오픈소스 AI 에이전트다. 가볍게 붙여 쓰는 에이전트를 지향하며 다국어 문서를 제공한다.",
  infobox: [
    { label: "Owner", value: "HKUDS", valueHref: "https://github.com/HKUDS" },
    {
      label: "Repository",
      value: "nanobot",
      valueHref: "https://github.com/HKUDS/nanobot",
    },
    { label: "Primary language", value: "Python" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/HKUDS/nanobot/blob/main/LICENSE",
    },
    { label: "Homepage", value: "nanobot.wiki", valueHref: "https://nanobot.wiki" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/HKUDS/nanobot" },
        { label: "공식 문서", href: "https://nanobot.wiki" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "경량 오픈소스 에이전트",
      body: [
        "저장소 설명은 nanobot을 도구·대화·워크플로를 위한 lightweight 오픈소스 AI 에이전트로 정의한다. 무겁지 않게 붙여 쓰는 에이전트를 목표로 한다.",
        "Python으로 작성되고 MIT로 공개되어 있으며, 영어·중국어 등 다국어 문서(nanobot.wiki)를 제공한다.",
      ],
      links: [
        {
          description: "nanobot 소스와 문서로 이어지는 저장소다.",
          href: "https://github.com/HKUDS/nanobot",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "무거운 프레임워크 대신 가벼운 에이전트를 지향해, 도구 연결과 워크플로 자동화를 작게 시작하려는 쪽에 맞는다.",
        "이 위키의 다른 에이전트 도구와 같은 범주에 들며, '경량' 축을 대표한다.",
      ],
    },
  ],
} satisfies WikiArticle;
