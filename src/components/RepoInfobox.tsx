import type { ReactElement } from "react";

import type { InfoboxLink, InfoboxRow, WikiImage } from "../wiki/types";
import { formatCompactCount, getRepoStat } from "../wiki/repoStats";

type RepoInfoboxProps = {
  readonly image?: WikiImage | undefined;
  readonly rows: readonly InfoboxRow[];
  readonly slug: string;
  readonly title: string;
};

type RepositoryPath = {
  readonly owner: string;
  readonly repository: string;
};

const infoboxLabelTranslations: ReadonlyMap<string, string> = new Map([
  ["Core", "핵심 구성"],
  ["Default branch", "기본 브랜치"],
  ["Developer", "개발자"],
  ["Ecosystem", "사용 환경"],
  ["GitHub release", "GitHub 릴리스"],
  ["Homepage", "공식 사이트"],
  ["Latest release", "최신 릴리스"],
  ["License", "라이선스"],
  ["Links", "관련 링크"],
  ["Modes", "기능"],
  ["npm latest", "npm 최신"],
  ["Owner", "개발자"],
  ["Package", "패키지"],
  ["Package version", "패키지 버전"],
  ["Primary language", "주요 언어"],
  ["Related project", "관련 프로젝트"],
  ["Repository", "저장소"],
  ["Topics", "주제"],
  ["Type", "성격"],
]);

const REPO_STATS_LABEL = "GitHub";

function displayLabel(label: string): string {
  return infoboxLabelTranslations.get(label) ?? label;
}

function renderLink(link: InfoboxLink): ReactElement {
  return (
    <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
      {link.label}
    </a>
  );
}

function renderValue(row: InfoboxRow): ReactElement | null {
  if (row.value.trim().length === 0) {
    return null;
  }

  if (row.valueHref === undefined) {
    return <span>{row.value}</span>;
  }

  return (
    <a
      className="repo-infobox-value-link"
      href={row.valueHref}
      rel="noreferrer"
      target="_blank"
    >
      {row.value}
    </a>
  );
}

function readRow(rows: readonly InfoboxRow[], label: string): InfoboxRow | null {
  const row = rows.find((candidate) => candidate.label === label);
  return row === undefined || row.value.trim().length === 0 ? null : row;
}

function readRowValue(rows: readonly InfoboxRow[], label: string): string | null {
  const value = readRow(rows, label)?.value.trim();
  return value === undefined || value.length === 0 ? null : value;
}

function parseRepositoryPath(slug: string): RepositoryPath | null {
  const [owner, repository, extra] = slug.split("/");
  if (
    owner === undefined ||
    repository === undefined ||
    extra !== undefined ||
    owner.length === 0 ||
    repository.length === 0
  ) {
    return null;
  }

  return { owner, repository };
}

function packageNameToNpmUrl(packageName: string | null): string | null {
  if (packageName === null) {
    return null;
  }

  if (!/^@?[a-z0-9][a-z0-9._/-]*$/iu.test(packageName)) {
    return null;
  }

  return `https://www.npmjs.com/package/${encodeURIComponent(packageName)}`;
}

function homepageToUrl(homepage: string | null): string | null {
  if (homepage === null) {
    return null;
  }

  const trimmed = homepage.trim();
  const urlLike = /^(?:https?:\/\/)?[a-z0-9][a-z0-9.-]*\.[a-z]{2,}(?:[/:?#].*)?$/iu;
  if (!urlLike.test(trimmed)) {
    return null;
  }

  return /^https?:\/\//iu.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function buildDerivedLinks(
  rows: readonly InfoboxRow[],
  slug: string,
): readonly InfoboxLink[] {
  const repositoryPath = parseRepositoryPath(slug);
  if (repositoryPath === null) {
    return [];
  }

  const owner = encodeURIComponent(repositoryPath.owner);
  const repository = encodeURIComponent(repositoryPath.repository);
  const githubUrl = `https://github.com/${owner}/${repository}`;
  const derivedLinks: InfoboxLink[] = [
    { label: "GitHub", href: githubUrl },
  ];
  const packageRow = readRow(rows, "Package");
  const homepageRow = readRow(rows, "Homepage");
  const npmUrl =
    packageRow?.valueHref ?? packageNameToNpmUrl(readRowValue(rows, "Package"));
  const homepageUrl =
    homepageRow?.valueHref ?? homepageToUrl(readRowValue(rows, "Homepage"));

  if (npmUrl !== null) {
    derivedLinks.push({ label: "npm", href: npmUrl });
  }

  if (homepageUrl !== null) {
    derivedLinks.push({ label: "공식 사이트", href: homepageUrl });
  }

  return derivedLinks;
}

function rowWithDerivedValueHref(
  row: InfoboxRow,
  repositoryPath: RepositoryPath | null,
): InfoboxRow {
  if (
    repositoryPath === null ||
    row.valueHref !== undefined ||
    row.value.trim().length === 0
  ) {
    return row;
  }

  const owner = encodeURIComponent(repositoryPath.owner);
  const repository = encodeURIComponent(repositoryPath.repository);

  if (row.label === "Owner" || row.label === "Developer") {
    return { ...row, valueHref: `https://github.com/${owner}` };
  }

  if (row.label === "Repository") {
    return { ...row, valueHref: `https://github.com/${owner}/${repository}` };
  }

  return row;
}

function rowsWithDerivedLinks(
  rows: readonly InfoboxRow[],
  slug: string,
): readonly InfoboxRow[] {
  const repositoryPath = parseRepositoryPath(slug);
  const linkedRows = rows.map((row) => rowWithDerivedValueHref(row, repositoryPath));
  const derivedLinks = buildDerivedLinks(linkedRows, slug);
  if (derivedLinks.length === 0) {
    return linkedRows;
  }

  let foundLinksRow = false;
  const derivedRows = linkedRows.map((row): InfoboxRow => {
    if (row.label !== "Links") {
      return row;
    }

    foundLinksRow = true;
    if (row.links !== undefined && row.links.length > 0) {
      return row;
    }

    return { ...row, links: derivedLinks, value: "" };
  });

  if (foundLinksRow) {
    return derivedRows;
  }

  return [...derivedRows, { label: "Links", links: derivedLinks, value: "" }];
}

function withRepoStatsRow(
  rows: readonly InfoboxRow[],
  slug: string,
): readonly InfoboxRow[] {
  const stat = getRepoStat(slug);
  if (stat === null) {
    return rows;
  }

  const statsRow: InfoboxRow = {
    label: REPO_STATS_LABEL,
    value: `⭐ ${formatCompactCount(stat.stars)}  ·  🍴 ${formatCompactCount(stat.forks)}  ·  ${stat.fetchedAt} 기준`,
  };

  const repositoryIndex = rows.findIndex((row) => row.label === "Repository");
  if (repositoryIndex === -1) {
    return [statsRow, ...rows];
  }

  return [
    ...rows.slice(0, repositoryIndex + 1),
    statsRow,
    ...rows.slice(repositoryIndex + 1),
  ];
}

export function RepoInfobox({
  image,
  rows,
  slug,
  title,
}: RepoInfoboxProps): ReactElement {
  const infoboxRows = withRepoStatsRow(rowsWithDerivedLinks(rows, slug), slug);

  return (
    <table aria-label="repository information" className="repo-infobox">
      <caption>{title}</caption>
      <tbody>
        {image === undefined ? null : (
          <tr className="repo-infobox-image-row">
            <td colSpan={2}>
              <figure className="repo-infobox-image">
                <img alt={image.alt} decoding="async" src={image.src} />
                {image.caption === undefined ? null : (
                  <figcaption>
                    {image.sourceUrl === undefined ? (
                      image.caption
                    ) : (
                      <a href={image.sourceUrl}>{image.caption}</a>
                    )}
                    {image.sourceLabel === undefined ? null : (
                      <span>{image.sourceLabel}</span>
                    )}
                  </figcaption>
                )}
              </figure>
            </td>
          </tr>
        )}
        {infoboxRows.map((row) =>
          row.label === REPO_STATS_LABEL ? (
            <tr className="repo-infobox-stats" key={row.label}>
              <td className="repo-infobox-stats-cell" colSpan={2}>
                {row.value}
              </td>
            </tr>
          ) : (
            <tr key={row.label}>
              <th scope="row">{displayLabel(row.label)}</th>
              <td>
                {renderValue(row)}
                {row.links === undefined ? null : (
                  <div className="repo-infobox-links">
                    {row.links.map(renderLink)}
                  </div>
                )}
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}
