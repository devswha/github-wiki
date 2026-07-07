import { render } from "@testing-library/react";

import { siteOrigin } from "../wiki/meta";

import { PageMeta } from "./PageMeta";

describe("PageMeta", () => {
  it("hoists per-page title, description, canonical, and Open Graph tags into the head", () => {
    render(
      <PageMeta
        title="patina - Github.wiki"
        description="AI 글쓰기 휴머나이저"
        path="/w/devswha%2Fpatina"
        image="https://example.com/icon.svg"
        type="article"
      />,
    );

    expect(document.title).toBe("patina - Github.wiki");

    const description = document.head.querySelector('meta[name="description"]');
    expect(description?.getAttribute("content")).toBe("AI 글쓰기 휴머나이저");

    const canonical = document.head.querySelector('link[rel="canonical"]');
    expect(canonical?.getAttribute("href")).toBe(
      `${siteOrigin}/w/devswha%2Fpatina`,
    );

    const ogTitle = document.head.querySelector('meta[property="og:title"]');
    expect(ogTitle?.getAttribute("content")).toBe("patina - Github.wiki");

    const ogType = document.head.querySelector('meta[property="og:type"]');
    expect(ogType?.getAttribute("content")).toBe("article");

    const ogImage = document.head.querySelector('meta[property="og:image"]');
    expect(ogImage?.getAttribute("content")).toBe("https://example.com/icon.svg");

    const twitterCard = document.head.querySelector('meta[name="twitter:card"]');
    expect(twitterCard?.getAttribute("content")).toBe("summary_large_image");
  });

  it("marks not-found style pages as noindex and omits image tags without an image", () => {
    render(
      <PageMeta
        title="문서를 찾을 수 없습니다 - Github.wiki"
        description="없는 문서"
        path="/"
        noindex
      />,
    );

    const robots = document.head.querySelector('meta[name="robots"]');
    expect(robots?.getAttribute("content")).toBe("noindex, follow");

    const twitterCard = document.head.querySelector('meta[name="twitter:card"]');
    expect(twitterCard?.getAttribute("content")).toBe("summary");

    expect(document.head.querySelector('meta[property="og:image"]')).toBeNull();
  });
});
