import type { ReactElement } from "react";
import { Moon, Sun } from "lucide-react";

import type { WikiTheme } from "../wiki/types";

type ThemeToggleProps = {
  readonly onToggle: () => void;
  readonly theme: WikiTheme;
};

export function ThemeToggle({ onToggle, theme }: ThemeToggleProps): ReactElement {
  const isDark = theme === "dark";
  const label = isDark ? "라이트 모드" : "나이트 모드";
  const Icon = isDark ? Sun : Moon;

  return (
    <button aria-label={label} className="theme-toggle" onClick={onToggle} title={label} type="button">
      <Icon aria-hidden="true" size={18} />
    </button>
  );
}
