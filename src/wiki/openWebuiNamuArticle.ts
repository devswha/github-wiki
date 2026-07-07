import type { WikiArticle } from "./types";

// 나무위키 'Open WebUI' 문서에서 가져와 편집(광고 제거·발췌)한 전환본.
// 원본 자체 집필본은 ./openWebuiArticle.ts 에 보존됨(언제든 되돌리기 가능).
export const openWebuiNamuArticle = {
  slug: "open-webui/open-webui",
  title: "open-webui",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "로컬 설치형 오픈 소스 대화형 인공지능 프론트엔드. (나무위키 'Open WebUI' 문서에서 가져옴)",
  infobox: [
    { label: "Owner", value: "open-webui", valueHref: "https://github.com/open-webui" },
    {
      label: "Repository",
      value: "open-webui",
      valueHref: "https://github.com/open-webui/open-webui",
    },
    { label: "Primary language", value: "Python / Svelte" },
    {
      label: "License",
      value: "저장소 LICENSE 참고",
      valueHref: "https://github.com/open-webui/open-webui",
    },
    { label: "Homepage", value: "openwebui.com", valueHref: "https://openwebui.com" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/open-webui/open-webui" },
        { label: "공식 사이트", href: "https://openwebui.com" },
      ],
      value: "",
    },
  ],
  attribution: {
    source: "나무위키",
    sourceUrl: "https://namu.wiki/w/Open%20WebUI",
    license: "CC BY-NC-SA 2.0 KR",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/2.0/kr/",
    retrievedAt: "2026-07-07",
  },
  sections: [
    {
      id: "overview",
      title: "개요",
      body: [
        "Open WebUI is an extensible, self-hosted AI interface that adapts to your workflow, all while operating entirely offline.",
        "로컬 설치형 오픈 소스 대화형 인공지능 프론트엔드.",
      ],
    },
    {
      id: "features",
      title: "특징",
      body: [
        "기본적으로 Docker를 통해 설치가 가능하며, 로컬로 직접 모델을 돌릴 수 있어 개인 정보 문제도 없다. Ollama를 통한 로컬 모델 이용과 GPT, Claude, Gemini 등 타사 API 호출을 통한 이용을 지원한다. 로컬 모델을 통한 이미지 생성과 웹 검색도 지원한다. Raspberry Pi 보드에서 AI 프론트엔드를 사용하고 싶을 때 유용하다. 다만 성능 한계로 인해 일부 저사양 모델 또는 API를 통한 이용만 가능하다.",
        "Windows의 경우 WSL2를 통해 Docker가 설치되어 있어야 한다. Docker Hub가 아닌 깃헙에서 도커 이미지를 배포하기 때문에 도커허브에서 검색하면 업데이트한지 1년이 넘은 이미지가 나오므로 오피셜 인스톨레이션 가이드를 참고하는 것이 좋다. 반대로 로컬 모델이 아닌 API 호출일 경우 해당 서비스 업체로 정보가 전송되어 오프라인 이점이 없어진다.",
      ],
    },
  ],
} satisfies WikiArticle;
