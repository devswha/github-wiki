import type { WikiArticle } from "./types";

export const hermesAgentArticle = {
  slug: "NousResearch/hermes-agent",
  title: "hermes-agent",
  modifiedAt: "2026-07-13T01:15:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "Hermes Agent는 Nous Research가 만든 자기개선형 AI 에이전트로, 터미널 UI, 다중 메신저 게이트웨이, 기억, 스킬 생성, 예약 자동화를 한 런타임에 묶는다.",
  image: {
    src: "https://raw.githubusercontent.com/NousResearch/hermes-agent/main/assets/banner.png",
    alt: "Hermes Agent banner",
  },
  infobox: [
    {
      label: "Owner",
      value: "NousResearch",
      valueHref: "https://github.com/NousResearch",
    },
    {
      label: "Repository",
      value: "hermes-agent",
      valueHref: "https://github.com/NousResearch/hermes-agent",
    },
    { label: "Primary language", value: "Python" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/NousResearch/hermes-agent/blob/main/LICENSE",
    },
    {
      label: "Homepage",
      value: "hermes-agent.nousresearch.com",
      valueHref: "https://hermes-agent.nousresearch.com",
    },
    {
      label: "Latest release",
      value: "v2026.7.7.2 / v0.18.2",
      valueHref: "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.7.2",
    },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/NousResearch/hermes-agent" },
        { label: "Docs", href: "https://hermes-agent.nousresearch.com/docs/" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "자기개선형 에이전트",
      body: [
        "README는 Hermes Agent를 Nous Research가 만든 self-improving AI agent라고 소개한다. 핵심은 대화 인터페이스 하나가 아니라, 경험에서 스킬을 만들고, 사용 중 스킬을 개선하고, 과거 대화와 사용자 모델을 다시 찾는 닫힌 학습 루프다.",
        "공식 설명은 'The agent that grows with you'에 가깝다. 사용자는 터미널에서만 붙는 것이 아니라 Telegram, Discord, Slack, WhatsApp, Signal, CLI 같은 표면을 같은 gateway로 이어 쓸 수 있다.",
      ],
      links: [
        {
          description: "프로젝트 README와 릴리스 정보를 확인할 수 있는 외부 저장소다.",
          href: "https://github.com/NousResearch/hermes-agent",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "설치, provider, gateway 문서를 확인할 수 있는 공식 문서다.",
          href: "https://hermes-agent.nousresearch.com/docs/",
          label: "공식 문서",
          variant: "external",
        },
      ],
    },
    {
      id: "surfaces",
      title: "실행 표면",
      body: [
        "README의 기능 표는 multiline 편집과 slash-command autocomplete가 있는 터미널 TUI, 여러 메신저를 잇는 gateway, scheduled automations, subagent 병렬화, RPC 도구 호출을 함께 제시한다.",
        "터미널 백엔드는 local, Docker, SSH, Singularity, Modal, Daytona를 언급한다. 프로젝트가 노트북 한 대에 묶이지 않고 VPS, GPU cluster, serverless persistent environment까지 목표로 잡는 이유도 여기 있다.",
      ],
      table: {
        caption: "Hermes Agent 주요 표면",
        headers: ["표면", "문서상 역할"],
        rows: [
          ["TUI / CLI", "대화, slash command, streaming tool output을 처리한다."],
          ["Gateway", "Discord, Telegram, Slack 등 여러 채널을 한 프로세스로 잇는다."],
          ["Scheduler", "일일 보고, 백업, 감사 같은 자연어 cron 작업을 실행한다."],
          ["Subagents", "격리된 병렬 작업 흐름을 만들고 결과를 모은다."],
        ],
      },
    },
    {
      id: "learning-loop",
      title: "기억과 스킬 루프",
      body: [
        "README는 agent-curated memory, periodic nudges, autonomous skill creation, FTS5 session search, LLM summarization, Honcho user modeling을 닫힌 루프의 구성 요소로 나열한다.",
        "이 구조는 단발 코딩 CLI보다 장기 보조 에이전트에 가깝다. 같은 사용자의 반복 작업, 선호, 프로젝트 규칙을 다음 세션에 다시 끌어오는 것을 제품의 핵심 가치로 둔다.",
      ],
      cards: [
        {
          body: "복잡한 작업 뒤 재사용 가능한 skill을 만들고, 사용 중에도 다듬는 흐름이다.",
          href: "#learning-loop",
          linkLabel: "루프 보기",
          title: "Skill creation",
        },
        {
          body: "과거 세션 검색과 요약으로 장기 맥락을 복원하는 계층이다.",
          href: "#learning-loop",
          linkLabel: "루프 보기",
          title: "Session recall",
        },
      ],
    },
    {
      id: "release",
      title: "최근 릴리스",
      body: [
        "GitHub 릴리스 기준 최신 버전은 v2026.7.7.2이며, 릴리스 이름은 Hermes Agent v0.18.2 (2026.7.7.2)다. 공개일은 2026-07-08로 기록되어 있고, v0.18.1 이후 tagged-release Docker build에 필요한 WhatsApp Baileys 의존성 수정을 담은 같은 날 패치다.",
        "GitHub Search API에서 topic:ai-agent와 2026-06 이후 push 조건으로 조회했을 때 Hermes Agent는 높은 star count와 최근 activity를 동시에 보이는 저장소로 잡혔다. 이 문서가 추가된 이유는 단순 인기보다, 장기 기억형 에이전트와 예약 자동화라는 이 위키의 기존 관심사와 직접 맞닿기 때문이다.",
      ],
    },
  ],
} satisfies WikiArticle;
