import type { WikiArticle } from "./types";

export const lazycodexArticle = {
  slug: "code-yeongyu/lazycodex",
  title: "lazycodex",
  modifiedAt: "2026-07-01T01:01:21.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "Codex 확장", path: "/w/category/codex-extension" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
  ],
  summary:
    "LazyCodex는 OmO를 Codex용 에이전트 도구로 설치하는 배포 레포이며, project memory, planning, orchestration, execution, verified completion을 한 번에 묶는다.",
  image: {
    src: "https://raw.githubusercontent.com/code-yeongyu/lazycodex/main/.github/assets/lazycodex-logo.png",
    alt: "lazycodex repository logo",
  },
  infobox: [
    {
      label: "Owner",
      value: "code-yeongyu",
      valueHref: "https://github.com/code-yeongyu",
    },
    {
      label: "Repository",
      value: "lazycodex",
      valueHref: "https://github.com/code-yeongyu/lazycodex",
    },
    { label: "Primary language", value: "TypeScript" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/code-yeongyu/lazycodex/blob/main/LICENSE",
    },
    {
      label: "Homepage",
      value: "lazycodex.ai",
      valueHref: "https://lazycodex.ai",
    },
    {
      label: "Related project",
      value: "oh-my-openagent",
      valueHref: "https://github.com/code-yeongyu/oh-my-openagent",
    },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/code-yeongyu/lazycodex" },
        { label: "공식 사이트", href: "https://lazycodex.ai" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "배포 레포",
      body: [
        "LazyCodex는 OmO(oh-my-openagent)를 Codex에서 바로 쓰기 좋게 포장한 배포 레포다. README의 표현을 빌리면 복잡한 코드베이스를 위한 규율 에이전트 도구이며, 프로젝트 메모리, 계획, 실행, 검증 완료를 Codex 안에 붙이는 쪽에 초점을 둔다.",
        "이름은 LazyVim이 lazy.nvim을 다루기 쉽게 만든 구도를 Codex 쪽으로 옮긴 것에 가깝다. 핵심 엔진을 새로 설명하기보다, OmO의 명령과 스킬, 훅, 모델 라우팅을 한 번에 설치하는 입구 역할을 맡는다.",
      ],
      links: [
        {
          description: "프로젝트 소스, README, 릴리스 정보를 확인할 수 있는 외부 저장소다.",
          href: "https://github.com/code-yeongyu/lazycodex",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "공식 사이트와 문서로 이어지는 외부 링크다.",
          href: "https://lazycodex.ai",
          label: "lazycodex.ai",
          variant: "external",
        },
        {
          description: "이 문서 안에서 설치와 명령 설명으로 이동한다.",
          href: "#commands",
          label: "명령 문단",
          variant: "internal",
        },
        {
          description: "LazyCodex가 위임하는 OmO/OpenAgent 계열 본체 문서다.",
          href: "/w/code-yeongyu%2Foh-my-openagent",
          label: "oh-my-openagent",
          variant: "internal",
        },
      ],
    },
    {
      id: "commands",
      title: "설치 진입점",
      body: [
        "설치 표면은 매우 좁다. README는 전역 설치나 npm i -g 대신 npx lazycodex-ai install 한 줄을 기본 경로로 제시한다. 완전 자율형, no-TUI 설정이 필요하면 --no-tui와 --codex-autonomous 옵션을 붙이는 흐름도 함께 안내한다.",
        "bin/lazycodex-ai.js는 자체 구현을 오래 끌고 가지 않는다. install 명령을 받으면 npx --yes --package oh-my-openagent omo install --platform=codex 형태로 넘기고, 그 외 인자는 omo 명령으로 전달하는 얇은 shim에 가깝다.",
        "2026-07-01 v4.14.2 릴리스는 oh-my-openagent v4.14.2에서 Codex Light marketplace payload를 동기화한 배포다. 직전 v4.14.1과 비교한 marketplace sync로 기록되어 있다.",
      ],
      table: {
        caption: "LazyCodex 핵심 명령",
        headers: ["명령", "성격", "용도"],
        rows: [
          ["$ulw-plan", "계획", "구현 전 요구사항과 결정을 정리하고 계획 파일을 만든다."],
          ["$start-work", "실행", "준비된 계획을 Boulder 진행 상태와 함께 끝까지 수행한다."],
          ["$ulw-loop", "검증 루프", "열린 과제를 증거 기반으로 계속 밀고 가며 완료 상태를 확인한다."],
        ],
      },
    },
    {
      id: "structure",
      title: "OmO 위임 구조",
      body: [
        "레포 구조상 LazyCodex는 얇은 배포층이다. 루트에는 npm 패키지와 installer shim이 있고, src는 oh-my-openagent 서브모듈을 가리킨다. plugins/omo에는 Codex용 단일 플러그인 manifest, hooks, skills, components가 묶여 있다.",
        "웹 쪽은 packages/web 아래에 있다. README 기준으로 Next.js 15, Tailwind v4, opennextjs-cloudflare 조합이며 lazycodex.ai 배포를 위한 Cloudflare Workers 설정과 e2e 테스트가 들어 있다.",
        "따라서 lazycodex를 단순 CLI 패키지로만 보면 실제 역할을 작게 보게 된다. npm alias, Codex plugin bundle, OmO 서브모듈, 문서 사이트가 한 레포 안에서 같은 설치 경험을 구성한다.",
        "plugins/omo 폴더에는 manifest와 함께 hooks.json이 들어가, Codex가 세션 시작이나 종료 같은 시점에 무엇을 실행할지 한 파일에서 읽는다.",
        "설치가 zero-config를 지향하는 것도 이 구조 덕이다. 사용자가 설정 파일을 손으로 짜지 않아도 번들에 담긴 기본값이 그대로 붙는다.",
      ],
    },
    {
      id: "features",
      title: "플러그인 묶음",
      body: [
        "README가 앞에 세우는 기능은 init-deep, ulw-plan, start-work, ulw-loop다. init-deep는 큰 레포 안에 계층형 AGENTS.md 지식을 만들고, ulw-plan은 구현 전에 결정 가능한 계획을 적는다. start-work는 그 계획을 실행하고, ulw-loop는 검증이 끝날 때까지 작업을 반복하는 명령이다.",
        "스킬 레이어도 중요한 부분이다. review-work, remove-ai-slops, frontend-ui-ux, programming, LSP, AST-grep, rules, comment-checker 같은 specialist 기능을 명령 표면 뒤에 붙여 둔다.",
        "OmO README에 있는 telemetry 설명도 레포의 성격을 보여 준다. Codex SessionStart 훅에서 익명 daily active 이벤트를 보낼 수 있지만, prompt, transcript, source file, file path, access token, hostname 같은 민감 정보는 보내지 않는다고 밝힌다. 환경 변수로 opt-out도 가능하다.",
      ],
      cards: [
        {
          body: "대형 레포에서 다음 agent가 길을 잃지 않도록 지역별 AGENTS.md 문맥을 만든다.",
          href: "#features",
          linkLabel: "기능 보기",
          title: "프로젝트 메모리",
        },
        {
          body: "계획 수립과 실행을 분리해, 애매한 요구사항을 바로 코드로 밀어 넣지 않게 한다.",
          href: "#commands",
          linkLabel: "명령 보기",
          title: "계획 후 실행",
        },
        {
          body: "상태 보고보다 실제 증거와 QA를 기준으로 작업 완료를 판단하려는 흐름이다.",
          href: "#limits",
          linkLabel: "한계 보기",
          title: "검증 완료",
        },
      ],
    },
    {
      id: "position",
      title: "문서 사이트",
      body: [
        "LazyCodex의 직접 경쟁 대상은 일반 문서 생성기나 단순 Codex 설정 파일이 아니다. 목표는 Codex 위에 팀형 규율 에이전트를 얹어, 계획자, 실행자, 검토자, 도구 레이어가 같은 규칙으로 움직이게 하는 것이다.",
        "정리하면 LazyCodex는 zero-config 설치로 규율 에이전트 묶음을 Codex 위에 얹는 입구이고, 실제 동작은 OmO 번들과 hooks.json 선언을 따라간다.",
        "README는 모델 라우팅도 주요 차별점으로 설명한다. 모든 작업을 항상 가장 무거운 모델로 보내는 대신, 빠른 작업과 깊은 추론 작업을 구분해 적절한 모델 체인을 고르는 설계라는 주장이다.",
      ],
    },
    {
      id: "limits",
      title: "맞는 사용처",
      body: [
        "LazyCodex는 Codex 사용 방식을 자동화하고 강하게 구조화하는 도구다. 그래서 단발성 질문이나 작은 수정에는 설정 비용과 명령 체계가 오히려 무겁게 느껴질 수 있다.",
        "또한 핵심 구현 상당 부분은 oh-my-openagent 서브모듈과 OmO 플러그인 번들에 걸려 있다. lazycodex 레포만 보고 전체 동작을 판단하기보다는, 설치가 실제로 가져오는 OmO 구성과 Codex 환경까지 함께 봐야 한다.",
        {
          items: [
            "큰 레포: 계층형 AGENTS.md와 프로젝트 메모리가 필요한 경우.",
            "장기 작업: 계획, 실행, 검토를 여러 턴에 걸쳐 이어 가야 하는 경우.",
            "검증 기준이 중요한 작업: 증거, QA, 리뷰 통과가 완료 조건인 경우.",
          ],
          kind: "list",
          label: "LazyCodex 주요 사용처",
        },
        "반대로 단순한 한 파일 수정이나 설명 요청이라면 일반 Codex 흐름만으로 충분할 수 있다.",
      ],
    },
  ],
} satisfies WikiArticle;
