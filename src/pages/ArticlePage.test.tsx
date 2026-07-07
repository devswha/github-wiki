import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

import { AppRoutes } from "../App";

describe("ArticlePage", () => {
  it("renders repository infobox and article sections", () => {
    // Given
    const route = "/w/facebook%2Freact";

    // When
    render(
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // Then
    expect(screen.getByRole("heading", { name: "react" })).toBeVisible();
    expect(screen.getByText("분류")).toBeVisible();
    const infobox = screen.getByRole("table", { name: /repository information/i });
    expect(infobox).toBeVisible();
    expect(within(infobox).getByRole("row", { name: /개발자 facebook/u })).toBeVisible();
    expect(within(infobox).getByRole("row", { name: /저장소 react/u })).toBeVisible();
    expect(within(infobox).getByRole("link", { name: "facebook" })).toHaveAttribute(
      "href",
      "https://github.com/facebook",
    );
    expect(within(infobox).getByRole("link", { name: "react" })).toHaveAttribute(
      "href",
      "https://github.com/facebook/react",
    );
    expect(within(infobox).getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/facebook/react",
    );
    expect(within(infobox).queryByRole("link", { name: "릴리스" })).not.toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "목차" })).toBeVisible();
  });

  it("renders the patina repo-name heading and repository icon", () => {
    // Given
    const route = "/w/devswha%2Fpatina";

    // When
    render(
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // Then
    const infobox = screen.getByRole("table", { name: /repository information/i });
    expect(screen.getByRole("heading", { level: 1, name: "patina" })).toBeVisible();
    expect(
      within(infobox).getByRole("img", { name: "patina repository icon" }),
    ).toBeVisible();
    expect(within(infobox).getByRole("row", { name: /개발자 devswha/u })).toBeVisible();
    expect(within(infobox).getByRole("row", { name: /저장소 patina/u })).toBeVisible();
    expect(within(infobox).getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/devswha/patina",
    );
    expect(within(infobox).getByRole("link", { name: "공식 사이트" })).toHaveAttribute(
      "href",
      "https://patina.vibetip.help?utm_source=github-wiki&utm_medium=wiki&utm_campaign=vibetip",
    );
    expect(infobox).not.toHaveTextContent("성격");
    expect(infobox).not.toHaveTextContent("패키지");
    expect(within(infobox).queryByRole("link", { name: "npm" })).not.toBeInTheDocument();
    expect(within(infobox).queryByRole("link", { name: "patina-cli" })).not.toBeInTheDocument();
    expect(infobox).not.toHaveTextContent("패키지 버전");
    expect(infobox).not.toHaveTextContent("npm 최신");
    expect(infobox).not.toHaveTextContent("GitHub 릴리스");
    expect(infobox).not.toHaveTextContent("GitHub repository icon");
    expect(infobox).not.toHaveTextContent("assets/brand/patina-icon.svg");
  });

  it("renders the lazycodex repo-name heading and parsed repository logo", () => {
    // Given
    const route = "/w/code-yeongyu%2Flazycodex";

    // When
    render(
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // Then
    const infobox = screen.getByRole("table", { name: /repository information/i });
    expect(
      screen.getByRole("heading", { level: 1, name: "lazycodex" }),
    ).toBeVisible();
    expect(
      within(infobox).getByRole("img", { name: "lazycodex repository logo" }),
    ).toBeVisible();
    expect(within(infobox).getByRole("row", { name: /개발자 code-yeongyu/u })).toBeVisible();
    expect(within(infobox).getByRole("row", { name: /저장소 lazycodex/u })).toBeVisible();
    expect(within(infobox).getByRole("link", { name: "공식 사이트" })).toHaveAttribute(
      "href",
      "https://lazycodex.ai",
    );
    expect(infobox).not.toHaveTextContent("성격");
    expect(infobox).not.toHaveTextContent("패키지");
    expect(within(infobox).queryByRole("link", { name: "npm" })).not.toBeInTheDocument();
    expect(within(infobox).queryByRole("link", { name: "lazycodex-ai" })).not.toBeInTheDocument();
    expect(infobox).not.toHaveTextContent("기본 브랜치");
    expect(infobox).not.toHaveTextContent("패키지 버전");
    expect(infobox).not.toHaveTextContent("npm 최신");
    expect(infobox).not.toHaveTextContent("GitHub 릴리스");
    expect(infobox).not.toHaveTextContent("GitHub repository icon");
  });

  it("moves to the matching section when a table of contents link is clicked", async () => {
    // Given
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/w/facebook%2Freact"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // When
    await user.click(
      within(screen.getByRole("navigation", { name: "목차" })).getByRole("link", {
        name: /구조/,
      }),
    );

    // Then
    expect(window.location.hash).toBe("#structure");
  });

  it("renders section hash links and rich wiki body blocks", async () => {
    // Given
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/w/devswha%2Fpatina"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    const toc = screen.getByRole("navigation", { name: "목차" });
    const overviewHeading = screen.getByRole("heading", { level: 2, name: /개요/u });

    // When
    await user.click(within(overviewHeading).getByRole("link", { name: "1." }));

    // Then
    expect(window.location.hash).toBe("#overview");
    expect(within(toc).getByRole("link", { name: "개요" })).toBeVisible();
    expect(within(toc).queryByRole("link", { name: "1. 개요" })).not.toBeInTheDocument();
    expect(overviewHeading).toHaveTextContent(/^1\. 개요$/u);
    expect(within(overviewHeading).getByRole("link", { name: "1." })).toHaveClass(
      "section-number-link",
    );
    expect(screen.getByRole("link", { name: "GitHub 저장소" })).toHaveClass(
      "article-link-external",
    );
    expect(screen.getByRole("link", { name: "특징 문단" })).toHaveClass(
      "article-link-internal",
    );
    expect(screen.getByRole("link", { name: "없는 문서 예시" })).toHaveClass(
      "article-link-missing",
    );
    expect(screen.getByRole("table", { name: "patina 기능 요약" })).toBeVisible();
    expect(screen.getByRole("heading", { level: 3, name: "감사 모드" })).toBeVisible();
    expect(screen.getByRole("heading", { level: 3, name: "재작성 모드" })).toBeVisible();
  });

  it("renders readable body lists while preserving prose paragraphs", () => {
    // Given
    render(
      <MemoryRouter initialEntries={["/w/devswha%2Fpatina"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // When
    const usageList = screen.getByRole("list", { name: "patina 사용 흐름" });
    const proseParagraph = screen.getByText(/^patina는 AI가 쓴 것처럼 보이는/u);

    // Then
    expect(proseParagraph.tagName).toBe("P");
    expect(within(usageList).getByText(/언어와 프로필을 고른다/u)).toBeVisible();
    expect(within(usageList).getByText(/audit이나 score로 의심 구간을 확인한다/u)).toBeVisible();
    expect(within(usageList).getByText(/rewrite는 의미 앵커를 확인한 뒤 적용한다/u)).toBeVisible();
    expect(screen.getByRole("list", { name: "patina 사용 제한" })).toBeVisible();
  });

  it("renders lazycodex use cases as a body list", () => {
    // Given
    render(
      <MemoryRouter initialEntries={["/w/code-yeongyu%2Flazycodex"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // When
    const useCaseList = screen.getByRole("list", { name: "LazyCodex 주요 사용처" });

    // Then
    expect(within(useCaseList).getByText(/큰 레포/u)).toBeVisible();
    expect(within(useCaseList).getByText(/장기 작업/u)).toBeVisible();
    expect(within(useCaseList).getByText(/검증 기준이 중요한 작업/u)).toBeVisible();
  });
});
