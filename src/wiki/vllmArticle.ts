import type { WikiArticle } from "./types";

export const vllmArticle = {
  slug: "vllm-project/vllm",
  title: "vllm",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "vLLM은 고처리량·메모리 효율적인 LLM 추론·서빙 엔진이다. 오픈 모델을 대규모로 빠르게 서빙하는 인프라로 널리 쓰인다.",
  infobox: [
    { label: "Owner", value: "vllm-project", valueHref: "https://github.com/vllm-project" },
    {
      label: "Repository",
      value: "vllm",
      valueHref: "https://github.com/vllm-project/vllm",
    },
    { label: "Primary language", value: "Python" },
    {
      label: "License",
      value: "Apache-2.0",
      valueHref: "https://github.com/vllm-project/vllm/blob/main/LICENSE",
    },
    { label: "Homepage", value: "vllm.ai", valueHref: "https://vllm.ai" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/vllm-project/vllm" },
        { label: "공식 사이트", href: "https://vllm.ai" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "고처리량 LLM 서빙 엔진",
      body: [
        "저장소 설명은 vLLM을 고처리량이면서 메모리 효율적인 LLM 추론·서빙 엔진으로 정의한다. 오픈 모델을 대규모로 빠르게 제공하는 데 초점을 둔다.",
        "Python으로 작성되고 Apache-2.0으로 공개되어 있으며, 이 위키의 litellm 같은 게이트웨이가 백엔드로 언급하는 추론 엔진 중 하나다.",
      ],
      links: [
        {
          description: "vLLM 소스와 문서로 이어지는 저장소다.",
          href: "https://github.com/vllm-project/vllm",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "vLLM을 백엔드 중 하나로 지원하는 게이트웨이 문서다.",
          href: "/w/BerriAI%2Flitellm",
          label: "litellm",
          variant: "internal",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "코딩 에이전트도 애플리케이션도 아닌, 모델을 실제로 돌리는 서빙 인프라다. 자가호스팅 LLM 스택의 성능 핵심으로, ollama보다 대규모·프로덕션 서빙 쪽에 가깝다.",
        "에이전트 생태계의 가장 아래 계층(추론 서빙)을 대표하는 인접 문서로 둔다.",
      ],
    },
  ],
} satisfies WikiArticle;
