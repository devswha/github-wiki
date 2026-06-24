import type { WikiArticle } from "./types";

export const ohMyCodexArticle = {
  slug: "Yeachan-Heo/oh-my-codex",
  title: "oh-my-codex",
  modifiedAt: "2026-06-05T02:32:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "Codex 확장", path: "/w/category/codex-extension" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "oh-my-codex는 OpenAI Codex CLI 위에 붙는 OMX 워크플로우 계층으로, $deep-interview, $ralplan, $ultragoal과 .omx 상태 저장을 중심으로 Codex 작업을 구조화한다.",
  image: {
    src: "https://yeachan-heo.github.io/oh-my-codex-website/omx-character-nobg.png",
    alt: "oh-my-codex character",
  },
  infobox: [
    {
      label: "Owner",
      value: "Yeachan-Heo",
      valueHref: "https://github.com/Yeachan-Heo",
    },
    {
      label: "Repository",
      value: "oh-my-codex",
      valueHref: "https://github.com/Yeachan-Heo/oh-my-codex",
    },
    { label: "Primary language", value: "TypeScript / Rust" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/Yeachan-Heo/oh-my-codex/blob/main/LICENSE",
    },
    {
      label: "Homepage",
      value: "oh-my-codex website",
      valueHref: "https://yeachan-heo.github.io/oh-my-codex-website/",
    },
    { label: "Links", value: "" },
  ],
  sections: [
    {
      id: "overview",
      title: "Codex CLI 전제",
      body: [
        "README는 Yeachan-Heo/oh-my-codex 저장소와 oh-my-codex npm 패키지를 공식 OMX 프로젝트와 설치 대상이라고 못박는다. 이 프로젝트는 OpenAI Codex CLI를 대체하지 않고, Codex를 실행 엔진으로 둔 워크플로우 계층이다.",
        "OMX가 더해 주는 것은 강한 기본 세션, 일관된 workflow, role keyword와 skill 재사용, 그리고 .omx/ 아래의 plan, log, memory, runtime state 저장이다. README는 plain Codex만 원한다면 OMX가 필요 없을 수 있다고도 말한다.",
        "릴리스 흐름이 빠른 편이라, README와 변경 로그는 v0.17.0 같은 버전 표기로 명령 표면과 기본값이 갱신된 시점을 구분한다.",
        "설치 전후로 codex login status로 Codex 인증이 살아 있는지 확인하는 절차가 권장된다. OMX가 실제로 거는 것은 npm으로 깐 codex가 아니라 PATH에 있고 인증된 codex이기 때문이다.",
        "세션 루프를 열지 않고 한 번만 돌리고 싶을 때는 omx exec로 단발 실행을 트리거할 수 있다.",
      ],
      links: [
        {
          description: "공식/original OMX 저장소다.",
          href: "https://github.com/Yeachan-Heo/oh-my-codex",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "OMX 소개와 문서 링크가 있는 프로젝트 사이트다.",
          href: "https://yeachan-heo.github.io/oh-my-codex-website/",
          label: "공식 사이트",
          variant: "external",
        },
      ],
    },
    {
      id: "quick-start",
      title: "OMX 설치",
      body: [
        "권장 설치 흐름은 Codex CLI가 이미 있으면 codex --version으로 확인하고 npm install -g oh-my-codex, omx setup, omx --madmax --high를 실행하는 것이다. Codex CLI가 없다면 @openai/codex를 별도로 설치한 뒤 oh-my-codex를 설치하라고 안내한다.",
        "요구사항은 Node.js 20+, 인증된 Codex CLI, 같은 shell/profile에서 보이는 Codex auth다. macOS/Linux에서 추천 durable team runtime을 쓰려면 tmux가 필요하고, native Windows는 psmux를 쓰는 덜 지원되는 경로로 설명된다.",
      ],
    },
    {
      id: "workflow",
      title: "스토리형 워크플로우",
      body: [
        "README의 표준 경로는 $deep-interview, $ralplan, $ultragoal 순서다. 요청이나 경계가 불명확하면 먼저 인터뷰하고, 계획과 tradeoff를 승인한 뒤, 승인된 계획을 durable Codex goals와 ledger checkpoint로 바꾸는 흐름이다.",
        {
          items: [
            "$deep-interview: 요구사항과 경계를 먼저 좁힌다.",
            "$ralplan: 구현 계획과 tradeoff를 검토한다.",
            "$ultragoal: 승인된 계획을 durable goal과 증거 흐름으로 바꾼다.",
          ],
          kind: "list",
          label: "oh-my-codex 기본 흐름",
        },
        "$team은 active Ultragoal story 안에서 병렬 실행이 이득일 때만 쓰고, $ralph는 multi-goal ledger가 필요 없는 단일 소유자 지속 완료 루프로 설명된다. 따라서 OMX의 기본 완료 관점은 한 번의 답변이 아니라 계획, 실행, 검증 기록이 이어지는 상태ful 작업이다.",
      ],
      table: {
        caption: "OMX 주요 in-session 표면",
        headers: ["표면", "용도"],
        rows: [
          ["$deep-interview", "의도, 경계, non-goal 명확화"],
          ["$ralplan", "구현 계획과 tradeoff 승인"],
          ["$ultragoal", "승인된 계획을 durable multi-goal 완료 흐름으로 전환"],
          ["$team", "큰 작업에서 조율된 병렬 실행"],
          ["/skills", "설치된 skills와 helper 탐색"],
        ],
      },
    },
    {
      id: "runtime",
      title: "플러그인 런타임",
      body: [
        "package.json은 omx binary가 dist/cli/omx.js를 가리킨다고 선언한다. 같은 metadata에서 저장소, homepage, MIT license, Node >=20 engine, TypeScript와 Rust 빌드 스크립트가 확인된다.",
        "README는 plugins/oh-my-codex 아래의 공식 Codex plugin layout도 설명한다. 다만 plugin bundle은 npm install -g oh-my-codex와 omx setup의 대체물이 아니라, 설치된 omx CLI와 함께 lifecycle hook, optional MCP compatibility server, app metadata를 제공하는 보조 표면이다.",
      ],
    },
    {
      id: "operator",
      title: "운영 명령",
      body: [
        "operator surface로는 omx doctor, omx update, omx hud --watch, omx team status/resume/shutdown, omx explore, omx sparkshell, omx wiki가 문서화되어 있다. README는 doctor가 local runtime wiring을 확인하지만 실제 Codex 인증 model call까지 증명하지는 않는다고 구분한다.",
        "wiki 기능은 omx wiki list/query/lint/refresh 같은 CLI-first JSON surface다. wiki data는 omx_wiki/ 아래 repository project knowledge로 저장되고, markdown-first와 search-first를 지향한다고 설명된다.",
        "plugin layout에는 context-hooks도 들어가, 세션 컨텍스트가 만들어지는 시점에 필요한 정보를 끼워 넣거나 정리하는 지점을 연다.",
        "omx hud --watch는 진행 상태를 실시간으로 띄우고, omx team status/resume/shutdown은 병렬 런타임을 다룬다.",
        "정리하면 OMX는 Codex CLI를 엔진으로 두고 그 위에 일관된 작업 흐름과 .omx 상태, context-hooks를 얹는 보조 계층이다.",
      ],
      cards: [
        {
          body: "설치 shape와 hook/runtime prerequisite을 점검하는 support surface다.",
          href: "#operator",
          linkLabel: "운영 보기",
          title: "omx doctor",
        },
        {
          body: "read-only repository lookup과 low-cost summary fallback이 있는 탐색 표면이다.",
          href: "#operator",
          linkLabel: "운영 보기",
          title: "omx explore",
        },
        {
          body: "repository-local markdown knowledge를 list/query/lint/refresh하는 JSON CLI다.",
          href: "#operator",
          linkLabel: "운영 보기",
          title: "omx wiki",
        },
      ],
    },
    {
      id: "limits",
      title: "주의점",
      body: [
        "README는 권장 기본 경로를 macOS 또는 Linux의 Codex CLI로 한정한다. native Windows와 Codex App은 기본 경험이 아니고, 깨지거나 일관되지 않을 수 있으며 지원이 상대적으로 적다고 경고한다.",
        "이미 Homebrew가 codex binary를 소유한 경우 npm으로 @openai/codex와 oh-my-codex를 한 번에 덮어 설치하지 말라는 주의도 있다. OMX가 필요한 것은 npm으로 설치된 Codex가 아니라 PATH에 있고 인증된 codex 명령이다.",
      ],
    },
  ],
} satisfies WikiArticle;
