import { buildArticleTitle, buildRouteTitle, siteMetaDescription } from "./meta";

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
});
