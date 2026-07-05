import type { WikiArticle } from "./types";

export const gajaeCodeArticle = {
  slug: "Yeachan-Heo/gajae-code",
  title: "gajae-code",
  modifiedAt: "2026-07-05T01:01:30.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "gajae-code는 red-claw 코딩 에이전트로, crisp interviews, resilient plans, tmux-native execution, durable verification을 한 루프로 묶는 실험적 베타 프로젝트다.",
  image: {
    src: "https://raw.githubusercontent.com/Yeachan-Heo/gajae-code/main/assets/character.png",
    alt: "Gajae-Code character mascot",
  },
  infobox: [
    {
      label: "Owner",
      value: "Yeachan-Heo",
      valueHref: "https://github.com/Yeachan-Heo",
    },
    {
      label: "Repository",
      value: "gajae-code",
      valueHref: "https://github.com/Yeachan-Heo/gajae-code",
    },
    { label: "Primary language", value: "TypeScript / Rust" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/Yeachan-Heo/gajae-code/blob/main/LICENSE",
    },
    {
      label: "Homepage",
      value: "gaebal-gajae.dev",
      valueHref: "https://gaebal-gajae.dev/",
    },
    { label: "Links", value: "" },
  ],
  sections: [
    {
      id: "overview",
      title: "베타 상태",
      body: [
        "Gajae-Code는 README 첫머리에서 실험적이고 베타 단계인 초기 프로젝트라고 밝힌다. 중요한 작업에 의존하기 전에 출력 검증이 필요하다는 주의가 함께 붙어 있다.",
        "프로젝트 설명은 red-claw 코딩 에이전트다. 인터뷰, 계획, tmux 기반 실행, 검증을 한 흐름으로 묶고, 이전 OpenAI/Anthropic 코드 하니스 경험에서 남은 반복 루프를 작게 정리한 쪽에 가깝다.",
        "베타라는 표시는 기능이 빠졌다는 뜻보다, 출력과 실행 증거를 사람이 한 번 더 확인하는 전제를 둔다는 쪽에 가깝다.",
      ],
      links: [
        {
          description: "프로젝트 README와 개발 문서를 확인할 수 있는 외부 저장소다.",
          href: "https://github.com/Yeachan-Heo/gajae-code",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "이 문서 안에서 기본 워크플로우 설명으로 이동한다.",
          href: "#workflow",
          label: "워크플로우 문단",
          variant: "internal",
        },
      ],
    },
    {
      id: "usage",
      title: "gjc 실행 방식",
      body: [
        "README 기준으로 npm 패키지 이름은 gajae-code이고 설치되는 실행 파일은 gjc다. 권장 런타임 흐름은 Bun으로 전역 설치한 뒤 gjc --tmux로 tmux-backed 세션을 시작하는 방식이다.",
        "bare gjc는 tmux 세션을 만들거나 붙지 않고 직접 실행된다. 안전한 브랜치별 작업 공간이 필요할 때는 gjc --tmux --worktree <path>로 격리된 Git worktree 안에서 실행할 수 있다.",
        "세션 저장 위치는 GJC_CODING_AGENT_DIR로 정해지고 기본값은 ~/.gjc/agent다. 이 디렉터리 아래 agent.db에 세션 상태와 기록이 모인다.",
      ],
    },
    {
      id: "workflow",
      title: "작업 루프",
      body: [
        "공개 agent 표면은 의도적으로 작다. README는 deep-interview -> ralplan -> ultragoal을 중심 루프로 설명하고, 병렬 tmux worker가 실제로 도움이 될 때만 team을 선택적으로 더하는 구조를 제시한다.",
        "deep-interview는 의도를 명확히 하고, ralplan은 접근을 계획하고 비평하며, ultragoal은 구현, 수정, 검증, 증거 요약까지 밀고 간다. team은 필수 handoff 단계가 아니라 조율된 병렬 실행이 필요한 경우의 실행 모드다.",
        "긴 작업에서는 컨텍스트 승격으로 직전 단계의 핵심 사실만 다음 단계로 끌어올려 토큰 사용을 줄인다.",
      ],
      table: {
        caption: "Gajae-Code 기본 워크플로우 표면",
        headers: ["항목", "성격", "역할"],
        rows: [
          ["deep-interview", "스킬", "계획이나 코드 변경 전에 모호성을 줄인다."],
          ["ralplan", "스킬", "계획을 만들고 실행 전에 비평한다."],
          ["team", "스킬", "여러 worker가 이득일 때 tmux 병렬 실행을 조율한다."],
          ["ultragoal", "스킬", "구현과 검증, 증거 요약까지 목표를 지속 추적한다."],
        ],
      },
    },
    {
      id: "structure",
      title: "패키지 배치",
      body: [
        "codebase overview는 주 제품 영역이 packages/coding-agent라고 설명한다. 이 패키지가 gjc CLI와 제품 런타임을 맡고, setup, deep-interview, ralplan, ultragoal, team 같은 명령을 등록한다.",
      ],
      subsections: [
        {
          id: "structure-boundaries",
          title: "패키지 경계",
          body: [
            "packages/ai는 provider와 model 경계를 담당하고, packages/agent는 상태형 agent runtime을 제공한다. packages/tui는 터미널 UI를 담당하며, packages/natives와 Rust crates는 N-API 기반 native helper 계층을 제공한다.",
          ],
        },
        {
          id: "structure-auth",
          title: "provider 인증",
          body: [
            "provider 인증은 auth-broker 계층이 모델별 자격증명을 중개하고, 코딩 세션 자체에는 토큰을 그대로 넘기지 않는다.",
          ],
        },
      ],
    },
    {
      id: "runtime",
      title: "재시도와 검증",
      body: [
        "README는 session auto-retry와 provider retry budget을 별도 계층으로 설명한다. requestMaxRetries는 stream이 열리기 전 provider SDK/fetch 재시도에, streamMaxRetries는 replay-safe stream 실패에 쓰인다.",
        "개발 문서에서는 workflow definition이나 rebrand surface 변경 시 visible definition, gate 검증, rebrand inventory, default definition 테스트를 실행하라고 안내한다. 즉 이 프로젝트의 기본값은 소스에 포함된 정의와 검증 gate를 함께 유지하는 방식이다.",
        "실행 로그는 append-only로 쌓여서, 세션이 중간에 끊겨도 replay-safe하게 같은 지점에서 이어진다.",
      ],
    },
    {
      id: "recent-updates",
      title: "최근 갱신",
      body: [
        "2026-07-04 v0.8.1 릴리스가 올라왔다. 최근 커밋에는 skill tool을 discoverable 대신 default-registered로 바꾸는 변경, vanished acknowledged tmux turn 분류 수정, inline skill invocation 지원이 포함됐다.",
        "GitHub metadata 기준 저장소 설명은 Gajae Code MVP이고 기본 브랜치는 main이다. 최근 릴리스 흐름은 public surface 확대보다는 skill 호출 기본값과 tmux coordinator 안정성에 맞춰져 있다.",
      ],
    },
    {
      id: "limits",
      title: "운영 전제",
      body: [
        "Gajae-Code는 작은 public surface를 유지하려는 코딩 에이전트 도구다. 많은 스킬을 기본으로 늘리기보다, 깊은 인터뷰와 계획 비평, 지속 검증 루프를 더 신뢰할 수 있게 만드는 방향을 택한다.",
        "동시에 README의 베타 경고처럼 아직 거친 부분이 있을 수 있다. 중요한 운영 작업에는 agent 출력과 실행 증거를 사람이 다시 확인하는 전제가 필요하다.",
        "정리하면 적은 표면, 깊은 인터뷰, 검증 gate, 그리고 agent.db와 append-only 로그로 남는 실행 기록이 이 도구의 기본 골격이다.",
      ],
    },
  ],
} satisfies WikiArticle;
