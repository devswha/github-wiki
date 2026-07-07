import { formatCompactCount, getRepoStat, repoStats } from "./repoStats";

describe("repoStats", () => {
  it("formats counts compactly with a trimmed decimal", () => {
    expect(formatCompactCount(237)).toBe("237");
    expect(formatCompactCount(1651)).toBe("1.7k");
    expect(formatCompactCount(136_588)).toBe("136.6k");
    expect(formatCompactCount(2000)).toBe("2k");
    expect(formatCompactCount(2_400_000)).toBe("2.4M");
  });

  it("guards against invalid counts", () => {
    expect(formatCompactCount(0)).toBe("0");
    expect(formatCompactCount(-5)).toBe("0");
    expect(formatCompactCount(Number.NaN)).toBe("0");
  });

  it("returns baked stats for a known repository slug", () => {
    const stat = getRepoStat("anthropics/claude-code");
    expect(stat).not.toBeNull();
    expect(stat?.stars).toBeGreaterThan(0);
    expect(stat?.forks).toBeGreaterThanOrEqual(0);
    expect(stat?.fetchedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/u);
  });

  it("returns null for repositories without collected stats", () => {
    expect(getRepoStat("owner/does-not-exist")).toBeNull();
    expect(getRepoStat("Github.wiki")).toBeNull();
  });

  it("only stores plain owner/name slugs (no staging or non-repo entries)", () => {
    for (const slug of Object.keys(repoStats)) {
      expect(slug).toMatch(/^[^/\s]+\/[^/\s]+$/u);
    }
  });
});
