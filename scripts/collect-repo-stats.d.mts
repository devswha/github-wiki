export type CollectedRepoStat = {
  stars: number;
  forks: number;
  pushedAt: string;
  fetchedAt: string;
};

export function collectRepoStats(options: {
  slugs: readonly string[];
  cachePath: string;
  token?: string | undefined;
  log?: (message: string) => void;
}): Promise<Record<string, CollectedRepoStat>>;
