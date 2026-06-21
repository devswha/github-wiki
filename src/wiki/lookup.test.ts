import {
  encodeWikiPath,
  findArticleBySlug,
  normalizeSlug,
  searchArticles,
} from "./lookup";

describe("wiki lookup", () => {
  const upstreamRepositoryCases = [
    {
      slug: "Yeachan-Heo/gajae-code",
      title: "gajae-code",
      keyword: "red-claw",
    },
    {
      slug: "code-yeongyu/lazycodex",
      title: "lazycodex",
      keyword: "orchestration",
    },
    {
      slug: "Yeachan-Heo/oh-my-claudecode",
      title: "oh-my-claudecode",
      keyword: "Claude Code",
    },
    {
      slug: "Yeachan-Heo/oh-my-codex",
      title: "oh-my-codex",
      keyword: "OpenAI Codex CLI",
    },
    {
      slug: "code-yeongyu/oh-my-openagent",
      title: "oh-my-openagent",
      keyword: "OpenAgent",
    },
  ] as const;

  it("normalizes encoded repository slugs", () => {
    expect(normalizeSlug("facebook%2Freact")).toBe("facebook/react");
  });

  it("encodes repository slugs for wiki paths", () => {
    expect(encodeWikiPath("facebook/react")).toBe("/w/facebook%2Freact");
  });

  it("finds exact repository article slugs while displaying the repo name", () => {
    // Given
    const slug = "facebook/react";

    // When
    const article = findArticleBySlug(slug);

    // Then
    expect(article).toMatchObject({ slug, title: "react" });
  });

  it("finds the patina repository article when requested by slug", () => {
    // Given
    const slug = "devswha/patina";

    // When
    const article = findArticleBySlug("devswha/patina");

    // Then
    expect(article).toMatchObject({
      slug,
      title: "patina",
      image: {
        alt: "patina repository icon",
        src: "https://raw.githubusercontent.com/devswha/patina/main/assets/brand/patina-icon.svg",
      },
    });
    expect(article?.categories.map((category) => category.label)).toContain(
      "AI 글쓰기 도구",
    );
  });

  it("finds repository articles from encoded slugs", () => {
    expect(findArticleBySlug("facebook%2Freact")?.slug).toBe("facebook/react");
  });

  it("searches fixture articles by partial query", () => {
    expect(searchArticles("react").map((article) => article.slug)).toContain(
      "facebook/react",
    );
  });

  it("searches the patina article by humanizer keyword", () => {
    expect(searchArticles("humanizer").map((article) => article.slug)).toContain(
      "devswha/patina",
    );
  });

  it("finds the lazycodex repository article with the parsed repository logo", () => {
    // Given
    const slug = "code-yeongyu/lazycodex";

    // When
    const article = findArticleBySlug(slug);

    // Then
    expect(article).toMatchObject({
      slug,
      title: "lazycodex",
      image: {
        alt: "lazycodex repository logo",
        src: "https://raw.githubusercontent.com/code-yeongyu/lazycodex/main/.github/assets/lazycodex-logo.png",
      },
    });
    expect(article?.categories.map((category) => category.label)).toContain(
      "AI 에이전트 도구",
    );
  });

  it("searches the lazycodex article by orchestration keyword", () => {
    expect(searchArticles("orchestration").map((article) => article.slug)).toContain(
      "code-yeongyu/lazycodex",
    );
  });

  it.each(upstreamRepositoryCases)(
    "finds the sourced upstream article for $slug",
    ({ keyword, slug, title }) => {
      // Given
      const encodedSlug = encodeURIComponent(slug);

      // When
      const directArticle = findArticleBySlug(slug);
      const encodedArticle = findArticleBySlug(encodedSlug);
      const searchResultSlugs = searchArticles(keyword).map((article) => article.slug);

      // Then
      expect(directArticle).toMatchObject({ slug, title });
      expect(encodedArticle?.slug).toBe(slug);
      expect(searchResultSlugs).toContain(slug);
    },
  );

  it("returns an empty search result for empty query", () => {
    expect(searchArticles("")).toEqual([]);
  });

  it("returns null for malformed percent encoding", () => {
    expect(normalizeSlug("%E0%A4%A")).toBeNull();
  });

  it("returns null for missing pages", () => {
    expect(findArticleBySlug("missing/repo")).toBeNull();
  });
});
