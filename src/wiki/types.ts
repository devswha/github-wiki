export type WikiSlug = string;

export type WikiCategory = {
  readonly label: string;
  readonly path: string;
};

export type InfoboxRow = {
  readonly label: string;
  readonly links?: readonly InfoboxLink[];
  readonly value: string;
  readonly valueHref?: string;
};

export type InfoboxLink = {
  readonly href: string;
  readonly label: string;
};

export type WikiLinkVariant = "external" | "internal" | "missing";

export type WikiLink = {
  readonly description?: string;
  readonly href: string;
  readonly label: string;
  readonly variant: WikiLinkVariant;
};

export type WikiTable = {
  readonly caption: string;
  readonly headers: readonly string[];
  readonly rows: readonly (readonly string[])[];
};

export type WikiCard = {
  readonly body: string;
  readonly href?: string;
  readonly linkLabel?: string;
  readonly title: string;
};

export type ArticleListBlock = {
  readonly items: readonly string[];
  readonly kind: "list";
  readonly label: string;
};

export type ArticleBodyBlock = string | ArticleListBlock;

export type ArticleSubsection = {
  readonly id: string;
  readonly title: string;
  readonly body: readonly ArticleBodyBlock[];
  readonly links?: readonly WikiLink[];
  readonly table?: WikiTable;
};

export type ArticleSection = {
  readonly id: string;
  readonly title: string;
  readonly body: readonly ArticleBodyBlock[];
  readonly cards?: readonly WikiCard[];
  readonly links?: readonly WikiLink[];
  readonly subsections?: readonly ArticleSubsection[];
  readonly table?: WikiTable;
};

export type WikiTheme = "dark" | "light";

export type WikiImage = {
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
  readonly sourceLabel?: string;
  readonly sourceUrl?: string;
};

export type WikiAttribution = {
  /** Source wiki name, e.g. "나무위키". */
  readonly source: string;
  /** Canonical URL of the source article. */
  readonly sourceUrl: string;
  /** License short name, e.g. "CC BY-NC-SA 2.0 KR". */
  readonly license: string;
  /** License deed URL. */
  readonly licenseUrl: string;
  /** YYYY-MM-DD the content was retrieved. */
  readonly retrievedAt: string;
};

export type WikiArticle = {
  readonly slug: WikiSlug;
  readonly title: string;
  readonly modifiedAt: string;
  readonly categories: readonly WikiCategory[];
  readonly summary: string;
  readonly image?: WikiImage;
  readonly infobox: readonly InfoboxRow[];
  readonly sections: readonly ArticleSection[];
  /**
   * Present only on articles whose prose was imported from an external wiki
   * under a copyleft license (e.g. namuwiki, CC BY-NC-SA 2.0 KR). Drives the
   * source/license footer and suppresses commercial (patina) promos — the
   * NonCommercial clause forbids commercial-conversion CTAs on these pages.
   */
  readonly attribution?: WikiAttribution;
};

export type HomePanel = {
  readonly title: string;
  readonly items: readonly {
    readonly label: string;
    readonly href?: string;
    readonly description: string;
  }[];
};
