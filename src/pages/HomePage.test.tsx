import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { AppRoutes } from "../App";

describe("HomePage", () => {
  it("renders main wiki panels from fixture data", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "Github.wiki:대문" })).toBeVisible();
    expect(screen.getByText("최근 편집된 저장소")).toBeVisible();
    expect(
      within(screen.getByRole("article")).getByRole("link", { name: "facebook/react" }),
    ).toHaveAttribute("href", "/w/facebook%2Freact");
  });

  it("links every sourced upstream repository from the recent panel", () => {
    // Given
    const expectedLinks = [
      ["NousResearch/hermes-agent", "/w/NousResearch%2Fhermes-agent"],
      ["Yeachan-Heo/gajae-code", "/w/Yeachan-Heo%2Fgajae-code"],
      ["code-yeongyu/lazycodex", "/w/code-yeongyu%2Flazycodex"],
      ["Yeachan-Heo/oh-my-claudecode", "/w/Yeachan-Heo%2Foh-my-claudecode"],
      ["Yeachan-Heo/oh-my-codex", "/w/Yeachan-Heo%2Foh-my-codex"],
      ["code-yeongyu/oh-my-openagent", "/w/code-yeongyu%2Foh-my-openagent"],
    ] as const;

    // When
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // Then
    const article = screen.getByRole("article");
    for (const [label, href] of expectedLinks) {
      expect(within(article).getByRole("link", { name: label })).toHaveAttribute(
        "href",
        href,
      );
    }
  });
});
