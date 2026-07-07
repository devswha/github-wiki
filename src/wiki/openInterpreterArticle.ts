import type { WikiArticle } from "./types";

export const openInterpreterArticle = {
  slug: "openinterpreter/openinterpreter",
  title: "open-interpreter",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "코딩 에이전트", path: "/w/category/coding-agent" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
  ],
  summary:
    "Open Interpreter는 저비용·오픈 모델을 겨냥한 경량 코딩 에이전트다. 현재는 Rust로 재작성됐고 Deepseek·Kimi·Qwen·GLM 같은 오픈 모델과 터미널에서 함께 쓰도록 설계됐다.",
  infobox: [
    { label: "Owner", value: "openinterpreter", valueHref: "https://github.com/openinterpreter" },
    {
      label: "Repository",
      value: "openinterpreter",
      valueHref: "https://github.com/openinterpreter/openinterpreter",
    },
    { label: "Primary language", value: "Rust" },
    {
      label: "License",
      value: "Apache-2.0",
      valueHref: "https://github.com/openinterpreter/openinterpreter/blob/main/LICENSE",
    },
    { label: "Homepage", value: "openinterpreter.com", valueHref: "https://openinterpreter.com/" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/openinterpreter/openinterpreter" },
        { label: "공식 문서", href: "https://www.openinterpreter.com/docs/terminal" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "저비용 모델용 코딩 에이전트",
      body: [
        "README는 Open Interpreter를 'a coding agent for low-cost models'로 소개한다. 저비용·오픈 모델을 터미널에서 코딩 에이전트로 쓰는 데 초점을 둔다.",
        "현재 버전은 Rust로 새로 작성됐고, 원래 Python 프로젝트는 커뮤니티 유지보수 포크(endolith/open-interpreter)로 남아 있다고 안내한다. GLM-5.2용 Rust 네이티브 zcode 하네스를 포함해 오픈 모델에 맞춘 워크플로를 제공한다.",
      ],
      links: [
        {
          description: "Open Interpreter 소스와 릴리스를 확인할 수 있는 저장소다.",
          href: "https://github.com/openinterpreter/openinterpreter",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "특징",
      body: [
        "Deepseek, Kimi, Qwen 같은 오픈 모델을 명시적으로 겨냥하고, GLM-5.2에는 zcode 에뮬레이션 하네스를 붙여 터미널 코딩 에이전트 워크플로를 제공한다. Apache-2.0으로 공개되어 있다.",
        "고비용 프런티어 모델이 아니라 저비용·로컬 지향 모델과의 조합을 전제로 한다는 점이 이 위키의 다른 코딩 에이전트와 구분되는 포인트다.",
      ],
    },
  ],
} satisfies WikiArticle;
