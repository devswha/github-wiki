import type { ReactElement, ReactNode } from "react";
import { useEffect, useState } from "react";

import { FloatingControls } from "./FloatingControls";
import { WikiFooter } from "./WikiFooter";
import { WikiHeader } from "./WikiHeader";
import { WikiSideRail } from "./WikiSideRail";
import type { WikiTheme } from "../wiki/types";

type WikiShellProps = {
  readonly children: ReactNode;
};

const themeStorageKey = "github-wiki-theme";

function readInitialTheme(): WikiTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(themeStorageKey);

  return storedTheme === "dark" ? "dark" : "light";
}

export function WikiShell({ children }: WikiShellProps): ReactElement {
  const [theme, setTheme] = useState<WikiTheme>(readInitialTheme);

  useEffect(() => {
    document.documentElement.dataset["theme"] = theme;
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  function toggleTheme(): void {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <div className="wiki-shell" id="top">
      <WikiHeader onToggleTheme={toggleTheme} theme={theme} />
      <main aria-label="Github.wiki shell" className="wiki-main">
        <div className="wiki-frame">
          <div className="wiki-content-column">{children}</div>
          <WikiSideRail />
        </div>
      </main>
      <div id="bottom" />
      <WikiFooter />
      <FloatingControls />
    </div>
  );
}
