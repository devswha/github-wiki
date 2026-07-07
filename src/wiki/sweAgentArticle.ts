import type { WikiArticle } from "./types";

export const sweAgentArticle = {
  slug: "SWE-agent/SWE-agent",
  title: "SWE-agent",
  modifiedAt: "2026-07-06T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "코딩 에이전트", path: "/w/category/coding-agent" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "SWE-agent는 GitHub 이슈를 받아 원하는 LM으로 자동 수정을 시도하는 에이전트다. 공격형 보안이나 경쟁 코딩 과제에도 쓰이며 NeurIPS 2024에 발표됐다.",
  infobox: [
    { label: "Owner", value: "SWE-agent", valueHref: "https://github.com/SWE-agent" },
    {
      label: "Repository",
      value: "SWE-agent",
      valueHref: "https://github.com/SWE-agent/SWE-agent",
    },
    { label: "Primary language", value: "Python" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/SWE-agent/SWE-agent/blob/main/LICENSE",
    },
    { label: "Homepage", value: "swe-agent.com", valueHref: "https://swe-agent.com" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/SWE-agent/SWE-agent" },
        { label: "arXiv", href: "https://arxiv.org/abs/2405.15793" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "GitHub 이슈 자동 수정 에이전트",
      body: [
        "README는 SWE-agent를 GitHub 이슈를 받아 사용자가 고른 LM으로 자동 수정을 시도하는 에이전트로 소개한다. 소프트웨어 이슈 해결 외에도 공격형 사이버보안·경쟁 코딩 과제에 활용될 수 있다고 설명한다.",
        "NeurIPS 2024에 발표된 연구 기반 프로젝트이며, 현재 개발 역량은 상당 부분 경량 버전인 mini-swe-agent로 옮겨가 있다고 안내한다.",
      ],
      links: [
        {
          description: "SWE-agent 소스와 문서로 이어지는 저장소다.",
          href: "https://github.com/SWE-agent/SWE-agent",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "방법론을 다룬 arXiv 논문(2405.15793)이다.",
          href: "https://arxiv.org/abs/2405.15793",
          label: "arXiv 논문",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "특징",
      body: [
        "SWE-bench 같은 이슈 해결 벤치마크 맥락에서 출발한 연구형 에이전트로, 이슈→패치 자동화라는 뚜렷한 작업 정의를 갖는다. Python·MIT로 공개되어 있다.",
        "범용 대화형 코딩 에이전트보다 '이슈 자동 해결'이라는 좁고 검증 가능한 태스크에 특화된 점이 이 위키의 다른 도구와 구분된다.",
      ],
    },
  ],
} satisfies WikiArticle;
