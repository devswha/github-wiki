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
import { opencodeArticle } from "./opencodeArticle";
import { piArticle } from "./piArticle";
import { openhandsArticle } from "./openhandsArticle";
import { clineArticle } from "./clineArticle";
import { openInterpreterArticle } from "./openInterpreterArticle";
import { gooseArticle } from "./gooseArticle";
import { aiderArticle } from "./aiderArticle";
import { rooCodeArticle } from "./rooCodeArticle";
import { sweAgentArticle } from "./sweAgentArticle";
import { difyArticle } from "./difyArticle";
import { langchainArticle } from "./langchainArticle";
import { browserUseArticle } from "./browserUseArticle";
import { litellmArticle } from "./litellmArticle";
import { ollamaArticle } from "./ollamaArticle";
import { openWebuiArticle } from "./openWebuiArticle";
import { autogptArticle } from "./autogptArticle";

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
  opencodeArticle,
  piArticle,
  openhandsArticle,
  clineArticle,
  openInterpreterArticle,
  gooseArticle,
  aiderArticle,
  rooCodeArticle,
  sweAgentArticle,
  difyArticle,
  langchainArticle,
  browserUseArticle,
  litellmArticle,
  ollamaArticle,
  openWebuiArticle,
  autogptArticle,
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
    title: "GitHub 트렌딩 등재",
    items: [
      {
        label: "anomalyco/opencode",
        href: "/w/anomalyco%2Fopencode",
        description: "오픈소스 터미널 코딩 에이전트",
      },
      {
        label: "OpenHands/OpenHands",
        href: "/w/OpenHands%2FOpenHands",
        description: "자가호스팅 코딩 에이전트 관제 센터",
      },
      {
        label: "cline/cline",
        href: "/w/cline%2Fcline",
        description: "IDE·터미널 자율 코딩 에이전트",
      },
      {
        label: "openinterpreter/openinterpreter",
        href: "/w/openinterpreter%2Fopeninterpreter",
        description: "저비용·오픈 모델용 코딩 에이전트 (Rust)",
      },
      {
        label: "aaif-goose/goose",
        href: "/w/aaif-goose%2Fgoose",
        description: "데스크톱·CLI·API 확장형 에이전트",
      },
      {
        label: "Aider-AI/aider",
        href: "/w/Aider-AI%2Faider",
        description: "터미널 AI 페어 프로그래밍",
      },
      {
        label: "earendil-works/pi",
        href: "/w/earendil-works%2Fpi",
        description: "Pi 에이전트 하네스 + 통합 LLM API",
      },
      {
        label: "RooCodeInc/Roo-Code",
        href: "/w/RooCodeInc%2FRoo-Code",
        description: "에디터 속 AI 개발팀 (VS Code)",
      },
      {
        label: "SWE-agent/SWE-agent",
        href: "/w/SWE-agent%2FSWE-agent",
        description: "GitHub 이슈 자동 수정 에이전트",
      },
      {
        label: "browser-use/browser-use",
        href: "/w/browser-use%2Fbrowser-use",
        description: "AI 에이전트용 브라우저 자동화",
      },
      {
        label: "langgenius/dify",
        href: "/w/langgenius%2Fdify",
        description: "agentic 워크플로 개발 플랫폼",
      },
      {
        label: "langchain-ai/langchain",
        href: "/w/langchain-ai%2Flangchain",
        description: "에이전트 엔지니어링 프레임워크",
      },
      {
        label: "BerriAI/litellm",
        href: "/w/BerriAI%2Flitellm",
        description: "100+ LLM OpenAI 형식 게이트웨이",
      },
      {
        label: "ollama/ollama",
        href: "/w/ollama%2Follama",
        description: "로컬 오픈 모델 러너",
      },
      {
        label: "open-webui/open-webui",
        href: "/w/open-webui%2Fopen-webui",
        description: "자가호스팅 AI 채팅 인터페이스",
      },
      {
        label: "Significant-Gravitas/AutoGPT",
        href: "/w/Significant-Gravitas%2FAutoGPT",
        description: "AI 에이전트 빌드·배포 플랫폼",
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
