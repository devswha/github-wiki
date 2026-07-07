import { repoStats as generatedRepoStats } from "./repoStats.generated";

/**
 * Build-time GitHub repository stats. Collected during `vite build`
 * (see scripts/collect-repo-stats.mjs + the vite.config plugin) and baked into
 * repoStats.generated.ts. Never fetched at visitor runtime — the committed file
 * is the fail-safe baseline, refreshed on every deploy.
 */
export type RepoStat = {
  readonly stars: number;
  readonly forks: number;
  /** ISO timestamp of the repo's last push (from the GitHub API). */
  readonly pushedAt: string;
  /** YYYY-MM-DD the stats were collected — shown for honesty ("기준일"). */
  readonly fetchedAt: string;
};

export const repoStats: Readonly<Record<string, RepoStat>> = generatedRepoStats;

export function getRepoStat(slug: string): RepoStat | null {
  return repoStats[slug] ?? null;
}

/**
 * Compact count formatting: 136600 → "136.6k", 6091 → "6.1k", 237 → "237",
 * 2_400_000 → "2.4M". Trailing ".0" is trimmed (2000 → "2k").
 */
export function formatCompactCount(count: number): string {
  if (!Number.isFinite(count) || count < 0) {
    return "0";
  }

  if (count < 1000) {
    return String(count);
  }

  if (count < 1_000_000) {
    return `${trimZero((count / 1000).toFixed(1))}k`;
  }

  return `${trimZero((count / 1_000_000).toFixed(1))}M`;
}

function trimZero(value: string): string {
  return value.endsWith(".0") ? value.slice(0, -2) : value;
}
