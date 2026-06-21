import type { ReactElement } from "react";

import type {
  ArticleBodyBlock,
  ArticleSection,
  WikiCard,
  WikiLink,
  WikiTable,
} from "../wiki/types";

type ArticleSectionsProps = {
  readonly sections: readonly ArticleSection[];
};

function renderLink(link: WikiLink): ReactElement {
  const isExternal = link.variant === "external";

  return (
    <li className="article-link-list-item" key={link.label}>
      <a
        className={`article-link article-link-${link.variant}`}
        href={link.href}
        rel={isExternal ? "noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
      >
        {link.label}
      </a>
      {link.description === undefined ? null : (
        <span className="article-link-description">{link.description}</span>
      )}
    </li>
  );
}

function renderTable(table: WikiTable): ReactElement {
  return (
    <div className="article-table-wrap">
      <table className="article-body-table">
        <caption>{table.caption}</caption>
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderCard(card: WikiCard): ReactElement {
  return (
    <article className="article-card" key={card.title}>
      <h3>{card.title}</h3>
      <p>{card.body}</p>
      {card.href === undefined || card.linkLabel === undefined ? null : (
        <a className="article-card-link" href={card.href}>
          {card.linkLabel}
        </a>
      )}
    </article>
  );
}

function renderBodyBlock(block: ArticleBodyBlock): ReactElement {
  if (typeof block === "string") {
    return <p key={block}>{block}</p>;
  }

  return (
    <ul aria-label={block.label} className="article-body-list" key={block.label}>
      {block.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ArticleSections({ sections }: ArticleSectionsProps): ReactElement {
  return (
    <div className="article-sections">
      {sections.map((section, index) => (
        <section className="article-section" id={section.id} key={section.id}>
          <h2>
            <a
              className="section-number-link"
              href={`#${section.id}`}
            >
              {index + 1}.
            </a>{" "}
            {section.title}
          </h2>
          {section.body.map(renderBodyBlock)}
          {section.links === undefined ? null : (
            <ul className="article-link-list">{section.links.map(renderLink)}</ul>
          )}
          {section.table === undefined ? null : renderTable(section.table)}
          {section.cards === undefined ? null : (
            <div className="article-card-grid">{section.cards.map(renderCard)}</div>
          )}
        </section>
      ))}
    </div>
  );
}
