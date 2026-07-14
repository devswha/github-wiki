import type { WikiArticle } from "./types";

export const trendingRepositoriesArticle = {
  slug: "Github.wiki/trending-repositories",
  title: "트렌딩 저장소 조사",
  modifiedAt: "2026-07-14T01:05:00.000Z",
  categories: [
    { label: "Github.wiki", path: "/w/category/github-wiki" },
    { label: "저장소 문서", path: "/w/category/repository-article" },
    { label: "트렌딩", path: "/w/category/trending" },
    { label: "개발 워크플로우", path: "/w/category/developer-workflow" },
  ],
  summary:
    "Github.wiki에서 주기적으로 살펴볼 만한 AI 에이전트, 개발 도구, 문서화 관련 GitHub 저장소 후보를 정리한 운영 문서다.",
  infobox: [
    { label: "Owner", value: "github-wiki", valueHref: "https://github.com/devswha/github-wiki" },
    {
      label: "Repository",
      value: "trending-repositories",
      valueHref: "https://github.com/devswha/github-wiki",
    },
    { label: "Primary language", value: "TypeScript / Markdown data" },
    { label: "License", value: "Wiki content" },
    {
      label: "Links",
      links: [
        { label: "GitHub search", href: "https://github.com/search?q=topic%3Aai-agent+stars%3A%3E1000+pushed%3A%3E2026-06-01&type=repositories&s=stars&o=desc" },
        { label: "github-wiki", href: "https://github.com/devswha/github-wiki" },
      ],
      value: "",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "개요",
      body: [
        "이 문서는 Github.wiki의 자동 유지보수 루프가 새 저장소 문서 후보를 고를 때 참고하는 관찰 목록이다. 실시간 순위표가 아니라, 2026-07-14 기준 GitHub 검색 결과에서 위키 주제와 맞는 저장소를 추려 둔 운영 메모에 가깝다.",
        "선정 기준은 별 수만이 아니라 Github.wiki의 기존 문서 축인 AI 에이전트, 개발 워크플로우, 문서화 도구와의 관련성이다. 시스템 프롬프트 덤프처럼 공개 재배포 리스크가 큰 저장소는 후보에서 제외한다.",
      ],
    },
    {
      id: "agent-tools",
      title: "AI 에이전트와 개발 도구 후보",
      body: [
        "2026-07-14에 GitHub repositories search API로 topic:ai-agent, topic:developer-tools, agentic coding 쿼리를 확인했다. 아래 저장소들은 최근 pushed 조건과 별 수 기준을 통과했고, 기존 oh-my-* / lazycodex 계열 문서와 같이 읽을 만한 후보로 보인다.",
      ],
      table: {
        caption: "AI 에이전트 / 개발 도구 후보",
        headers: ["저장소", "언어", "관찰 포인트"],
        rows: [
          ["NousResearch/hermes-agent", "Python", "skills, memory, tools를 묶은 개인 에이전트 런타임 계열이다."],
          ["OpenHands/OpenHands", "Python", "AI-driven development를 전면에 둔 오픈소스 코딩 에이전트다."],
          ["daytonaio/daytona", "TypeScript", "AI 생성 코드 실행용 보안 인프라라는 포지션이 강하다."],
          ["anomalyco/opencode", "TypeScript", "오픈소스 코딩 에이전트 계열이라 기존 OpenCode 확장 문서와 연결된다."],
          ["obra/superpowers", "Shell", "agentic skills framework와 개발 방법론을 표방한다."],
          ["addyosmani/agent-skills", "JavaScript", "AI coding agent용 engineering skill 묶음이라 skill 기반 워크플로우 문서와 맞닿는다."],
          ["rtk-ai/rtk", "Rust", "개발 명령을 LLM-friendly하게 줄이는 CLI proxy로, 토큰 절감형 개발 자동화 후보에 가깝다."],
          ["thedotmack/claude-mem", "JavaScript", "여러 coding agent에 걸친 persistent context 도구라 메모리/세션 연속성 축에서 볼 만하다."],
        ],
      },
      links: [
        {
          description: "topic:ai-agent, stars:>1000, pushed:>2026-07-01 조건으로 확인한 검색 결과다.",
          href: "https://github.com/search?q=topic%3Aai-agent+stars%3A%3E1000+pushed%3A%3E2026-07-01&type=repositories&s=stars&o=desc",
          label: "AI agent 검색",
          variant: "external",
        },
        {
          description: "developer-tools 주제에서 최근 갱신된 대형 저장소를 확인한 검색 결과다.",
          href: "https://github.com/search?q=topic%3Adeveloper-tools+stars%3A%3E5000+pushed%3A%3E2026-07-01&type=repositories&s=stars&o=desc",
          label: "developer tools 검색",
          variant: "external",
        },
      ],
    },
    {
      id: "documentation-tools",
      title: "문서화 도구 후보",
      body: [
        "문서화 축에서는 Storybook, Mermaid, Docusaurus, AppFlowy, tldr-pages가 반복적으로 상위권에 잡힌다. Github.wiki가 저장소 설명 위키라는 점을 고려하면, 문서 생성이나 지식 정리 경험을 비교하는 문서 후보로 쓸 수 있다.",
      ],
      table: {
        caption: "문서화 관련 후보",
        headers: ["저장소", "언어", "관찰 포인트"],
        rows: [
          ["storybookjs/storybook", "TypeScript", "컴포넌트 문서화와 테스트 워크숍 표준에 가깝다."],
          ["mermaid-js/mermaid", "TypeScript", "텍스트 기반 다이어그램 문법으로 개발 문서와 잘 맞는다."],
          ["facebook/docusaurus", "TypeScript", "정적 문서 사이트 생성 도구로 위키형 문서와 비교하기 좋다."],
          ["AppFlowy-IO/AppFlowy", "Dart", "AI 협업 워크스페이스와 오픈소스 Notion 대안 포지션이다."],
          ["tldr-pages/tldr", "Markdown", "콘솔 명령 치트시트 지식베이스로 짧은 문서 구조 참고가 된다."],
        ],
      },
      links: [
        {
          description: "topic:documentation, stars:>1000, pushed:>2026-07-01 조건으로 확인한 검색 결과다.",
          href: "https://github.com/search?q=topic%3Adocumentation+stars%3A%3E1000+pushed%3A%3E2026-07-01&type=repositories&s=stars&o=desc",
          label: "documentation 검색",
          variant: "external",
        },
      ],
    },
    {
      id: "maintenance-notes",
      title: "운영 메모",
      body: [
        "이 목록은 바로 개별 문서로 승격하기보다, 위키의 방향과 맞는 후보를 모으는 staging page로 둔다. 다음 자동 점검에서는 기존 후보가 계속 갱신되는지, README와 라이선스가 문서화에 충분한지, 위키 독자가 얻을 정보가 있는지를 다시 본다.",
        {
          items: [
            "기존 위키 범위와 맞는 AI coding agent, CLI, documentation repo를 우선한다.",
            "별 수와 최근 pushed 신호만으로 문서를 만들지 않는다. README, release, license 근거가 있어야 한다.",
            "프롬프트 덤프, 키/보안 우회, 라이선스가 애매한 재배포성 콘텐츠는 후보에서 제외한다.",
          ],
          kind: "list",
          label: "승격 기준",
        },
      ],
    },
  ],
} satisfies WikiArticle;
