import type { WikiArticle } from "./types";

// 나무위키 'Ollama' 문서에서 가져와 편집(광고 제거·발췌)한 전환본.
// 원본 자체 집필본은 ./ollamaArticle.ts 에 보존됨(언제든 되돌리기 가능).
export const ollamaNamuArticle = {
  slug: "ollama/ollama",
  title: "ollama",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
  ],
  summary:
    "대형 언어 모델을 개인 컴퓨터나 서버에서 쉽게 실행할 수 있도록 만든 로컬 LLM 실행 도구. (나무위키 'Ollama' 문서에서 가져옴)",
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
  attribution: {
    source: "나무위키",
    sourceUrl: "https://namu.wiki/w/Ollama",
    license: "CC BY-NC-SA 2.0 KR",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/2.0/kr/",
    retrievedAt: "2026-07-07",
  },
  sections: [
    {
      id: "overview",
      title: "개요",
      body: [
        "Ollama는 대형 언어 모델을 개인 컴퓨터나 서버에서 쉽게 실행할 수 있도록 만든 로컬 LLM 실행 도구이다.",
        "기본적인 로컬 모델 실행 기능은 무료로 제공되며, 클라우드 기반 기능 등 일부 기능은 유료로 제공된다. Ollama 라이브러리 및 Modelfile을 통해 다양한 오픈 가중치 모델을 내려받거나 불러와 실행할 수 있다.",
      ],
    },
  ],
} satisfies WikiArticle;
