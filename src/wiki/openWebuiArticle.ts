import type { WikiArticle } from "./types";

export const openWebuiArticle = {
  slug: "open-webui/open-webui",
  title: "open-webui",
  modifiedAt: "2026-07-02T00:00:00.000Z",
  categories: [
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "Open WebUI는 사용자 친화적인 AI 인터페이스다. Ollama와 OpenAI 호환 API를 지원하는 자가호스팅 웹 UI로, 로컬·원격 모델을 한 화면에서 다룬다.",
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
  sections: [
    {
      id: "overview",
      title: "자가호스팅 AI 인터페이스",
      body: [
        "README는 Open WebUI를 사용자 친화적인 AI 인터페이스로 소개한다. Ollama와 OpenAI 호환 API를 지원하며, 자가호스팅으로 로컬·원격 모델을 웹 UI에서 다룬다.",
        "Python 백엔드와 웹 프런트로 구성되며, 셀프호스팅 배포를 전제로 한 채팅·모델 관리 인터페이스를 제공한다.",
      ],
      links: [
        {
          description: "Open WebUI 소스와 배포 문서로 이어지는 저장소다.",
          href: "https://github.com/open-webui/open-webui",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "코딩 에이전트가 아니라, 로컬/원격 모델을 사람이 대화형으로 쓰는 프런트엔드다. Ollama 같은 로컬 러너와 짝을 이뤄 자가호스팅 LLM 사용 경험을 완성한다.",
        "이 위키에서는 로컬 LLM 사용 축을 대표하는 인접 문서로 둔다.",
      ],
    },
  ],
} satisfies WikiArticle;
