import type { WikiArticle } from "./types";

export const patinaArticle = {
  slug: "devswha/patina",
  title: "patina",
  modifiedAt: "2026-07-07T01:02:31.000Z",
  categories: [
    { label: "문서화", path: "/w/category/documentation" },
    { label: "AI 글쓰기 도구", path: "/w/category/ai-writing-tool" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
  ],
  summary:
    "patina is an AI writing humanizer and audit CLI that flags templated prose across Korean, English, Chinese, and Japanese while preserving meaning anchors.",
  image: {
    src: "https://raw.githubusercontent.com/devswha/patina/main/assets/brand/patina-icon.svg",
    alt: "patina repository icon",
  },
  infobox: [
    { label: "Owner", value: "devswha", valueHref: "https://github.com/devswha" },
    {
      label: "Repository",
      value: "patina",
      valueHref: "https://github.com/devswha/patina",
    },
    { label: "Primary language", value: "JavaScript / Node.js" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/devswha/patina/blob/main/LICENSE",
    },
    {
      label: "Homepage",
      value: "patina.vibetip.help",
      valueHref: "https://patina.vibetip.help",
    },
    {
      label: "Latest release",
      value: "v6.1.0 — persona hardening",
      valueHref: "https://github.com/devswha/patina/releases/tag/v6.1.0",
    },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/devswha/patina" },
        { label: "공식 사이트", href: "https://patina.vibetip.help" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "개요",
      body: [
        "patina는 AI가 쓴 것처럼 보이는 문장 표면을 찾아 다듬는 글쓰기 보조 도구다. 한국어, 영어, 중국어, 일본어를 대상으로 하며, 단순 paraphraser보다는 패턴 기반 점검기와 의미 보존 재작성기를 한데 묶은 쪽에 가깝다.",
        "핵심 문구는 README의 표현 그대로 요약하면 'AI 포장만 벗기고, 의미는 그대로'다. 주장, 수치, 긍부정, 인과관계 같은 의미 앵커를 건드리지 않는 것을 중요한 제약으로 삼는다.",
      ],
      links: [
        {
          description: "프로젝트 소스와 릴리스 문서를 확인할 수 있는 외부 저장소다.",
          href: "https://github.com/devswha/patina",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "이 문서 안에서 주요 기능 설명으로 이동한다.",
          href: "#features",
          label: "특징 문단",
          variant: "internal",
        },
        {
          description: "작성되지 않은 문서 링크의 색상 상태를 보여 주는 예시다.",
          href: "/w/patina%2Fmissing-page",
          label: "없는 문서 예시",
          variant: "missing",
        },
      ],
    },
    {
      id: "features",
      title: "특징",
      body: [
        "기본 실행은 문장을 재작성하지만, audit과 score 모드에서는 어떤 패턴이 잡혔는지만 확인할 수 있다. diff 모드는 바뀐 지점을 비교하고, ouroboros 모드는 점수와 의미 보존 조건이 수렴할 때까지 반복 교정을 시도한다.",
        "Claude Code, Codex CLI, Cursor, OpenCode용 스킬로 붙일 수 있고, 독립형 Node.js CLI로도 쓸 수 있다. 로그인된 codex, claude, gemini CLI가 있으면 별도 API 키 없이 로컬 CLI 백엔드로 실행할 수 있다는 점도 README에서 강조한다.",
        "2026-07-03 v6.1.0 릴리스는 persona safety gate를 enforce 모드로 올리고, ko/en/zh/ja persona 실행과 custom voice authoring을 추가한 persona hardening 릴리스로 정리된다.",
        "브라우저 playground는 설치 없이 점검할 수 있는 표면이지만, README 기준으로는 탐지 전용이다. 사용자의 글을 외부 LLM에 맡겨 재작성하는 구조가 아니라, 브라우저 안에서 문체 통계와 패턴 신호를 보는 쪽이다.",
      ],
      table: {
        caption: "patina 기능 요약",
        headers: ["모드", "표면", "용도"],
        rows: [
          ["audit", "CLI / skill", "문장 표면의 AI풍 패턴을 먼저 표시한다."],
          ["rewrite", "CLI / skill", "의미 앵커를 유지하면서 문장을 다시 쓴다."],
          ["score", "CI / report", "문서 품질 게이트에 쓸 수 있는 점수를 낸다."],
        ],
      },
    },
    {
      id: "structure",
      title: "구조",
      body: [
        "프로젝트는 패턴 팩, 프로필, 스코어링, 스타일로메트리, 재작성 백엔드, 벤치마크 문서로 나뉜다. 패턴 팩은 언어 접두사로 자동 탐색되며, 프로필은 blog, academic, technical, release-notes, namuwiki처럼 출력 톤을 조절한다.",
        "namuwiki 프로필은 한국어 전용 위키풍 설명을 만들기 위한 license-safe 가이드다. 실제 나무위키 문장을 복사하는 것이 아니라, 표제어 정의, 짧은 사족, 산문과 목록의 혼합 같은 문체 방향만 잡는다.",
        "PATTERNS.md는 현재 4개 언어에 걸친 168개 pattern entries를 문서화한다. 다만 한국어 README 일부 표는 160개 표기를 남기고 있어, 패턴 수를 인용할 때는 PATTERNS.md와 릴리스 시점을 같이 확인하는 편이 안전하다.",
      ],
    },
    {
      id: "usage",
      title: "사용법",
      body: [
        "스킬 설치는 install.sh를 통해 Claude Code, Codex CLI, Cursor, OpenCode에 연결하는 방식이 기본으로 안내된다. 독립형 CLI는 npx patina-cli init --defaults, npx patina-cli doctor, npx patina-cli --lang ko input.txt 흐름으로 시작할 수 있다.",
        {
          items: [
            "언어와 프로필을 고른다. 예를 들어 --lang ko, --profile namuwiki, --tone auto처럼 지정한다.",
            "audit이나 score로 의심 구간을 확인한다. 곧바로 rewrite하기보다 근거를 먼저 보는 흐름이 안전하다.",
            "rewrite는 의미 앵커를 확인한 뒤 적용한다. 주장, 수치, 긍부정, 인과관계가 보존되는지 다시 점검한다.",
          ],
          kind: "list",
          label: "patina 사용 흐름",
        },
        "CI에서는 --score --exit-on 값으로 prose gate를 걸 수 있고, GitHub Action 예시도 README에 포함되어 있다. 프로젝트 문서를 다듬는 도구로 쓸 때는 사람이 검토하는 후편집 흐름과 함께 쓰는 편이 patina의 문서와 윤리 가이드에 더 잘 맞는다.",
      ],
      cards: [
        {
          body: "문장을 바꾸기 전에 의심 패턴과 근거를 확인하는 진단 중심 흐름이다.",
          href: "#features",
          linkLabel: "특징 보기",
          title: "감사 모드",
        },
        {
          body: "의미 보존 조건을 유지하면서 과한 AI풍 표현을 줄이는 기본 사용 흐름이다.",
          href: "#limits",
          linkLabel: "한계 보기",
          title: "재작성 모드",
        },
        {
          body: "문서나 PR에서 prose gate를 걸 때 쓰기 좋은 점수화 흐름이다.",
          href: "#benchmarks",
          linkLabel: "벤치마크 보기",
          title: "스코어 모드",
        },
      ],
    },
    {
      id: "benchmarks",
      title: "벤치마크",
      body: [
        "README는 2026-05-22 최신 모델 리베이스라인에서 KO+EN 기준 편집 핫스팟 catch 67.3%와 사람 글 컨트롤 오탐 16.0%를 제시한다. 이 수치는 일반 탐지기 성능표라기보다, 편집할 구간을 얼마나 잡아내는지에 대한 프로젝트 내부 기준에 가깝다.",
        "체크인된 suspect-zone 벤치마크의 latest.md는 2026-06-03 생성 리포트에서 39개 fixture, 4개 언어, 전체 정확도 100.0%를 기록한다. 하지만 문서 자신도 이 결과가 작은 fixture corpus에 대한 회귀 체크일 뿐, 실제 글의 작성자를 판정하는 증거는 아니라고 선을 긋는다.",
      ],
    },
    {
      id: "limits",
      title: "용도와 한계",
      body: [
        "patina는 출처 판별기가 아니라 편집 보조 도구다. 점수는 표면 패턴을 고치기 위한 신호로 읽어야 한다.",
        {
          items: [
            "출처 판별기처럼 쓰지 않는다. 누가 AI를 썼는지 증명하는 근거가 아니다.",
            "학업 규정 회피, AI 사용 고지 우회, 표절 세탁, detector-bypass 보장에는 쓰지 않는다.",
            "사람다운 문장이라는 표현은 의미 보존 후편집 범위 안에서만 해석한다.",
          ],
          kind: "list",
          label: "patina 사용 제한",
        },
        "허용되는 쪽은 AI 사용이 허용된 초안의 후편집, audit trail, voice preservation, 오탐 검토, 기여자 연구다. patina가 해주는 것은 글쓴이의 의미를 보존하면서 과한 AI풍 포장을 덜어내는 일이지, 글의 출처나 윤리 상태를 바꿔 주는 일이 아니다.",
      ],
    },
  ],
} satisfies WikiArticle;
