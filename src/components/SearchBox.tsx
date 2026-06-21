import type { ReactElement } from "react";
import { useState } from "react";
import { Search, Shuffle, SendHorizontal } from "lucide-react";
import { Link, useNavigate } from "react-router";

import {
  encodeWikiPath,
  findArticleBySlug,
  getRandomArticle,
  normalizeSlug,
  searchArticles,
} from "../wiki/lookup";
import type { WikiArticle } from "../wiki/types";

export function SearchBox(): ReactElement {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<readonly WikiArticle[]>([]);

  function handleGo(): void {
    const matchedArticle = findArticleBySlug(query);
    const normalizedSlug = normalizeSlug(query);

    if (matchedArticle !== null) {
      navigate(encodeWikiPath(matchedArticle.slug));
      return;
    }

    if (normalizedSlug !== null) {
      navigate(encodeWikiPath(normalizedSlug));
    }
  }

  function handleRandom(): void {
    navigate(encodeWikiPath(getRandomArticle(1).slug));
  }

  return (
    <div className="header-search">
      <button aria-label="아무 문서" onClick={handleRandom} type="button">
        <Shuffle aria-hidden="true" size={16} />
      </button>
      <form
        aria-label="문서 검색"
        onSubmit={(event) => {
          event.preventDefault();
          setResults(searchArticles(query));
        }}
        role="search"
      >
        <input
          aria-label="검색어"
          onChange={(event) => setQuery(event.currentTarget.value)}
          placeholder="여기에서 검색"
          type="search"
          value={query}
        />
        <button type="submit">
          <Search aria-hidden="true" size={16} />
          <span>검색</span>
        </button>
        <button onClick={handleGo} type="button">
          <SendHorizontal aria-hidden="true" size={16} />
          <span>이동</span>
        </button>
      </form>
      {results.length > 0 ? (
        <ul aria-label="검색 결과" className="search-results">
          {results.map((article) => (
            <li key={article.slug}>
              <Link to={encodeWikiPath(article.slug)}>{article.title}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
