import type { ReactElement } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

import { ArticleHeader } from "../components/ArticleHeader";
import { ArticleSections } from "../components/ArticleSections";
import { CategoryStrip } from "../components/CategoryStrip";
import { RepoInfobox } from "../components/RepoInfobox";
import { TableOfContents } from "../components/TableOfContents";
import { findArticleBySlug } from "../wiki/lookup";
import { buildRouteTitle } from "../wiki/meta";

import { NotFoundPage } from "./NotFoundPage";

export function ArticlePage(): ReactElement {
  const params = useParams();
  const slug = params["*"] ?? "";
  const article = findArticleBySlug(slug);
  const pageTitle =
    article === null ? null : buildRouteTitle({ kind: "article", title: article.title });

  useEffect(() => {
    if (pageTitle !== null) {
      document.title = pageTitle;
    }
  }, [pageTitle]);

  if (article === null) {
    return <NotFoundPage />;
  }

  return (
    <article className="wiki-article">
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
  );
}
