import type { ReactElement } from "react";

import { buildCanonicalUrl, siteName } from "../wiki/meta";

type PageMetaProps = {
  /** Full document title (already built via buildRouteTitle/buildArticleTitle). */
  readonly title: string;
  /** Meta + OG description; callers should clamp long prose via clampDescription. */
  readonly description: string;
  /** Route path (e.g. "/", "/w/owner%2Frepo") — resolved to an absolute canonical URL. */
  readonly path: string;
  /** Absolute image URL for OG/Twitter cards (article images are already absolute). */
  readonly image?: string | undefined;
  readonly type?: "website" | "article";
  readonly noindex?: boolean;
};

/**
 * Declarative per-page SEO metadata. React 19 hoists these <title>/<meta>/<link>
 * tags into <head>, so JS-rendering crawlers (Google) read per-page title,
 * description, canonical, and Open Graph data. Non-JS social crawlers fall back
 * to the site-level tags baked into index.html (same for every SPA route).
 */
export function PageMeta({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
}: PageMetaProps): ReactElement {
  const url = buildCanonicalUrl(path);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex ? <meta name="robots" content="noindex, follow" /> : null}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image === undefined ? null : <meta property="og:image" content={image} />}
      <meta name="twitter:card" content={image === undefined ? "summary" : "summary_large_image"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image === undefined ? null : <meta name="twitter:image" content={image} />}
    </>
  );
}
