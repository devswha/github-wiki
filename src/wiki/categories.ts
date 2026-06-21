const categoryLabels: Readonly<Record<string, string>> = {
  "ai-agent-tool": "AI 에이전트 도구",
  "ai-writing-tool": "AI 글쓰기 도구",
  "claude-code-extension": "Claude Code 확장",
  "cli-tool": "CLI 도구",
  "codex-extension": "Codex 확장",
  "developer-workflow": "개발 워크플로우",
  "github-wiki": "Github.wiki",
  "javascript-library": "JavaScript 라이브러리",
  "layout-test": "레이아웃 테스트",
  "long-repository-name": "긴 저장소 이름",
  "opencode-extension": "OpenCode 확장",
  "opencode-plugin": "OpenCode 플러그인",
  orchestration: "오케스트레이션",
  "tui-tool": "TUI 도구",
  documentation: "문서화",
  project: "프로젝트",
  "repository-article": "저장소 문서",
  "ui-framework": "UI 프레임워크",
  wiki: "위키",
} as const;

export function buildCategoryPath(slug: string): string {
  return `/w/category/${slug}`;
}

export function getCategoryLabel(slug: string): string {
  return categoryLabels[slug] ?? slug.replaceAll("-", " ");
}
