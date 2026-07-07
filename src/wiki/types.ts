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


export type WikiArticle = {
  readonly slug: WikiSlug;
  readonly title: string;
  readonly modifiedAt: string;
  readonly categories: readonly WikiCategory[];
  readonly summary: string;
  readonly image?: WikiImage;
  readonly infobox: readonly InfoboxRow[];
  readonly sections: readonly ArticleSection[];
};

export type HomePanel = {
  readonly title: string;
  readonly items: readonly {
    readonly label: string;
    readonly href?: string;
    readonly description: string;
  }[];
};
