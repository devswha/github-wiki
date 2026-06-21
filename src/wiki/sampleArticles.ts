import type { WikiArticle } from "./types";

export const sampleArticles = [
  {
    slug: "Github.wiki",
    title: "Github.wiki",
    modifiedAt: "2026-06-04T06:00:00.000Z",
    categories: [
      { label: "프로젝트", path: "/w/category/project" },
      { label: "위키", path: "/w/category/wiki" },
    ],
    summary:
      "Github.wiki explains repositories in a compact wiki format so readers can scan purpose, structure, and maintenance notes.",
    infobox: [
      { label: "Owner", value: "github-wiki" },
      { label: "Repository", value: "github-wiki" },
      { label: "Primary language", value: "TypeScript" },
      { label: "License", value: "Sample" },
      { label: "Links", value: "" },
    ],
    sections: [
      {
        id: "overview",
        title: "개요",
        body: [
          "Github.wiki is the sample home article for the repository wiki scaffold.",
        ],
      },
      {
        id: "structure",
        title: "구조",
        body: [
          "The scaffold keeps article metadata, infobox rows, and sections in typed local data.",
        ],
      },
      {
        id: "future-content",
        title: "향후 작성",
        body: [
          "Future generated pages can replace this fixture data without changing the page components.",
        ],
      },
    ],
  },
  {
    slug: "facebook/react",
    title: "react",
    modifiedAt: "2026-06-04T06:05:00.000Z",
    categories: [
      { label: "JavaScript 라이브러리", path: "/w/category/javascript-library" },
      { label: "UI 프레임워크", path: "/w/category/ui-framework" },
    ],
    summary:
      "A sample repository article that demonstrates how a popular UI project could be summarized in Github.wiki.",
    infobox: [
      { label: "Owner", value: "facebook" },
      { label: "Repository", value: "react" },
      { label: "Primary language", value: "JavaScript / TypeScript" },
      { label: "License", value: "Sample license field" },
      { label: "Links", value: "" },
    ],
    sections: [
      {
        id: "overview",
        title: "개요",
        body: [
          "This page is original sample content for layout and routing verification.",
          "It does not fetch or claim live GitHub repository statistics.",
        ],
      },
      {
        id: "structure",
        title: "구조",
        body: [
          "Repository pages combine a title area, categories, an infobox, a table of contents, and article sections.",
        ],
      },
      {
        id: "maintenance",
        title: "운영",
        body: [
          "Maintenance notes can later be generated from a writing pipeline while keeping this typed article contract.",
        ],
      },
    ],
  },
  {
    slug: "very-long-owner-name/very-long-repository-name-that-wraps",
    title: "very-long-repository-name-that-wraps",
    modifiedAt: "2026-06-04T06:10:00.000Z",
    categories: [
      { label: "레이아웃 테스트", path: "/w/category/layout-test" },
      { label: "긴 저장소 이름", path: "/w/category/long-repository-name" },
    ],
    summary:
      "A stress article for verifying long repository names, category wrapping, and mobile infobox stacking.",
    infobox: [
      { label: "Owner", value: "very-long-owner-name" },
      {
        label: "Repository",
        value: "very-long-repository-name-that-wraps",
      },
      { label: "Primary language", value: "Sample" },
      { label: "License", value: "Sample" },
      { label: "Links", value: "" },
    ],
    sections: [
      {
        id: "overview",
        title: "개요",
        body: [
          "This article exists to make text wrapping and responsive layout problems observable.",
        ],
      },
      {
        id: "structure",
        title: "구조",
        body: [
          "The long slug should remain readable without horizontal page overflow.",
        ],
      },
      {
        id: "mobile",
        title: "모바일",
        body: [
          "On narrow screens the repository infobox should stack with the article body instead of overlapping it.",
        ],
      },
    ],
  },
] satisfies readonly WikiArticle[];
