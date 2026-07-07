import type { WikiArticle } from "./types";

export const litellmArticle = {
  slug: "BerriAI/litellm",
  title: "litellm",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "LiteLLM은 100개 이상의 LLM을 OpenAI 형식으로 호출하는 오픈소스 AI 게이트웨이다. Python SDK와 프록시 서버로 비용 추적·가드레일·로드밸런싱·로깅을 제공한다.",
  infobox: [
    { label: "Owner", value: "BerriAI", valueHref: "https://github.com/BerriAI" },
    {
      label: "Repository",
      value: "litellm",
      valueHref: "https://github.com/BerriAI/litellm",
    },
    { label: "Primary language", value: "Python" },
    {
      label: "License",
      value: "저장소 LICENSE 참고",
      valueHref: "https://github.com/BerriAI/litellm",
    },
    { label: "Homepage", value: "docs.litellm.ai", valueHref: "https://docs.litellm.ai/docs/" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/BerriAI/litellm" },
        { label: "공식 문서", href: "https://docs.litellm.ai/docs/" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "100+ LLM 게이트웨이",
      body: [
        "README는 LiteLLM을 100개 이상 LLM을 OpenAI 형식으로 호출하는 오픈소스 AI 게이트웨이로 소개한다. Python SDK와 프록시 서버(AI Gateway) 두 형태를 제공한다.",
        "Bedrock·Azure·OpenAI·VertexAI·Cohere·Anthropic·HuggingFace·vLLM 등 다양한 프로바이더를 하나의 인터페이스로 묶고, 비용 추적·가드레일·로드밸런싱·로깅을 함께 제공한다. 자가호스팅과 엔터프라이즈를 함께 겨냥한다.",
      ],
      links: [
        {
          description: "LiteLLM 소스와 프록시 설정 문서로 이어지는 저장소다.",
          href: "https://github.com/BerriAI/litellm",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "여러 모델을 한 형식으로 부르는 '모델 게이트웨이'는 이 위키의 에이전트·하네스들이 내부에서 다루는 모델 라우팅과 맞닿는다. oh-my-openagent의 models.dev 기반 모델 카탈로그 같은 계층과 같은 문제 공간이다.",
        "직접적인 코딩 에이전트는 아니지만, 에이전트 인프라의 핵심 조각이라 위키의 인접 문서로 둔다.",
      ],
    },
  ],
} satisfies WikiArticle;
