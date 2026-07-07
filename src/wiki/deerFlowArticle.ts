import type { WikiArticle } from "./types";

export const deerFlowArticle = {
  slug: "bytedance/deer-flow",
  title: "deer-flow",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "오케스트레이션", path: "/w/category/orchestration" },
    { label: "LLM 도구", path: "/w/category/llm-tool" },
  ],
  summary:
    "DeerFlow는 ByteDance가 만든 오픈소스 롱호라이즌 슈퍼에이전트 하네스다. 샌드박스·메모리·도구·스킬·서브에이전트·메시지 게이트웨이로 몇 분에서 몇 시간짜리 작업까지 연구·코딩·창작을 오케스트레이션한다.",
  infobox: [
    { label: "Owner", value: "bytedance", valueHref: "https://github.com/bytedance" },
    {
      label: "Repository",
      value: "deer-flow",
      valueHref: "https://github.com/bytedance/deer-flow",
    },
    { label: "Primary language", value: "Python / TypeScript" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/bytedance/deer-flow/blob/main/LICENSE",
    },
    { label: "Homepage", value: "deerflow.tech", valueHref: "https://deerflow.tech" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/bytedance/deer-flow" },
        { label: "공식 사이트", href: "https://deerflow.tech" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "롱호라이즌 슈퍼에이전트 하네스",
      body: [
        "README는 DeerFlow(Deep Exploration and Efficient Research Flow)를 서브에이전트·메모리·샌드박스를 오케스트레이션하는 오픈소스 super agent harness로 소개한다. 확장 가능한 스킬을 바탕으로 연구·코딩·창작을 아우르는 장시간 작업을 처리한다고 설명한다.",
        "2026-02-28 버전 2 출시와 함께 GitHub 트렌딩 1위를 기록했다고 README가 밝힌다. Python 백엔드와 Node 프런트로 구성되고 MIT로 공개되어 있다.",
      ],
      links: [
        {
          description: "DeerFlow 소스와 문서로 이어지는 저장소다.",
          href: "https://github.com/bytedance/deer-flow",
          label: "GitHub 저장소",
          variant: "external",
        },
      ],
    },
    {
      id: "notes",
      title: "포지션",
      body: [
        "단발 코딩 에이전트가 아니라, 서브에이전트·메모리·샌드박스·메시지 게이트웨이를 묶어 장시간(long-horizon) 작업을 다루는 상위 하네스다. 이 위키의 hermes-agent·omnigent 같은 '하네스/오케스트레이션' 계열과 같은 범주다.",
        "대기업(ByteDance) 주도에 다국어 README를 갖춰, 검색 표면이 넓은 트렌딩 하네스로 등재한다.",
      ],
    },
  ],
} satisfies WikiArticle;
