import type { HomePanel, WikiArticle } from "./types";
import { gajaeCodeArticle } from "./gajaeCodeArticle";
import { claudeCodeArticle } from "./claudeCodeArticle";
import { codexCliArticle } from "./codexCliArticle";
import { hermesAgentArticle } from "./hermesAgentArticle";
import { kSkillArticle } from "./kSkillArticle";
import { lazycodexArticle } from "./lazycodexArticle";
import { ohMyClaudecodeArticle } from "./ohMyClaudecodeArticle";
import { ohMyCodexArticle } from "./ohMyCodexArticle";
import { ohMyOpenagentArticle } from "./ohMyOpenagentArticle";
import { omnigentArticle } from "./omnigentArticle";
import { patinaArticle } from "./patinaArticle";
import { sampleArticles } from "./sampleArticles";
import { trendingRepositoriesArticle } from "./trendingRepositoriesArticle";

export const wikiArticles: readonly WikiArticle[] = [
  gajaeCodeArticle,
  claudeCodeArticle,
  codexCliArticle,
  hermesAgentArticle,
  kSkillArticle,
  lazycodexArticle,
  ohMyClaudecodeArticle,
  ohMyCodexArticle,
  ohMyOpenagentArticle,
  omnigentArticle,
  patinaArticle,
  trendingRepositoriesArticle,
  ...sampleArticles,
];

export const homePanels = [
  {
    title: "최근 편집된 저장소",
    items: [
      {
        label: "NomaDamas/k-skill",
        href: "/w/NomaDamas%2Fk-skill",
        description: "한국 생활·공공·업무를 코딩 에이전트에 붙이는 스킬 모음집",
      },
      {
        label: "Yeachan-Heo/gajae-code",
        href: "/w/Yeachan-Heo%2Fgajae-code",
        description: "면담, 계획, tmux 실행, 검증을 묶는 GJC 하네스",
      },
      {
        label: "NousResearch/hermes-agent",
        href: "/w/NousResearch%2Fhermes-agent",
        description: "기억, 스킬, gateway, cron을 묶는 자기개선형 에이전트",
      },
      {
        label: "code-yeongyu/lazycodex",
        href: "/w/code-yeongyu%2Flazycodex",
        description: "Codex용 OmO 설치 진입점",
      },
      {
        label: "Yeachan-Heo/oh-my-claudecode",
        href: "/w/Yeachan-Heo%2Foh-my-claudecode",
        description: "Claude Code용 OMC 멀티 에이전트 확장",
      },
      {
        label: "anthropics/claude-code",
        href: "/w/anthropics%2Fclaude-code",
        description: "oh-my-claudecode가 확장하는 터미널 코딩 에이전트 기반",
      },
      {
        label: "Yeachan-Heo/oh-my-codex",
        href: "/w/Yeachan-Heo%2Foh-my-codex",
        description: "OpenAI Codex CLI용 OMX workflow layer",
      },
      {
        label: "openai/codex",
        href: "/w/openai%2Fcodex",
        description: "oh-my-codex·lazycodex가 실행 엔진으로 삼는 Codex CLI",
      },
      {
        label: "code-yeongyu/oh-my-openagent",
        href: "/w/code-yeongyu%2Foh-my-openagent",
        description: "OmO/OpenAgent 계열 multi-harness 하네스",
      },
      {
        label: "omnigent-ai/omnigent",
        href: "/w/omnigent-ai%2Fomnigent",
        description: "여러 AI agent를 묶는 open-source meta-harness",
      },
    ],
  },
  {
    title: "트렌딩 관찰",
    items: [
      {
        label: "AI agent 후보",
        href: "/w/Github.wiki%2Ftrending-repositories#agent-tools",
        description: "GitHub search로 확인한 AI 에이전트와 agentic coding 후보",
      },
      {
        label: "문서화 도구 후보",
        href: "/w/Github.wiki%2Ftrending-repositories#documentation-tools",
        description: "Storybook, Mermaid, Docusaurus 같은 문서화 계열 후보",
      },
      {
        label: "운영 메모",
        href: "/w/Github.wiki%2Ftrending-repositories#maintenance-notes",
        description: "자동 점검에서 후보를 문서로 승격할 때 쓰는 기준",
      },
    ],
  },
  {
    title: "인기 저장소",
    items: [
      {
        label: "lazycodex-ai",
        href: "/w/code-yeongyu%2Flazycodex",
        description: "Codex distribution for OmO agent workflows",
      },
      {
        label: "patina-cli",
        href: "/w/devswha%2Fpatina",
        description: "Multilingual AI writing pattern audit tool",
      },
      {
        label: "facebook/react",
        href: "/w/facebook%2Freact",
        description: "Sample popular repository page",
      },
      {
        label: "vitejs/vite",
        description: "Build tool repository placeholder",
      },
      {
        label: "storybookjs/storybook",
        description: "Component documentation placeholder",
      },
    ],
  },
  {
    title: "작성 요청",
    items: [
      {
        label: "owner/new-repository",
        description: "Placeholder for future wiki requests",
      },
      {
        label: "owner/cli-tool",
        description: "Command-line project article request",
      },
    ],
  },
  {
    title: "분류 바로가기",
    items: [
      {
        label: "UI 프레임워크",
        href: "/w/category/ui-framework",
        description: "Browse UI-related repository pages",
      },
      {
        label: "문서화",
        href: "/w/category/documentation",
        description: "Browse documentation-focused repository pages",
      },
    ],
  },
] satisfies readonly HomePanel[];
