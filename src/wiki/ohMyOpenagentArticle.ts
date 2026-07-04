import type { WikiArticle } from "./types";

export const ohMyOpenagentArticle = {
  slug: "code-yeongyu/oh-my-openagent",
  title: "oh-my-openagent",
  modifiedAt: "2026-07-04T01:02:58.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "OpenCode 플러그인", path: "/w/category/opencode-plugin" },
    { label: "오케스트레이션", path: "/w/category/orchestration" },
  ],
  summary:
    "oh-my-openagent는 OpenAgent 계열 하네스다. ultrawork, Team Mode, 백그라운드 에이전트, LSP/AST 도구, 스킬 내장 MCP를 한데 묶는다.",
  image: {
    src: "https://raw.githubusercontent.com/code-yeongyu/oh-my-openagent/dev/.github/assets/omo.png",
    alt: "Oh My OpenAgent preview",
  },
  infobox: [
    {
      label: "Owner",
      value: "code-yeongyu",
      valueHref: "https://github.com/code-yeongyu",
    },
    {
      label: "Repository",
      value: "oh-my-openagent",
      valueHref: "https://github.com/code-yeongyu/oh-my-openagent",
    },
    { label: "Primary language", value: "TypeScript / Bun" },
    {
      label: "License",
      value: "SUL-1.0",
      valueHref: "https://github.com/code-yeongyu/oh-my-openagent/blob/dev/LICENSE.md",
    },
    {
      label: "Homepage",
      value: "omo.vibetip.help/docs",
      valueHref: "https://omo.vibetip.help/docs",
    },
    {
      label: "Latest release",
      value: "v4.15.1",
      valueHref: "https://github.com/code-yeongyu/oh-my-openagent/releases/tag/v4.15.1",
    },
    { label: "Links", value: "" },
  ],
  sections: [
    {
      id: "overview",
      title: "하네스 전환",
      body: [
        "README.ko는 oh-my-openagent를 Claude Code, Codex, OSS 모델까지 오케스트레이션하려는 에이전트 하네스로 소개한다. 설치 후 ultrawork 또는 ulw를 입력하는 것을 핵심 진입점처럼 제시한다.",
        "문서 첫머리에는 OpenCode, Codex, Pi 등 여러 하네스를 지원하기 위한 다중 하네스 리팩터링이 진행 중이라는 공지가 있다. manifesto는 프로젝트 이름이 oh-my-opencode에서 oh-my-openagent로 이동했고, 전환 기간에는 두 이름이 함께 쓰인다고 설명한다.",
      ],
      links: [
        {
          description: "프로젝트 소스, README, 릴리스 정보를 확인할 수 있는 저장소다.",
          href: "https://github.com/code-yeongyu/oh-my-openagent",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "프로젝트 철학을 설명하는 manifesto 문서다.",
          href: "https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/manifesto.md",
          label: "Manifesto",
          variant: "external",
        },
      ],
    },
    {
      id: "install",
      title: "설치 가이드 흐름",
      body: [
        "README는 사람에게 설치 명령을 직접 외우게 하기보다 LLM 에이전트에게 installation guide URL을 붙여넣으라고 안내한다. LLM 에이전트용으로는 같은 guide를 curl로 받아 그대로 따르는 흐름도 적혀 있다.",
        "2026-07-01 v4.15.1 릴리스는 LazyCodex install repair와 cleaner Codex skill discovery를 중심으로 한다. 깨진 marketplace-managed install은 조용히 건너뛰지 않고 repair 동작을 명시하고, legacy ultraresearch 노출을 줄여 ulw-research를 canonical research entrypoint로 남긴다.",
      ],
      subsections: [
        {
          id: "install-naming",
          title: "패키지와 설정 이름",
          body: [
            "전환 기간 때문에 배포된 npm 패키지와 CLI binary 이름은 여전히 oh-my-opencode이며, oh-my-openagent binary도 같은 실행 파일에 연결된다. 설정 파일도 oh-my-openagent.json[c]와 기존 oh-my-opencode.json[c]가 모두 인식된다.",
          ],
        },
        {
          id: "install-telemetry",
          title: "익명 telemetry",
          body: [
            "익명 telemetry는 활성 설치 수 집계를 위해 기본 활성화되어 있고, 머신당 UTC 하루 최대 1회 전송된다고 문서화되어 있다. OMO_SEND_ANONYMOUS_TELEMETRY=0 또는 OMO_DISABLE_POSTHOG=1로 비활성화할 수 있다.",
          ],
        },
      ],
    },
    {
      id: "highlights",
      title: "내장 기능 지도",
      body: [
        "하이라이트 표는 Discipline Agents, Team Mode, ultrawork, IntentGate, Hash-Anchored Edit Tool, LSP + AST-Grep, Background Agents, Built-in MCPs, Ralph Loop, Todo Enforcer, Comment Checker, Tmux Integration을 나열한다.",
        "README는 Claude Code compatibility도 강조한다. hook, command, skill, MCP, plugin을 그대로 동작시키는 호환성을 주장하고, skill-embedded MCPs는 필요한 task scope에서만 MCP server를 올렸다 내리는 방식으로 context budget 낭비를 줄인다고 설명한다.",
        "모델 카탈로그는 models.dev 데이터를 참고해 카테고리별로 어떤 모델을 붙일지 매핑한다.",
        "백그라운드 에이전트와 도구 출력은 NDJSON 스트림으로 흘러, 한 줄에 한 이벤트씩 파싱하기 쉽게 남는다.",
      ],
      table: {
        caption: "oh-my-openagent 주요 기능 축",
        headers: ["기능", "문서상 역할"],
        rows: [
          ["ultrawork / ulw", "한 단어로 agent workflow를 켜고 완료까지 밀고 간다."],
          ["Team Mode", "lead agent와 병렬 member가 team_* 도구로 통신한다."],
          ["Hash-Anchored Edits", "LINE#ID content hash로 stale line edit를 줄인다."],
          ["LSP + AST-Grep", "rename, diagnostics, AST search/rewrite를 agent tool로 제공한다."],
          ["Built-in MCPs", "web search, official docs, GitHub code search를 기본 도구로 둔다."],
        ],
      },
    },
    {
      id: "team-mode",
      title: "Team Mode와 모델",
      body: [
        "Team Mode는 리드 에이전트와 최대 8명의 병렬 멤버가 tmux 시각화와 전용 team_* 도구로 협업하는 opt-in 기능으로 설명된다. hyperplan과 security-research 같은 스킬이 이 팀 계층 위에서 동작한다.",
        "Agent orchestration에서는 모델을 직접 고르는 대신 visual-engineering, deep, quick, ultrabrain 같은 카테고리를 선택한다고 설명한다. 하네스가 카테고리를 적절한 모델로 매핑하므로 사용자가 매번 모델 선택을 관리하지 않아도 된다는 것이 문서의 주장이다.",
        "Team Mode 통신은 team_* 도구로 이뤄지고, 멤버 작업은 task_create로 만들어 lead가 분배한다.",
      ],
    },
    {
      id: "tools",
      title: "도구 계층",
      body: [
        "도구 설명은 LSP, AST-Grep, Tmux, MCP를 실제 통합된 agent 도구로 나열한다. LSP는 rename, goto definition, find references, diagnostics를 포함하고, AST-Grep은 25개 언어의 pattern 기반 검색과 rewrite를 담당한다.",
        "Skills 섹션은 skill이 단순 prompt가 아니라 domain-tuned system instruction, on-demand MCP server, permission scope를 함께 가진다고 설명한다. builtin 예로 playwright, git-master, frontend-ui-ux가 나온다.",
        "편집 도구는 hashline_edit 방식으로 LINE#ID 해시를 함께 받아, 줄이 밀려도 엉뚱한 위치를 고치지 않게 한다.",
      ],
      cards: [
        {
          body: "브라우저 자동화와 QA를 위한 built-in skill이다.",
          href: "#tools",
          linkLabel: "도구 보기",
          title: "playwright",
        },
        {
          body: "atomic commit과 rebase 수술을 담당하는 skill로 소개된다.",
          href: "#tools",
          linkLabel: "도구 보기",
          title: "git-master",
        },
        {
          body: "디자인 우선 UI 구현을 위한 skill로 소개된다.",
          href: "#tools",
          linkLabel: "도구 보기",
          title: "frontend-ui-ux",
        },
      ],
    },
    {
      id: "manifesto",
      title: "Manifesto",
      body: [
        "manifesto는 human intervention during agentic work를 실패 신호로 본다. agent가 올바르게 설계되었다면 사용자가 step-by-step으로 관리하지 않아도 완료해야 한다는 전제를 세운다.",
        "또 다른 목표는 agent가 쓴 코드가 senior engineer의 코드와 구분되지 않는 것이다. 기존 codebase pattern 준수, 제대로 된 error handling, 의미 있는 test, AI slop 제거, 가치 있는 comment만 남기는 조건을 적는다.",
        "핵심 loop는 Human Intent에서 Agent Execution을 거쳐 Verified Result로 가는 구조다. Prometheus, Metis, Momus, Orchestrator, Todo Continuation, Category System, Background Agents, Wisdom Accumulation이 이 loop를 지탱하는 기능으로 제시된다.",
      ],
    },
  ],
} satisfies WikiArticle;
