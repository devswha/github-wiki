import type { WikiArticle } from "./types";

export const ollamaArticle = {
  slug: "ollama/ollama",
  title: "ollama",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
  ],
  summary:
    "Ollama는 로컬에서 오픈 모델을 받아 실행하는 도구다. DeepSeek·Qwen·Gemma·gpt-oss 등 여러 오픈 모델을 손쉽게 내려받아 로컬에서 구동하며, 오픈 모델 기반 개발의 출발점으로 널리 쓰인다.",
  infobox: [
    { label: "Owner", value: "ollama", valueHref: "https://github.com/ollama" },
    {
      label: "Repository",
      value: "ollama",
      valueHref: "https://github.com/ollama/ollama",
    },
    { label: "Primary language", value: "Go" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/ollama/ollama/blob/main/LICENSE",
    },
    { label: "Homepage", value: "ollama.com", valueHref: "https://ollama.com" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/ollama/ollama" },
        { label: "공식 사이트", href: "https://ollama.com" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "로컬 오픈 모델 러너",
      body: [
        "README는 Ollama를 오픈 모델을 로컬에서 받아 바로 구동하는 도구로 소개한다. 'Start building with open models'라는 표현대로, 다양한 오픈 모델을 내려받아 실행하는 출발점을 제공한다.",
        "Go로 작성되고 MIT로 공개되어 있으며, ollama.com에서 각 플랫폼용 다운로드와 모델 카탈로그를 제공한다.",
      ],
      links: [
        {
          description: "이 주제를 다루는 나무위키 문서다.",
          href: "https://namu.wiki/w/Ollama",
          label: "나무위키 문서",
          variant: "external",
        },
        {
          description: "Ollama 소스와 릴리스를 확인할 수 있는 저장소다.",
          href: "https://github.com/ollama/ollama",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "로컬 모델 러너는 이 위키의 코딩 에이전트들이 API 키 없이 로컬 CLI 백엔드로 돌아갈 때 자주 쓰는 조각이다. patina가 로컬 CLI 백엔드를 강조하는 맥락과도 맞닿는다.",
        "직접적인 코딩 에이전트는 아니지만 로컬·오프라인 LLM 실행 인프라로서 에이전트 생태계의 기반이라, 위키의 인접 문서로 둔다.",
      ],
    },
  ],
} satisfies WikiArticle;
