import type { ReactElement } from "react";

import type { ArticleSection } from "../wiki/types";

type TableOfContentsProps = {
  readonly sections: readonly ArticleSection[];
};

export function TableOfContents({
  sections,
}: TableOfContentsProps): ReactElement {
  return (
    <nav aria-label="목차" className="toc">
      <strong>목차</strong>
      <ol>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
