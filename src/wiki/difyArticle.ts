import type { WikiArticle } from "./types";

export const difyArticle = {
  slug: "langgenius/dify",
  title: "dify",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "오케스트레이션", path: "/w/category/orchestration" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "Dify는 agentic 워크플로 개발을 위한 프로덕션급 플랫폼이다. LLM 앱과 에이전트 워크플로를 비주얼하게 만들고 배포하며, 클라우드와 자가호스팅을 함께 제공한다.",
  infobox: [
    { label: "Owner", value: "langgenius", valueHref: "https://github.com/langgenius" },
    {
      label: "Repository",
      value: "dify",
      valueHref: "https://github.com/langgenius/dify",
    },
    { label: "Primary language", value: "TypeScript / Python" },
    {
      label: "License",
      value: "저장소 LICENSE 참고",
      valueHref: "https://github.com/langgenius/dify",
    },
    { label: "Homepage", value: "dify.ai", valueHref: "https://dify.ai" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/langgenius/dify" },
        { label: "공식 문서", href: "https://docs.dify.ai" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "agentic 워크플로 플랫폼",
      body: [
        "README는 Dify를 agentic 워크플로 개발을 위한 프로덕션급 플랫폼으로 소개한다. LLM 애플리케이션과 에이전트 워크플로를 만들고 운영하는 데 초점을 둔다.",
        "Dify Cloud와 자가호스팅(self-hosted) 두 배포 경로를 제공하고, 공식 문서와 에디션 개요를 별도로 둔다.",
      ],
      links: [
        {
          description: "Dify 소스와 셀프호스팅 안내로 이어지는 저장소다.",
          href: "https://github.com/langgenius/dify",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "설치·사용 전반을 다루는 공식 문서다.",
          href: "https://docs.dify.ai",
          label: "공식 문서",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "개별 코딩 CLI가 아니라, 여러 모델·도구를 엮어 에이전트 워크플로와 LLM 앱을 구성·배포하는 상위 플랫폼이다. 클라우드/셀프호스팅 선택지와 프로덕션 지향이 특징으로 제시된다.",
        "이 위키에서는 코딩 에이전트 자체보다 그 주변의 LLM 앱·워크플로 오케스트레이션 계층을 대표하는 문서로 둔다.",
      ],
    },
  ],
} satisfies WikiArticle;
