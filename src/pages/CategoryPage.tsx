import type { ReactElement } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router";

import { ArticleHeader } from "../components/ArticleHeader";
import { buildCategoryPath, getCategoryLabel } from "../wiki/categories";
import { wikiArticles } from "../wiki/fixtures";
import { encodeWikiPath } from "../wiki/lookup";
import { buildRouteTitle } from "../wiki/meta";

export function CategoryPage(): ReactElement {
  const params = useParams();
  const categorySlug = params["*"] ?? "";
  const categoryPath = buildCategoryPath(categorySlug);
  const categoryLabel = getCategoryLabel(categorySlug);
  const title = `분류: ${categoryLabel}`;
  const matchingArticles = wikiArticles.filter((article) =>
    article.categories.some((category) => category.path === categoryPath),
  );

  useEffect(() => {
    document.title = buildRouteTitle({ kind: "article", title });
  }, [title]);

  return (
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
  );
}
