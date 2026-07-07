import type { WikiArticle } from "./types";

// 나무위키 'Codex' 문서에서 가져와 편집(광고 제거·발췌)한 전환본.
// 원본 자체 집필본은 ./codexCliArticle.ts 에 보존됨(언제든 되돌리기 가능).
export const codexNamuArticle = {
  slug: "openai/codex",
  title: "codex",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "OpenAI가 2025년 5월 공개한 소프트웨어 엔지니어링 플랫폼. (나무위키 'Codex' 문서에서 가져옴)",
  image: {
    src: "https://raw.githubusercontent.com/openai/codex/main/.github/codex-cli-splash.png",
    alt: "Codex CLI 스플래시",
  },
  infobox: [
    { label: "Owner", value: "openai", valueHref: "https://github.com/openai" },
    {
      label: "Repository",
      value: "codex",
      valueHref: "https://github.com/openai/codex",
    },
    { label: "Primary language", value: "Rust" },
    {
      label: "License",
      value: "Apache-2.0",
      valueHref: "https://github.com/openai/codex/blob/main/LICENSE",
    },
    {
      label: "Homepage",
      value: "developers.openai.com/codex",
      valueHref: "https://developers.openai.com/codex",
    },
    { label: "npm", value: "@openai/codex" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/openai/codex" },
        { label: "공식 문서", href: "https://developers.openai.com/codex" },
      ],
      value: "",
    },
  ],
  attribution: {
    source: "나무위키",
    sourceUrl: "https://namu.wiki/w/Codex",
    license: "CC BY-NC-SA 2.0 KR",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/2.0/kr/",
    retrievedAt: "2026-07-07",
  },
  sections: [
    {
      id: "overview",
      title: "개요",
      body: [
        "OpenAI가 2025년 5월 공개한 소프트웨어 엔지니어링 플랫폼이다. 이름의 유래는 라틴어로 '책'을 뜻하는 cōdex다.",
      ],
    },
    {
      id: "history",
      title: "역사",
      body: [
        "2025년 5월 16일 공개 후 Pro, Team, Enterprise 사용자에게 즉시 제공되었다.",
        "6월 3일부터 Plus 사용자에게도 제공되었다. 출시 초창기 무제한으로 사용량을 제공했으나, 현재는 각 요금제 별로 사용한도가 지정되어 있다.",
        "2025년 9월 16일, Codex-1 모델이 GPT-5-Codex 모델로 업그레이드되었다.",
        "2025년 11월 14일, GPT-5.1의 출시에 맞춰 Codex 버전이 정식으로 공개되었다. 11월 19일에는 Extra-high 추론모드가 추가된 GPT-5.1-Codex-Max 모델이 공개됐다.",
        "2025년 12월 18일, 보안 취약점을 찾는 능력이 강화된 GPT-5.2-Codex 모델이 공개됐다. 이후 2026년 2월 5일 GPT-5.3-Codex, 2월 12일 GPT-5.3-Codex-Spark 모델이 이어서 공개됐다.",
        "2026년 3월에 공개된 GPT-5.4부터는 별도의 Codex 모델이 아니라 GPT-5.4 단일 모델을 이용하게 바뀌었다. GPT 범용 모델에 Codex의 코딩 특화 로직이 통합되었기 때문이며, 이때부터의 모델이 이론적 배경과 기술적 맥락을 더 잘 이해하면서 이전 코딩 특화 모델보다 코딩을 더 잘하고 디버깅 시 문제를 덮기보다 원인을 찾아 해결하는 쪽으로 바뀌어 Claude Code의 생산성을 능가하기 시작했다.",
        "2026년 6월 2일에 GPT-5.2와 GPT-5.3-Codex 모델이 제거되고 클라우드 모델이 GPT-5.5로 교체됐다.",
      ],
    },
    {
      id: "usage",
      title: "이용 방법",
      body: [
        "Codex는 Windows, Linux, macOS에서 CLI와 GUI(공식 앱, Visual Studio Code 확장)를 통해 이용할 수 있다. Plus 이상의 플랜에서 사용할 수 있고, 공식 웹에서는 클라우드 환경만 이용이 가능하다. 로컬 환경에서는 GitHub 리포지토리가 없어도 이용이 가능하지만 클라우드 환경을 사용하려면 리포지토리가 연동되어야 한다. 클라우드 환경에서는 작업별로 컨테이너 런타임이 할당되어 성능 저하 없이 동시에 여러 작업을 지시할 수 있고, 모든 작업 내용을 사용자가 추적·검토할 수 있다. 레포지토리 관련 작업은 AGENTS.md 파일로 동작 방식과 관습을 안내할 수 있다. 로컬 환경에서는 실행 권한·샌드박스 격리 설정이 가능하고 Windows에서는 WSL 2에서 작업할지 호스트 OS에서 작업할지 설정할 수 있다. ChatGPT와 앱 및 스킬 설정을 공유하며, Codex 전용 스킬을 추가하려면 공식 앱을 이용해야 한다.",
      ],
    },
    {
      id: "cli",
      title: "CLI",
      body: [
        "CLI 환경에서 실행할 수 있으며 macOS, Linux, Windows(PowerShell을 통해 설치)를 지원한다. Node.js 환경에서는 npm install -g @openai/codex로 간단히 설치할 수 있다. 실행 전 작업 디렉터리로 이동한 뒤 codex를 입력하면 실행되며, --model=[모델명] 옵션으로 모델을 지정할 수 있다. AGENTS.md 파일로 시스템 프롬프트를, ~/.codex/config.toml로 상세 설정을 지정할 수 있다. MCP 사용이 가능하고, 로컬에서 작동하는 만큼 명령어 실행, 파일 생성·수정·삭제는 물론 SVG 파일 생성까지 수행한다.",
      ],
    },
    {
      id: "surfaces",
      title: "공식 앱·웹·IDE 확장",
      body: [
        "공식 앱은 CLI의 기능을 GUI 형태로 쓸 수 있는 앱으로, 스킬 활성화/비활성화와 이미지 첨부가 가능하다.",
        "공식 웹은 클라우드 환경만 지원하므로 GitHub 리포지토리가 반드시 있어야 하며, 웹 버전에서만 PR 자동 리뷰 기능을 설정할 수 있다(다른 작업과 같이 크레딧 소비).",
        "Visual Studio Code 등 IDE에서는 확장 설치를 통해 GUI로 Codex CLI의 모든 기능을 사용할 수 있고 이미지 첨부가 가능하다.",
      ],
    },
    {
      id: "notes",
      title: "여담",
      body: [
        "Codex는 Claude Code에 비해 여러모로 '혜자' 소리를 듣고 있다. GUI 앱 실행 시 30일 유효기간의 한도 리셋 쿠폰을 자주 주고, 개발 총책임자 Tibo는 리셋 날짜가 도래하지 않았는데도 사용량을 자주 리셋해 준다.",
        "근본적으로 Codex는 ChatGPT와 한도가 별도로 주어진다는 점에서 Claude Code에 상당한 우위를 점한다. 또한 Claude Code는 한도를 소진하면 진행 중인 작업도 중단되지만, Codex는 그 시점에 처리 중이던 작업은 무조건 마무리한다.",
        "로컬 환경에서는 고속 옵션을 선택할 수 있는데, 작업 속도가 1.5배 빨라지지만 사용량 소진 속도도 일반 옵션 대비 1.5~3배 빨라질 수 있어 주의해야 한다.",
        "한도가 분리된 만큼 설계·프롬프트 작성은 ChatGPT로, 실제 코딩·테스팅은 Codex로 하는 식으로 둘을 오가는 게 권장된다. 에이전틱 코딩에서는 컨텍스트에 따라 판단 기준이 달라지므로 최소 두 개 이상의 AI 세션을 쓰는 것이 좋고, Codex 클라우드의 PR 리뷰가 이때 빛을 발한다.",
      ],
    },
  ],
} satisfies WikiArticle;
