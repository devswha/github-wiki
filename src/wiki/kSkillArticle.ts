import type { WikiArticle } from "./types";

export const kSkillArticle = {
  slug: "NomaDamas/k-skill",
  title: "k-skill",
  modifiedAt: "2026-07-07T03:03:18.000Z",
  categories: [
    { label: "AI 에이전트 도구", path: "/w/category/ai-agent-tool" },
    { label: "Claude Code 확장", path: "/w/category/claude-code-extension" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "k-skill은 NomaDamas가 만든 한국인용 코딩 에이전트 스킬 모음집이다. SRT·KTX 예매부터 날씨·미세먼지, 법령·등기·DART, 쿠팡·당근·올리브영, KBO·LCK, HWP 편집까지 100개 넘는 한국 생활·공공·업무 스킬을 Claude Code·Codex·OpenCode 같은 에이전트에 한 번에 붙인다.",
  image: {
    src: "https://raw.githubusercontent.com/NomaDamas/k-skill/main/docs/assets/k-skill-thumbnail.png",
    alt: "k-skill 썸네일",
  },
  infobox: [
    {
      label: "Owner",
      value: "NomaDamas",
      valueHref: "https://github.com/NomaDamas",
    },
    {
      label: "Repository",
      value: "k-skill",
      valueHref: "https://github.com/NomaDamas/k-skill",
    },
    { label: "Primary language", value: "JavaScript" },
    {
      label: "License",
      value: "MIT",
      valueHref: "https://github.com/NomaDamas/k-skill/blob/main/LICENSE",
    },
    {
      label: "Homepage",
      value: "k-skill.nomadamas.org",
      valueHref: "https://k-skill.nomadamas.org",
    },
    {
      label: "Links",
      links: [
        { label: "GitHub", href: "https://github.com/NomaDamas/k-skill" },
        { label: "공식 사이트", href: "https://k-skill.nomadamas.org" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "한국인용 스킬 모음집",
      body: [
        "README는 k-skill을 '한국인이면 언젠가 무조건 쓸' 스킬 모음집으로 소개한다. SRT·KTX·KBO·로또·당근·쿠팡·카톡·정부24·홈택스처럼 귀찮은 한국 생활·업무를 AI 에이전트에게 맡기는 것이 목적이다.",
        "지원 대상은 특정 도구 하나가 아니다. Claude Code, Codex, OpenCode, OpenClaw/ClawHub 등 여러 코딩 에이전트에 붙는 형태이며, 별도 클라이언트 API 레이어 없이 필요하면 k-skill-proxy 같은 프록시 서버에 HTTP 요청만 넣으면 된다고 설명한다.",
      ],
      links: [
        {
          description: "스킬 목록과 설치·보안 정책 문서를 담은 저장소다.",
          href: "https://github.com/NomaDamas/k-skill",
          label: "GitHub 저장소",
          variant: "external",
        },
        {
          description: "설치 방법을 지원하는 기반 코딩 에이전트 문서다.",
          href: "/w/anthropics%2Fclaude-code",
          label: "claude-code",
          variant: "internal",
        },
        {
          description: "함께 지원되는 또 다른 기반 코딩 에이전트 문서다.",
          href: "/w/openai%2Fcodex",
          label: "codex",
          variant: "internal",
        },
      ],
    },
    {
      id: "install",
      title: "설치와 호출",
      body: [
        "Claude Code에서는 마켓플레이스로 전체 스킬을 한 번에 설치할 수 있다. /plugin marketplace add NomaDamas/k-skill 로 마켓플레이스를 등록하고 /plugin install k-skill@k-skill 로 설치하는 흐름이다.",
        "설치하면 스킬은 /k-skill:<스킬 이름> 네임스페이스로 호출된다. 예를 들어 로또 결과는 /k-skill:lotto-results 다. 개별 디렉터리 수동 설치나 다른 에이전트 설치는 저장소의 설치 문서를 따른다.",
        "설치 후에는 k-skill-setup 스킬로 credential 확보와 환경변수 확인을 진행하고, 시크릿이 비어 있으면 공통 설정·보안 정책 문서의 credential resolution order로 채운다. 안 쓰는 스킬은 k-skill-cleaner가 트리거 통계를 근거로 삭제 후보를 추천한다.",
      ],
      table: {
        caption: "k-skill 설치·운영 명령",
        headers: ["단계", "명령 / 스킬"],
        rows: [
          ["마켓플레이스 등록", "/plugin marketplace add NomaDamas/k-skill"],
          ["설치", "/plugin install k-skill@k-skill"],
          ["스킬 호출", "/k-skill:<스킬 이름> (예: /k-skill:lotto-results)"],
          ["초기 설정", "k-skill-setup (credential·환경변수 확인)"],
          ["정리", "k-skill-cleaner (사용 통계 기반 삭제 후보 추천)"],
        ],
      },
    },
    {
      id: "skills-map",
      title: "스킬 지도",
      body: [
        "스킬은 한국 생활 전반을 넓게 덮는다. 교통·예매, 생활·행정, 공공·법률, 사업자·조달, 쇼핑·가격비교, 스포츠, 문서(HWP), 한국어 처리, 금융·주식까지 100개가 넘는 스킬이 카테고리별로 문서화되어 있다.",
        "각 스킬 문서는 '사용자 로그인' 여부를 따로 표시한다. 사용자가 직접 로그인/시크릿을 들어야 하는 스킬(필요), 운영자 프록시 키로 도는 스킬(불필요), 사용자가 자기 키를 넣으면 더 풍부해지는 스킬(선택사항)로 나뉜다.",
      ],
      table: {
        caption: "k-skill 스킬 카테고리 예시",
        headers: ["영역", "스킬 예시"],
        rows: [
          ["교통·예매", "srt-booking, ktx-booking, express-bus-booking, korean-transit-route"],
          ["생활·행정", "korea-weather, fine-dust-location, seoul-subway-arrival, household-waste-info"],
          ["공공·법률", "korean-law-search, iros-registry-automation, k-dart, korean-patent-search"],
          ["사업자·실사", "nts-business-registration, biz-health-check, g2b-order-plan-search"],
          ["쇼핑·중고", "coupang-product-search, naver-shopping-search, daangn-used-goods-search, olive-young-search"],
          ["스포츠", "kbo-results, kbl-results, kleague-results, lck-analytics"],
          ["문서(HWP)", "hwp, rhwp-edit, rhwp-advanced"],
          ["한국어 처리", "korean-spell-check, korean-humanizer, korean-character-count"],
        ],
      },
    },
    {
      id: "operation",
      title: "시크릿과 운영 원칙",
      body: [
        "인증이 필요한 스킬은 사용자 본인의 로그인·시크릿을 전제로 하고, 무료 공개 API는 k-skill-proxy 같은 운영자 프록시를 경유한다. 결제나 제출이 걸린 스킬(등기부등본, 지급명령, 예매 등)은 결제 직전 handoff로 멈추고 실제 결제·제출은 사용자가 수동으로 한다.",
        "README는 GitHub star도 사용자 동의가 있을 때만 gh repo star NomaDamas/k-skill 로 실행하고, 에이전트가 자동으로 누르지 말라고 명시한다. 즉 자동화하되 결제·발신·스타 같은 되돌리기 어려운 행동은 사람 확인을 남겨 두는 설계다.",
      ],
    },
  ],
} satisfies WikiArticle;
