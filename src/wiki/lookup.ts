import type { WikiArticle, WikiSlug } from "./types";
import { wikiArticles } from "./fixtures";

export function normalizeSlug(input: string): WikiSlug | null {
  const trimmedInput = input.trim();

  if (trimmedInput.length === 0) {
    return null;
  }

  const withoutWikiPrefix = trimmedInput.startsWith("/w/")
    ? trimmedInput.slice(3)
    : trimmedInput;

  try {
    const decodedSlug = decodeURIComponent(withoutWikiPrefix).trim();

    return decodedSlug.length > 0 ? decodedSlug : null;
  } catch (error) {
    if (error instanceof URIError) {
      return null;
    }

    throw error;
  }
}

export function encodeWikiPath(slug: WikiSlug): string {
  return `/w/${encodeURIComponent(slug)}`;
}

export function findArticleBySlug(input: string): WikiArticle | null {
  const normalizedSlug = normalizeSlug(input);

  if (normalizedSlug === null) {
    return null;
  }

  return wikiArticles.find((article) => article.slug === normalizedSlug) ?? null;
}

export function searchArticles(query: string): readonly WikiArticle[] {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (normalizedQuery.length === 0) {
    return [];
  }

  return wikiArticles.filter((article) => {
    const categoryText = article.categories
      .map((category) => category.label)
      .join(" ");
    const searchableText =
      `${article.slug} ${article.title} ${article.summary} ${categoryText}`.toLocaleLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export function getRandomArticle(seed = 0): WikiArticle {
  if (wikiArticles.length === 0) {
    throw new Error("No wiki articles are available.");
  }

  const normalizedSeed = Math.abs(Math.trunc(seed));
  const selectedArticle = wikiArticles[normalizedSeed % wikiArticles.length];

  if (selectedArticle === undefined) {
    throw new Error("No wiki article matched the deterministic seed.");
  }

  return selectedArticle;
}
