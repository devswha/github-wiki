import type { ReactElement } from "react";
import { BriefcaseBusiness, History, MessageSquare, Star, UserCircle } from "lucide-react";
import { Link } from "react-router";

import { SearchBox } from "./SearchBox";
import { ThemeToggle } from "./ThemeToggle";
import type { WikiTheme } from "../wiki/types";

type WikiHeaderProps = {
  readonly onToggleTheme: () => void;
  readonly theme: WikiTheme;
};

const patinaRepositoryUrl = "https://github.com/devswha/patina";

export function WikiHeader({ onToggleTheme, theme }: WikiHeaderProps): ReactElement {
  return (
    <header className="wiki-header">
      <nav aria-label="주요 메뉴" className="wiki-nav">
        <Link className="brand-link" to="/">
          Github.wiki
        </Link>
        <Link to="/recent-changes">
          <History aria-hidden="true" size={16} />
          <span>최근 변경</span>
        </Link>
        <Link to="/recent-discussions">
          <MessageSquare aria-hidden="true" size={16} />
          <span>최근 토론</span>
        </Link>
        <button type="button">
          <BriefcaseBusiness aria-hidden="true" size={16} />
          <span>특수 기능</span>
        </button>
        <a
          aria-label="devswha/patina GitHub Star 찍기"
          className="patina-header-star"
          href={patinaRepositoryUrl}
          rel="noreferrer"
          target="_blank"
          title="devswha/patina GitHub Star 찍기"
        >
          <Star aria-hidden="true" size={16} />
          <span>patina Star</span>
        </a>
      </nav>
      <SearchBox />
      <ThemeToggle onToggle={onToggleTheme} theme={theme} />
      <button aria-label="계정" className="account-button" type="button">
        <UserCircle aria-hidden="true" size={18} />
      </button>
    </header>
  );
}
