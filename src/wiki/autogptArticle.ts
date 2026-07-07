import type { WikiArticle } from "./types";

export const autogptArticle = {
  slug: "Significant-Gravitas/AutoGPT",
  title: "AutoGPT",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "오케스트레이션", path: "/w/category/orchestration" },
  ],
  summary:
    "AutoGPT는 AI 에이전트를 만들고 배포하고 실행하는 플랫폼이다. 초기 자율 에이전트 붐을 대표한 프로젝트로, 지금은 에이전트 빌드·배포 도구 묶음을 지향한다.",
  infobox: [
    { label: "Owner", value: "Significant-Gravitas", valueHref: "https://github.com/Significant-Gravitas" },
    {
      label: "Repository",
      value: "AutoGPT",
      valueHref: "https://github.com/Significant-Gravitas/AutoGPT",
    },
    { label: "Primary language", value: "Python / TypeScript" },
    {
      label: "License",
      value: "저장소 LICENSE 참고",
      valueHref: "https://github.com/Significant-Gravitas/AutoGPT",
    },
    { label: "Homepage", value: "agpt.co", valueHref: "https://agpt.co" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/Significant-Gravitas/AutoGPT" },
        { label: "공식 사이트", href: "https://agpt.co" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "AI 에이전트 빌드·배포 플랫폼",
      body: [
        "README는 AutoGPT를 'Build, Deploy, and Run AI Agents'로 소개한다. 누구나 AI를 쓰고 그 위에 만들 수 있게 한다는 미션 아래, 에이전트를 구성·배포·실행하는 도구를 제공한다.",
        "2023년 자율 에이전트 붐을 촉발한 대표 프로젝트로 출발해, 현재는 에이전트 플랫폼 형태로 발전했다. Python·TypeScript로 구성된다.",
      ],
      links: [
        {
          description: "AutoGPT 소스와 플랫폼 문서로 이어지는 저장소다.",
          href: "https://github.com/Significant-Gravitas/AutoGPT",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "코드베이스 편집에 특화된 코딩 에이전트라기보다, 범용 자율 에이전트를 구성·배포하는 플랫폼이다. 초기 자율 에이전트 흐름의 역사적 기준점이라 검색 수요가 크다.",
        "이 위키에서는 코딩 에이전트와 대비되는 범용 에이전트 오케스트레이션 축을 대표하는 문서로 둔다.",
      ],
    },
  ],
} satisfies WikiArticle;
