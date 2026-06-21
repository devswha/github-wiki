import type { ReactElement } from "react";
import { useEffect } from "react";
import { Link } from "react-router";

import { buildRouteTitle } from "../wiki/meta";

export function NotFoundPage(): ReactElement {
  useEffect(() => {
    document.title = buildRouteTitle({ kind: "not-found" });
  }, []);

  return (
    <article className="wiki-article not-found-page">
      <h1>문서를 찾을 수 없습니다</h1>
      <p>요청한 Github.wiki 문서가 아직 fixture 데이터에 없습니다.</p>
      <Link to="/">대문으로 돌아가기</Link>
    </article>
  );
}
