import type { WikiArticle } from "./types";

export const crewaiArticle = {
  slug: "crewAIInc/crewAI",
  title: "crewAI",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "오케스트레이션", path: "/w/category/orchestration" },
    { label: "LLM 도구", path: "/w/category/llm-tool" },
  ],
  summary:
    "CrewAI는 역할을 나눈 자율 AI 에이전트를 오케스트레이션하는 프레임워크다. 협업형 지능을 통해 여러 에이전트가 함께 복잡한 작업을 처리하도록 한다.",
  infobox: [
    { label: "Owner", value: "crewAIInc", valueHref: "https://github.com/crewAIInc" },
    {
      label: "Repository",
      value: "crewAI",
      valueHref: "https://github.com/crewAIInc/crewAI",
    },
    { label: "Primary language", value: "Python" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/crewAIInc/crewAI/blob/main/LICENSE",
    },
    { label: "Homepage", value: "crewai.com", valueHref: "https://crewai.com" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/crewAIInc/crewAI" },
        { label: "공식 사이트", href: "https://crewai.com" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "역할 기반 멀티 에이전트 프레임워크",
      body: [
        "저장소 설명은 CrewAI를 role-playing 자율 AI 에이전트를 오케스트레이션하는 프레임워크로 정의한다. 에이전트마다 역할을 부여해 협업(collaborative intelligence)으로 복잡한 작업을 나눠 처리하도록 한다.",
        "Python으로 작성되고 MIT로 공개되어 있으며, 공식 사이트(crewai.com)와 문서를 제공한다.",
      ],
      links: [
        {
          description: "CrewAI 소스와 예제를 확인할 수 있는 저장소다.",
          href: "https://github.com/crewAIInc/crewAI",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "개별 코딩 에이전트가 아니라, 여러 에이전트를 팀처럼 구성·조율하는 오케스트레이션 프레임워크다. 이 위키의 Team Mode·멀티 에이전트 계열 문서와 같은 문제 공간을 다룬다.",
        "역할 분담과 협업 워크플로 정의에 강점을 둬, 에이전트 애플리케이션을 코드로 구성하려는 개발자용 계층으로 읽힌다.",
      ],
    },
  ],
} satisfies WikiArticle;
