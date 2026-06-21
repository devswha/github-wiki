import type { ReactElement } from "react";
import { Link } from "react-router";

import type { WikiCategory } from "../wiki/types";

type CategoryStripProps = {
  readonly categories: readonly WikiCategory[];
};

export function CategoryStrip({ categories }: CategoryStripProps): ReactElement {
  return (
    <nav aria-label="분류" className="category-strip">
      <span className="category-label">분류</span>
      <ul>
        {categories.map((category) => (
          <li key={category.path}>
            <Link to={category.path}>{category.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
