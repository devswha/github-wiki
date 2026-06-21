import type { ReactElement } from "react";
import { useEffect } from "react";
import { Link } from "react-router";

import { ArticleHeader } from "../components/ArticleHeader";
import { encodeWikiPath } from "../wiki/lookup";
import { buildRouteTitle } from "../wiki/meta";

type ActivityKind = "changes" | "discussions";

type ActivityPageProps = {
  readonly kind: ActivityKind;
};

const activityContent = {
  changes: {
    title: "최근 변경",
    rows: [
      { label: "facebook/react", meta: "3분 전", slug: "facebook/react" },
      { label: "Github.wiki", meta: "8분 전", slug: "Github.wiki" },
      {
        label: "긴 저장소 이름",
        meta: "12분 전",
        slug: "very-long-owner-name/very-long-repository-name-that-wraps",
      },
    ],
  },
  discussions: {
    title: "최근 토론",
    rows: [
      { label: "React 문서 초안", meta: "샘플 토론", slug: "facebook/react" },
      { label: "대문 구성", meta: "샘플 토론", slug: "Github.wiki" },
    ],
  },
} as const satisfies Record<
  ActivityKind,
  {
    readonly title: string;
    readonly rows: readonly {
      readonly label: string;
      readonly meta: string;
      readonly slug: string;
    }[];
  }
>;

export function ActivityPage({ kind }: ActivityPageProps): ReactElement {
  const content = activityContent[kind];

  useEffect(() => {
    document.title = buildRouteTitle({ kind: "article", title: content.title });
  }, [content.title]);

  return (
    <article className="wiki-article activity-page">
      <ArticleHeader modifiedAt="2026-06-04T06:12:00.000Z" title={content.title} />
      <section className="home-panel">
        <h2>{content.title}</h2>
        <ul>
          {content.rows.map((row) => (
            <li key={`${kind}:${row.slug}`}>
              <Link to={encodeWikiPath(row.slug)}>{row.label}</Link>
              <span>{row.meta}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
