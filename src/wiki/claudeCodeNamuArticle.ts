import type { WikiArticle } from "./types";

// 나무위키 'Claude Code' 문서에서 가져와 편집(광고 제거·발췌)한 전환본.
// 원본 자체 집필본은 ./claudeCodeArticle.ts 에 보존됨(언제든 되돌리기 가능).
export const claudeCodeNamuArticle = {
  slug: "anthropics/claude-code",
  title: "claude-code",
  modifiedAt: "2026-07-07T00:00:00.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "CLI 도구", path: "/w/category/cli-tool" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "프로그래밍을 주 목적으로 하는 Claude 모델의 TUI 인터페이스. (나무위키 'Claude Code' 문서에서 가져옴)",
  image: {
    src: "https://raw.githubusercontent.com/anthropics/claude-code/main/demo.gif",
    alt: "Claude Code 데모",
  },
  infobox: [
    { label: "Owner", value: "anthropics", valueHref: "https://github.com/anthropics" },
    {
      label: "Repository",
      value: "claude-code",
      valueHref: "https://github.com/anthropics/claude-code",
    },
    { label: "Primary language", value: "Python / TypeScript" },
    { label: "License", value: "미표기 (Anthropic, 소스 공개)" },
    {
      label: "Homepage",
      value: "code.claude.com/docs",
      valueHref: "https://code.claude.com/docs/en/overview",
    },
    { label: "npm", value: "@anthropic-ai/claude-code" },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/anthropics/claude-code" },
        { label: "공식 문서", href: "https://code.claude.com/docs/en/overview" },
      ],
      value: "",
    },
  ],
  attribution: {
    source: "나무위키",
    sourceUrl: "https://namu.wiki/w/Claude%20Code",
    license: "CC BY-NC-SA 2.0 KR",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/2.0/kr/",
    retrievedAt: "2026-07-07",
  },
  sections: [
    {
      id: "overview",
      title: "개요",
      body: ["프로그래밍을 주 목적으로 하는 Claude 모델의 TUI 인터페이스."],
    },
    {
      id: "features",
      title: "특징",
      body: [
        "터미널에서 claude 명령을 통해 CWD를 프로젝트로 열 수 있으며, 프롬프트를 먹이면 해당 환경에서 즉시 코드를 작성 및 수정할 수 있다. 일반적인 파일 시스템에 그대로 작성되므로 별도의 텍스트 에디터에서 사용자가 수동으로 내용을 수정할 수도 있으며 특정 부분을 프롬프트로 수정해달라 요청할 수도 있다. 기존 파일을 일부만 수정하는 경우 diff를 함께 보여준다. 보통 API를 통해 CLI로 터미널에 통합할 수 있으므로, 이를 외부 확장프로그램으로 만들어져 Visual Studio Code 등과 같은 IDE에서도 사용 가능하다. Claude의 코딩 성능이 LLM 모델 최상위권이어서 바이브 코딩에 많이 사용되고 있다. 실험적이긴 하지만 자체 오케스트레이터인 클로드 팀을 직접 활성화하여 주어진 과제에 대하여 클로드가 스스로 팀을 구성하여 업무 흐름을 구성하는 하네스 엔지니어링 방법론을 스스로 구체화하여 목표 달성을 도모할 수 있다. 팀으로 움직이는 만큼 압도적인 토큰 소모가 단점이지만, 자체적인 하네스 엔지니어링 지원으로 실험 기능인데도 불구하고 많은 조직 개발자들이 Claude Code를 선호하는 이유이기도 하다. 현재 AGENTS.md를 지원하지 않고, CLAUDE.md에서 global instruction을 로드한다.",
      ],
    },
    {
      id: "evaluation",
      title: "평가",
      body: [
        "성능에서는 현재 바이브 코딩 도구에서 독보적인 선두로 평가 받는다. SubAgent, Skills 등 개발에 최적화된 기능이 빠르게 업데이트되었고, MCP 연결도 부드러운 편이다. 에이전트 자체도 동종의 서비스 중에서는 그나마 가장 안정적인 편이고, 코딩을 시작하기 전 Claude가 뭘 할지 어느 정도 알 수 있는 계획 모드의 추가 역시 좋은 편이다. 개인 단위 프로젝트뿐만 아니라 팀 단위 프로덕션 환경의 실험에도 가장 먼저 선택받는 분위기다. 실사용자 평가 기준 별점 다섯 개를 가득 채운 수준으로, 터미널 환경에만 익숙하다면 가장 먼저 고민해 볼 선택지다.",
      ],
    },
    {
      id: "claude-web",
      title: "Claude Web",
      body: [
        "Claude 웹 및 데스크톱 앱에서도 Claude Code를 사용할 수 있게 되었다. 무엇보다 중요한 건, 비록 깃허브 전용이지만 그래도 Claude 웹에서 쓸 수 있다는 것이 굉장히 크다는 점이다. 막말로 모바일에서도 본격적인 바이브 코딩을 할 수 있게 되었다. 데스크톱 앱에서는 로컬 환경에서도 돌릴 수 있게 되었다.",
      ],
    },
    {
      id: "comparison",
      title: "경쟁 제품과의 비교",
      body: [
        "직접적인 경쟁자로는 CLI와 GUI를 전부 지원하면서 Claude Code와 거의 유사한 경험의 서비스를 제공하고 있는 Codex가 있다. 앱에 대해서는 비슷하거나 Codex가 우위라는 평가도 나오지만, 웹의 경우 Claude Code가 명백히 우위이다. 구글의 경우에는 CLI 에이전트로 Gemini CLI를, GUI 서비스로 Antigravity를 갖추고 있다는 점에서 플랫폼은 분리되었으나 종합적인 경쟁구도다. GUI 인터페이스를 지원하는 경쟁 서비스는 Cursor, GitHub Copilot, Windsurf 등이 있는데, 이들은 IDE에다 LLM을 붙인 구조여서 CLI 에이전트와는 쓰임새가 다르다. Claude Code는 로컬 파일에 직접 접근하여 파일을 전체적으로 관리하는 방식이라면, 이들은 IDE 기반으로 특정 프로젝트를 수행하는 것에 특화된 기능을 갖추고 있다. 마찬가지로 Lovable, Replit, Bilt, Base44 등의 앱빌더들도 LLM이 붙은 바이브코딩을 제공한다는 점에서 경쟁사로 묶이지만, 쓰임새 자체는 다르다.",
      ],
    },
    {
      id: "pricing",
      title: "요금제",
      body: [
        "여타 서비스와 마찬가지로 유료 모델의 경우에도 한도 제한이 있으나, 해당 제한 사항이 횟수-토큰 단위로 명확한 cursor나 github copilot과 달리 claude는 시간에 따라 유동적이므로 사용 습관에 따라 타 서비스에 비해 더 사용 제한이 여유롭다고 느낄 수도, 부족하다고 느낄 수도 있다.",
      ],
    },
    {
      id: "source-leak",
      title: "소스 코드 유출 사태",
      body: [
        "2026년 3월 30일, 소스 코드가 유출되는 사태가 일어났다. 추측되는 원인으로, Claude Code는 Bun을 사용하는데, 빌드 시 기본적으로 .map 파일을 생성한다. 이 와중에 누군가 실수로 npm 배포 시 이를 잊어먹고 배포한 것으로 개발자들이 추정하고 있다. 이 맵 파일은 난독화되지 않은 타입스크립트 원본 소스 코드가 온전히 들어있는 R2 버킷을 가리키고 있었고, 이걸 귀신같이 찾은 어느 개발자가 커뮤니티에 공유하여 사건이 벌어진 것. 유출 사고를 통해, Claude Code의 명과 암이 드러났는데, AI 협업, ULTRAPLAN 같은 고급 플랜 모드 등 기대되는 기능들이 유출되었고, 해당 유출된 소스 코드 내지는 이를 바탕으로 다른 언어로 재작성했다고 주장하는 레포지토리들이 우후죽순 등장하기도 하였다.",
      ],
    },
  ],
} satisfies WikiArticle;
