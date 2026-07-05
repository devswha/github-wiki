import type { HomePanel, WikiArticle } from "./types";
import { gajaeCodeArticle } from "./gajaeCodeArticle";
import { lazycodexArticle } from "./lazycodexArticle";
import { ohMyClaudecodeArticle } from "./ohMyClaudecodeArticle";
import { ohMyCodexArticle } from "./ohMyCodexArticle";
import { ohMyOpenagentArticle } from "./ohMyOpenagentArticle";
import { patinaArticle } from "./patinaArticle";
import { sampleArticles } from "./sampleArticles";

export const wikiArticles: readonly WikiArticle[] = [
  gajaeCodeArticle,
  lazycodexArticle,
  ohMyClaudecodeArticle,
  ohMyCodexArticle,
  ohMyOpenagentArticle,
  patinaArticle,
  ...sampleArticles,
];

export const homePanels = [
  {
    title: "최근 편집된 저장소",
    items: [
      {
        label: "Yeachan-Heo/gajae-code",
        href: "/w/Yeachan-Heo%2Fgajae-code",
        description: "면담, 계획, tmux 실행, 검증을 묶는 GJC 하네스",
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
        label: "Yeachan-Heo/oh-my-codex",
        href: "/w/Yeachan-Heo%2Foh-my-codex",
        description: "OpenAI Codex CLI용 OMX workflow layer",
      },
      {
        label: "code-yeongyu/oh-my-openagent",
        href: "/w/code-yeongyu%2Foh-my-openagent",
        description: "OmO/OpenAgent 계열 multi-harness 하네스",
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
    title: "이번 점검에서 눈에 띈 저장소",
    items: [
      {
        label: "wshobson/agents",
        href: "https://github.com/wshobson/agents",
        description:
          "Claude Code, Codex CLI, Cursor, OpenCode, GitHub Copilot, Gemini CLI를 함께 겨냥한 multi-harness agentic plugin marketplace",
      },
      {
        label: "openai/codex-plugin-cc",
        href: "https://github.com/openai/codex-plugin-cc",
        description:
          "Claude Code에서 Codex를 코드 리뷰나 작업 위임에 쓰는 plugin",
      },
      {
        label: "VoltAgent/awesome-agent-skills",
        href: "https://github.com/VoltAgent/awesome-agent-skills",
        description:
          "Claude Code, Codex, Gemini CLI, Cursor 계열 agent skills 큐레이션",
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
