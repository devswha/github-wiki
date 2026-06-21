import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { AppRoutes } from "./App";

describe("wiki routes", () => {
  it("renders repository article for encoded owner repo slug", () => {
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
  });

  it("renders the patina article title for its encoded owner repo slug", () => {
    // Given
    const route = "/w/devswha%2Fpatina";

    // When
    render(
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // Then
    expect(screen.getByRole("heading", { level: 1, name: "patina" })).toBeVisible();
  });

  it.each([
    ["/w/Yeachan-Heo%2Fgajae-code", "gajae-code"],
    ["/w/code-yeongyu%2Flazycodex", "lazycodex"],
    ["/w/Yeachan-Heo%2Foh-my-claudecode", "oh-my-claudecode"],
    ["/w/Yeachan-Heo%2Foh-my-codex", "oh-my-codex"],
    ["/w/code-yeongyu%2Foh-my-openagent", "oh-my-openagent"],
  ])("renders sourced upstream article route %s", (route, title) => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // Then
    expect(screen.getByRole("heading", { level: 1, name: title })).toBeVisible();
  });

  it("renders a not-found article inside the shell for missing pages", () => {
    // Given
    const route = "/w/nope";

    // When
    render(
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // Then
    expect(screen.getByText("문서를 찾을 수 없습니다")).toBeVisible();
    expect(screen.getByRole("banner")).toBeVisible();
  });
});
