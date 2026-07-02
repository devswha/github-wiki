import type { WikiArticle } from "./types";

export const ohMyClaudecodeArticle = {
  slug: "Yeachan-Heo/oh-my-claudecode",
  title: "oh-my-claudecode",
  modifiedAt: "2026-07-02T01:02:36.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "Claude Code 확장", path: "/w/category/claude-code-extension" },
    { label: "오케스트레이션", path: "/w/category/orchestration" },
  ],
  summary:
    "oh-my-claudecode는 Claude Code를 위한 멀티 에이전트 오케스트레이션 도구로, Team Mode, 자연어 shortcut, skill injection, tmux CLI worker를 함께 제공한다.",
  image: {
    src: "https://raw.githubusercontent.com/Yeachan-Heo/oh-my-claudecode/main/assets/omc-character.jpg",
    alt: "oh-my-claudecode character",
  },
  infobox: [
    {
      label: "Owner",
      value: "Yeachan-Heo",
      valueHref: "https://github.com/Yeachan-Heo",
    },
    {
      label: "Repository",
      value: "oh-my-claudecode",
      valueHref: "https://github.com/Yeachan-Heo/oh-my-claudecode",
    },
    { label: "Primary language", value: "TypeScript" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/Yeachan-Heo/oh-my-claudecode/blob/main/LICENSE",
    },
    {
      label: "Homepage",
      value: "oh-my-claudecode.dev",
      valueHref: "https://oh-my-claudecode.dev",
    },
    { label: "Links", value: "" },
  ],
  sections: [
    {
      id: "overview",
      title: "Claude Code 플러그인",
      body: [
        "oh-my-claudecode는 README에서 Claude Code를 위한 멀티 에이전트 오케스트레이션으로 소개된다. 같은 계열의 Codex 사용자는 oh-my-codex를 보라는 안내도 함께 둔다.",
        "핵심 사용 경험은 복잡한 명령을 외우기보다 원하는 일을 자연어로 말하고, 필요하면 deep-interview로 요구사항을 먼저 정리하는 흐름이다. Team Mode와 skill 기반 routing이 그 실행 표면을 이룬다.",
        "에이전트 묶음도 큰 부분이다. 문서는 역할별로 나뉜 19개의 전문 에이전트가 리뷰, 보안, 프런트엔드, 문서 같은 작업을 나눠 맡는다고 정리한다.",
        "hook 시스템은 11개 라이프사이클 지점에 걸려, 세션 시작과 종료, 도구 사용 전후 같은 시점에서 동작을 끼워 넣는다.",
        "저장소 메타데이터 기준 최신 릴리스는 v4.15.1이며, 해당 릴리스는 dev의 fix/chore 커밋을 main으로 합친 유지보수 릴리스로 표시된다.",
      ],
      links: [
        {
          description: "프로젝트 소스와 README, 문서 링크가 있는 저장소다.",
          href: "https://github.com/Yeachan-Heo/oh-my-claudecode",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "공식 문서 사이트로 이어지는 외부 링크다.",
          href: "https://oh-my-claudecode.dev",
          label: "문서 사이트",
          variant: "external",
        },
      ],
    },
    {
      id: "install",
      title: "설치 이름",
      body: [
        "빠른 시작은 Claude Code plugin marketplace에 Yeachan-Heo/oh-my-claudecode를 추가하고 plugin install을 실행한 뒤 /omc-setup을 호출하는 흐름이다. README는 플러그인 디렉터리 모드로 실행할 때 중복 로딩을 피하기 위한 --plugin-dir-mode도 설명한다.",
        "저장소와 플러그인 브랜드는 oh-my-claudecode지만, npm 패키지는 oh-my-claude-sisyphus로 배포된다는 주석이 있다. package.json은 oh-my-claudecode, omc, omc-cli 세 binary를 같은 bridge CLI에 연결한다.",
      ],
    },
    {
      id: "team-mode",
      title: "협업 모드",
      body: [
        "README.ko는 v4.1.7부터 Team이 OMC의 표준 오케스트레이션 방식이라고 설명한다. 기본 파이프라인은 team-plan, team-prd, team-exec, team-verify, team-fix loop 순서로 제시된다.",
        "v4.4.0 이후 Codex와 Gemini 작업은 MCP 서버 대신 tmux CLI worker로 실행하는 방향을 안내한다. omc team N:codex, omc team N:gemini, omc team N:claude 표면이 있고, /ccg는 Codex와 Gemini 조언을 Claude가 통합하는 shortcut이다.",
      ],
      table: {
        caption: "oh-my-claudecode 실행 표면",
        headers: ["표면", "worker", "주요 용도"],
        rows: [
          ["omc team N:codex", "Codex CLI", "코드 리뷰, 보안 분석, 아키텍처 검증"],
          ["omc team N:gemini", "Gemini CLI", "UI/UX와 문서, 큰 컨텍스트 검토"],
          ["omc team N:claude", "Claude CLI", "tmux에서 Claude CLI 일반 작업 실행"],
          ["/ccg", "Codex + Gemini", "두 모델 조언을 Claude가 통합"],
        ],
      },
    },
    {
      id: "features",
      title: "명령 표면",
      body: [
        "기능 표는 Team, omc team, ccg, Autopilot, Ultrawork, Ralph, Pipeline 같은 실행 모드를 나눈다. 각 모드는 완전 자율 개발, 병렬 수정, 지속 완료, 순차 처리처럼 서로 다른 작업 성격에 맞춰져 있다.",
        "개발자 경험 쪽에서는 magic keyword, HUD status bar, skill learning, analytics and cost tracking이 전면에 나온다. 아키텍처 문서는 hook, skill, agent, state 네 시스템이 사용자 입력에서 실행과 상태 추적으로 이어지는 흐름을 설명한다.",
        "project-memory는 레포 단위로 누적되는 지식 계층으로, 다음 세션이 같은 맥락을 다시 읽지 않아도 되게 한다.",
        "코드 탐색에는 AST-Grep 기반 구조 검색이 들어가, 단순 텍스트 매칭보다 구문 구조로 코드를 찾고 바꾼다.",
        "최근 main 커밋 흐름에서는 submodule 안 worktree의 .omc state anchor 수정, CI benchmark envelope 조정, dist/bridge build artifact PR guard 추가처럼 운영 안정성과 기여 규칙을 다듬는 변경이 보인다.",
      ],
      cards: [
        {
          body: "요구가 불명확할 때 먼저 질문해 숨은 가정과 범위를 드러내는 표면이다.",
          href: "#overview",
          linkLabel: "개요 보기",
          title: "deep-interview",
        },
        {
          body: "작업을 여러 단계로 나누고 검증·수정 루프를 포함하는 표준 오케스트레이션 방식이다.",
          href: "#team-mode",
          linkLabel: "Team Mode 보기",
          title: "Team Mode",
        },
        {
          body: "세션에서 얻은 문제 해결 패턴을 재사용 가능한 skill 파일로 추출한다.",
          href: "#skills",
          linkLabel: "스킬 보기",
          title: "skillify",
        },
      ],
    },
    {
      id: "skills",
      title: "스킬 묶음",
      body: [
        "커스텀 스킬은 프로젝트 범위 .omc/skills와 사용자 범위 ~/.omc/skills 아래에 둘 수 있다. 프로젝트 스코프가 사용자 스코프보다 우선하고, 매칭되는 스킬은 수동 호출 없이 context에 자동으로 로드된다.",
        "유틸리티로는 rate limit reset 뒤 세션을 재개하는 wait 명령, Telegram/Discord/Slack stop callback tag 설정, OpenClaw gateway 연동이 문서화되어 있다. OpenClaw 연동은 session-start, stop, keyword-detector, ask-user-question, pre/post-tool-use 같은 이벤트를 gateway로 전달한다.",
        "정리하면 OMC는 Claude Code 위에 Team Mode, 자연어 shortcut, 19개의 전문 에이전트, project-memory를 얹는 오케스트레이션 확장이다.",
        "각 표면은 따로 떼어 쓰기보다, hook과 skill, agent, state 네 시스템이 맞물릴 때 제 역할을 한다.",
      ],
    },
    {
      id: "requirements",
      title: "요구 조건",
      body: [
        "README의 요구사항은 Claude Code CLI와 Claude Max/Pro 구독 또는 Anthropic API key다. Gemini CLI와 Codex CLI는 교차 검증과 디자인 일관성을 위한 선택 제공자이며, 없어도 OMC 자체는 동작한다고 설명한다.",
        "이 도구는 Claude Code 위에서 더 강한 오케스트레이션을 제공하려는 확장이다. 순수 Claude Code를 그대로 쓰고 싶거나 멀티 agent workflow가 필요 없는 작은 작업에는 설정과 명령 체계가 무겁게 느껴질 수 있다.",
      ],
    },
  ],
} satisfies WikiArticle;
