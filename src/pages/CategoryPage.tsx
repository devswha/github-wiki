import type { ReactElement } from "react";
import { Link, useParams } from "react-router";

import { ArticleHeader } from "../components/ArticleHeader";
import { PageMeta } from "../components/PageMeta";
import { buildCategoryPath, getCategoryLabel } from "../wiki/categories";
import { wikiArticles } from "../wiki/fixtures";
import { encodeWikiPath } from "../wiki/lookup";
import { buildRouteTitle, clampDescription } from "../wiki/meta";

export function CategoryPage(): ReactElement {
  const params = useParams();
  const categorySlug = params["*"] ?? "";
  const categoryPath = buildCategoryPath(categorySlug);
  const categoryLabel = getCategoryLabel(categorySlug);
  const title = `분류: ${categoryLabel}`;
  const matchingArticles = wikiArticles.filter((article) =>
    article.categories.some((category) => category.path === categoryPath),
  );
  const description = clampDescription(
    `${categoryLabel} 분류에 속한 저장소 문서 ${matchingArticles.length}개 — Github.wiki에서 관련 프로젝트를 모아 봅니다.`,
  );

  return (
    <>
      <PageMeta
        title={buildRouteTitle({ kind: "article", title })}
        description={description}
        path={categoryPath}
      />
      <article className="wiki-article category-page">
        <ArticleHeader modifiedAt="2026-06-04T06:12:00.000Z" title={title} />
        <section className="home-panel">
          <h2>문서 목록</h2>
          {matchingArticles.length > 0 ? (
            <ul>
              {matchingArticles.map((article) => (
                <li key={article.slug}>
                  <Link to={encodeWikiPath(article.slug)}>{article.title}</Link>
                  <span>{article.summary}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>이 분류는 이후 작성 파이프라인에서 문서를 연결할 수 있습니다.</p>
          )}
        </section>
      </article>
    </>
  );
}
