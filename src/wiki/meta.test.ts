import {
  buildArticleTitle,
  buildCanonicalUrl,
  buildRouteTitle,
  clampDescription,
  siteMetaDescription,
  siteOrigin,
} from "./meta";

describe("wiki metadata", () => {
  it("builds article title for repository page", () => {
    expect(buildArticleTitle("react")).toBe("react - Github.wiki");
  });

  it("builds route title for home, article, and not-found pages", () => {
    expect(buildRouteTitle({ kind: "home" })).toBe("Github.wiki:대문 - Github.wiki");
    expect(buildRouteTitle({ kind: "article", title: "Github.wiki" })).toBe(
      "Github.wiki - Github.wiki",
    );
    expect(buildRouteTitle({ kind: "not-found" })).toBe(
      "문서를 찾을 수 없습니다 - Github.wiki",
    );
  });

  it("describes the repository wiki scaffold without live data claims", () => {
    expect(siteMetaDescription).toContain("repository explanation wiki");
    expect(siteMetaDescription).not.toContain("live GitHub");
  });

  it("resolves canonical URLs from route paths against the site origin", () => {
    expect(buildCanonicalUrl("/")).toBe(`${siteOrigin}/`);
    expect(buildCanonicalUrl("/w/devswha%2Fpatina")).toBe(
      `${siteOrigin}/w/devswha%2Fpatina`,
    );
    expect(buildCanonicalUrl("recent-changes")).toBe(`${siteOrigin}/recent-changes`);
    expect(buildCanonicalUrl("https://example.com/x")).toBe("https://example.com/x");
  });

  it("clamps long descriptions to a snippet-safe length with an ellipsis", () => {
    const short = "짧은 설명";
    expect(clampDescription(short)).toBe(short);

    const long = "가".repeat(300);
    const clamped = clampDescription(long);
    expect(clamped.length).toBeLessThanOrEqual(155);
    expect(clamped.endsWith("…")).toBe(true);

    expect(clampDescription("  여러   공백\n줄바꿈  ")).toBe("여러 공백 줄바꿈");
  });
});
