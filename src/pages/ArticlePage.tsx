import type { ReactElement } from "react";
import { useParams } from "react-router";

import { ArticleHeader } from "../components/ArticleHeader";
import { ArticleSections } from "../components/ArticleSections";
import { CategoryStrip } from "../components/CategoryStrip";
import { PageMeta } from "../components/PageMeta";
import { RepoInfobox } from "../components/RepoInfobox";
import { TableOfContents } from "../components/TableOfContents";
import { encodeWikiPath, findArticleBySlug } from "../wiki/lookup";
import { buildRouteTitle, clampDescription } from "../wiki/meta";

import { NotFoundPage } from "./NotFoundPage";

export function ArticlePage(): ReactElement {
  const params = useParams();
  const slug = params["*"] ?? "";
  const article = findArticleBySlug(slug);

  if (article === null) {
    return <NotFoundPage />;
  }

  const isUpstreamArticle =
    article.slug.startsWith("Yeachan-Heo/") || article.slug.startsWith("code-yeongyu/");

  return (
    <>
      <PageMeta
        title={buildRouteTitle({ kind: "article", title: article.title })}
        description={clampDescription(article.summary)}
        path={encodeWikiPath(article.slug)}
        image={article.image?.src}
        type="article"
      />
      <article className={`wiki-article${isUpstreamArticle ? " upstream-article" : ""}`}>
        <ArticleHeader modifiedAt={article.modifiedAt} title={article.title} />
        <CategoryStrip categories={article.categories} />
        <div className="article-layout">
          <aside className="article-aside">
            <RepoInfobox
              image={article.image}
              rows={article.infobox}
              slug={article.slug}
              title={article.title}
            />
          </aside>
          <div className="article-body">
            <p className="article-summary">{article.summary}</p>
            <TableOfContents sections={article.sections} />
            <ArticleSections sections={article.sections} />
          </div>
        </div>
      </article>
    </>
  );
}
