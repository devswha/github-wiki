import type { ReactElement } from "react";
import { Link } from "react-router";

import { PageMeta } from "../components/PageMeta";
import { buildRouteTitle, siteMetaDescription } from "../wiki/meta";

export function NotFoundPage(): ReactElement {
  return (
    <>
      <PageMeta
        title={buildRouteTitle({ kind: "not-found" })}
        description={siteMetaDescription}
        path="/"
        noindex
      />
      <article className="wiki-article not-found-page">
        <h1>문서를 찾을 수 없습니다</h1>
        <p>요청한 Github.wiki 문서가 아직 fixture 데이터에 없습니다.</p>
        <Link to="/">대문으로 돌아가기</Link>
      </article>
    </>
  );
}
