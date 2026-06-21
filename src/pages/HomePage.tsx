import type { ReactElement } from "react";
import { useEffect } from "react";
import { Link } from "react-router";

import { ArticleHeader } from "../components/ArticleHeader";
import { CategoryStrip } from "../components/CategoryStrip";
import { homePanels } from "../wiki/fixtures";
import { buildRouteTitle } from "../wiki/meta";

const homeCategories = [
  { label: "Github.wiki", path: "/w/category/github-wiki" },
  { label: "저장소 문서", path: "/w/category/repository-article" },
];

export function HomePage(): ReactElement {
  useEffect(() => {
    document.title = buildRouteTitle({ kind: "home" });
  }, []);

  return (
    <article className="wiki-article home-page">
      <ArticleHeader
        modifiedAt="2026-06-04T06:00:00.000Z"
        title="Github.wiki:대문"
      />
      <CategoryStrip categories={homeCategories} />
      <section className="home-welcome">
        <h2>저장소를 문서처럼 읽는 Github.wiki</h2>
        <p>
          Github.wiki는 레포지토리의 목적, 구조, 운영 메모를 위키 형태로
          정리하기 위한 초기 틀입니다.
        </p>
      </section>
      <div className="home-panel-grid">
        {homePanels.map((panel) => (
          <section className="home-panel" key={panel.title}>
            <h2>{panel.title}</h2>
            <ul>
              {panel.items.map((item) => (
                <li key={`${panel.title}:${item.label}`}>
                  {item.href === undefined ? (
                    <span className="home-panel-label">{item.label}</span>
                  ) : (
                    <Link to={item.href}>{item.label}</Link>
                  )}
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section className="home-panel">
          <h2>작성 파이프라인</h2>
          <p>Patina 계열 생성기는 이후 typed article data로 연결할 수 있습니다.</p>
        </section>
      </div>
    </article>
  );
}
