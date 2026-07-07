import type { WikiArticle } from "./types";

export const libreChatArticle = {
  slug: "danny-avila/LibreChat",
  title: "LibreChat",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "LLM 도구", path: "/w/category/llm-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "LibreChat은 에이전트·MCP·스킬·코드 인터프리터를 갖춘 자가호스팅 오픈소스 챗 인터페이스다. OpenAI·Anthropic·Gemini·DeepSeek 등 다양한 모델을 한 화면에서 전환하며 쓸 수 있는 확장형 ChatGPT 대안이다.",
  infobox: [
    { label: "Owner", value: "danny-avila", valueHref: "https://github.com/danny-avila" },
    {
      label: "Repository",
      value: "LibreChat",
      valueHref: "https://github.com/danny-avila/LibreChat",
    },
    { label: "Primary language", value: "TypeScript" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/danny-avila/LibreChat/blob/main/LICENSE",
    },
    { label: "Homepage", value: "librechat.ai", valueHref: "https://librechat.ai/" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/danny-avila/LibreChat" },
        { label: "공식 사이트", href: "https://librechat.ai/" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "확장형 자가호스팅 챗",
      body: [
        "저장소 설명은 LibreChat을 Agents·MCP·Skills·Code Interpreter를 갖춘 향상된 ChatGPT 클론으로 정의한다. OpenAI·Anthropic·AWS·Azure·Groq·Mistral·OpenRouter·Vertex AI·Gemini·DeepSeek 등 폭넓은 모델을 지원한다.",
        "메시지 검색, 모델 전환, Artifacts, OpenAPI Actions/Functions, 안전한 멀티유저 인증 같은 기능을 갖춘 오픈소스 자가호스팅 인터페이스이며 활발히 개발된다.",
      ],
      links: [
        {
          description: "LibreChat 소스와 셀프호스팅 문서로 이어지는 저장소다.",
          href: "https://github.com/danny-avila/LibreChat",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "코딩 에이전트가 아니라, 여러 모델과 에이전트·도구를 사람이 대화형으로 쓰는 자가호스팅 프런트엔드다. MCP·스킬·코드 인터프리터 지원으로 단순 채팅을 넘어 에이전트 실행 표면을 겸한다.",
        "이 위키에서는 open-webui와 함께 자가호스팅 LLM 사용 축을 대표하는 인접 문서로 둔다.",
      ],
    },
  ],
} satisfies WikiArticle;
