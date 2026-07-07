import type { ReactElement } from "react";
import { useEffect } from "react";
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
  const isNcLicensed = article?.attribution !== undefined;

  // Copyleft (NC) pages must not carry commercial promos. Flag the document root
  // so the shared header patina promo is hidden via CSS on these pages only.
  useEffect(() => {
    const root = document.documentElement;
    if (isNcLicensed) {
      root.dataset["ncLicense"] = "1";
    } else {
      delete root.dataset["ncLicense"];
    }
    return () => {
      delete root.dataset["ncLicense"];
    };
  }, [isNcLicensed, slug]);

  if (article === null) {
    return <NotFoundPage />;
  }

  const isUpstreamArticle =
    article.slug.startsWith("Yeachan-Heo/") || article.slug.startsWith("code-yeongyu/");
  const attribution = article.attribution;

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
            {attribution === undefined ? null : (
              <footer className="article-license">
                <p>
                  이 문서는 {attribution.source}{" "}
                  <a href={attribution.sourceUrl} rel="noreferrer" target="_blank">
                    원문 문서
                  </a>
                  에서 가져와 편집(광고 제거·발췌)한 것입니다. 원저작자: {attribution.source}{" "}
                  기여자.
                </p>
                <p>
                  본 문서는 원문과 동일하게{" "}
                  <a href={attribution.licenseUrl} rel="noreferrer" target="_blank">
                    {attribution.license}
                  </a>
                  로 배포됩니다. (열람일 {attribution.retrievedAt})
                </p>
              </footer>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
