export const siteName = "Github.wiki";

export const siteMetaDescription =
  "Github.wiki is a repository explanation wiki scaffold for typed local article data.";

export type RouteTitleInput =
  | { readonly kind: "home" }
  | { readonly kind: "article"; readonly title: string }
  | { readonly kind: "not-found" };

export function buildArticleTitle(title: string): string {
  return `${title} - ${siteName}`;
}

export function buildRouteTitle(input: RouteTitleInput): string {
  switch (input.kind) {
    case "home":
      return `Github.wiki:대문 - ${siteName}`;
    case "article":
      return buildArticleTitle(input.title);
    case "not-found":
      return `문서를 찾을 수 없습니다 - ${siteName}`;
  }
}

export const siteOrigin = "https://wiki.vibetip.help";

export function buildCanonicalUrl(path: string): string {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteOrigin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function clampDescription(text: string, maxLength = 155): string {
  const normalized = text.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
}
