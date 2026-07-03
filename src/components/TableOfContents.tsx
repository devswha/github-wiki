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
      <ul className="toc-tree">
        {sections.map((section, index) => (
          <li className="toc-item" key={section.id}>
            <span className="toc-entry">
              <span className="toc-number">{index + 1}.</span>
              <a href={`#${section.id}`}>{section.title}</a>
            </span>
            {section.subsections === undefined ||
            section.subsections.length === 0 ? null : (
              <ul className="toc-tree toc-subtree">
                {section.subsections.map((subsection, subIndex) => (
                  <li className="toc-item" key={subsection.id}>
                    <span className="toc-entry">
                      <span className="toc-number">
                        {index + 1}.{subIndex + 1}.
                      </span>
                      <a href={`#${subsection.id}`}>{subsection.title}</a>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
