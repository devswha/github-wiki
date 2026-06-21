import type { ReactElement } from "react";
import { Link } from "react-router";

const liveSearches = [
  { label: "react", path: "/w/facebook%2Freact" },
  { label: "site", path: "/w/Github.wiki" },
  {
    label: "긴 저장소 이름",
    path: "/w/very-long-owner-name%2Fvery-long-repository-name-that-wraps",
  },
] as const;

const recentChanges = [
  { label: "React 문서", path: "/w/facebook%2Freact", age: "3분 전" },
  { label: "사이트 대문", path: "/w/Github.wiki", age: "8분 전" },
  {
    label: "긴 저장소 이름",
    path: "/w/very-long-owner-name%2Fvery-long-repository-name-that-wraps",
    age: "12분 전",
  },
] as const;

export function WikiSideRail(): ReactElement {
  return (
    <aside aria-label="위키 보조 정보" className="wiki-side-rail">
      <section className="wiki-side-panel">
        <h2>실시간 검색어</h2>
        <ol>
          {liveSearches.map((item, index) => (
            <li key={item.path}>
              <span>{index + 1}</span>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ol>
      </section>
      <section className="wiki-side-panel">
        <h2>최근 변경</h2>
        <ul>
          {recentChanges.map((item) => (
            <li key={item.path}>
              <Link aria-label={`${item.label} 최근 변경`} to={item.path}>
                {item.label}
              </Link>
              <span>{item.age}</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
