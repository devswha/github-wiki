import type { WikiArticle } from "./types";

export const omnigentArticle = {
  slug: "omnigent-ai/omnigent",
  title: "omnigent",
  modifiedAt: "2026-07-02T01:02:36.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "오케스트레이션", path: "/w/category/orchestration" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "Omnigent is an open-source AI agent meta-harness for supervising Claude Code, Codex, Cursor, OpenCode, Hermes, Pi, and custom agents from a shared terminal, browser, phone, or desktop surface.",
  image: {
    src: "https://raw.githubusercontent.com/omnigent-ai/omnigent/main/docs/images/omnigent-logo.svg",
    alt: "Omnigent logo",
  },
  infobox: [
    {
      label: "Owner",
      value: "omnigent-ai",
      valueHref: "https://github.com/omnigent-ai",
    },
    {
      label: "Repository",
      value: "omnigent",
      valueHref: "https://github.com/omnigent-ai/omnigent",
    },
    { label: "Primary language", value: "Python" },
    {
      label: "License",
      value: "Apache-2.0",
      valueHref: "https://github.com/omnigent-ai/omnigent/blob/main/LICENSE",
    },
    {
      label: "Homepage",
      value: "omnigent.ai",
      valueHref: "https://omnigent.ai",
    },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/omnigent-ai/omnigent" },
        { label: "공식 사이트", href: "https://omnigent.ai" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "메타 하네스",
      body: [
        "Omnigent는 README에서 Claude Code, Codex, Cursor, OpenCode, Hermes, Pi, custom agent를 같은 orchestration layer 위에 올리는 open-source meta-harness라고 설명한다. 한 하네스에 묶이기보다 여러 에이전트를 섞고 바꾸는 쪽이 핵심이다.",
        "사용 표면도 터미널 하나에 고정하지 않는다. README는 terminal, browser, phone, native desktop app에서 세션을 이어 보고, 메시지와 sub-agent, terminal, file 상태를 동기화하는 경험을 앞에 세운다.",
      ],
      links: [
        {
          description: "프로젝트 README와 릴리스, 최근 커밋을 확인할 수 있는 저장소다.",
          href: "https://github.com/omnigent-ai/omnigent",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "제품 설명과 다운로드 링크가 있는 공식 사이트다.",
          href: "https://omnigent.ai",
          label: "omnigent.ai",
          variant: "external",
        },
      ],
    },
    {
      id: "features",
      title: "주요 기능",
      body: [
        "README의 기능 설명은 여러 에이전트 supervising, session sharing, cloud sandbox 실행, policy 기반 승인·비용·도구 제한을 묶는다. 즉 단순 coding agent라기보다 agent host와 governance layer를 함께 제공하려는 도구다.",
        "설치는 scripts/install_oss.sh 또는 Python 3.12+ 환경의 uv tool install omnigent, pip install omnigent 경로를 안내한다. 저장소 메타데이터 기준 최신 릴리스는 v0.3.0이고, 상태 배지는 alpha로 표시되어 있다.",
      ],
      table: {
        caption: "Omnigent 기능 축",
        headers: ["축", "문서상 역할"],
        rows: [
          ["Multi-agent", "Claude Code, Codex, Cursor, OpenCode, Hermes, Pi, custom agent를 같은 세션에 묶는다."],
          ["Collaboration", "동료가 세션을 보고 co-drive하거나 conversation을 fork할 수 있게 한다."],
          ["Cloud sandbox", "Modal, Daytona, E2B, Kubernetes 같은 실행 환경을 세션별로 붙인다."],
          ["Policy", "위험 작업 승인, spend cap, tool access 제한을 적용한다."],
        ],
      },
    },
    {
      id: "recent-changes",
      title: "최근 변경",
      body: [
        "2026-07-02 기준 최근 커밋은 VS Code iframe extension 추가, permission-hook reattach spin-loop 제한, host orphan process reaper 같은 운영 안정성 작업이 중심이다. 특히 zombie pileup과 long-poll approval 재시도 경계를 다룬 커밋들이 이어졌다.",
        "GitHub Search API에서는 AI agent와 developer tools 주제의 최근 push 저장소 중 높은 신호로 잡혔다. 다만 alpha 상태이므로 실제 도입 판단은 README, 릴리스 노트, 최근 이슈 흐름까지 함께 확인하는 편이 안전하다.",
      ],
    },
  ],
} satisfies WikiArticle;
