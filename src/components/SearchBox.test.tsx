import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

import { AppRoutes } from "../App";

describe("SearchBox", () => {
  it("go navigates exact repository slug to canonical encoded article path", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    await user.type(screen.getByRole("searchbox"), "facebook/react");
    await user.click(screen.getByRole("button", { name: "이동" }));

    expect(screen.getByRole("heading", { name: "react" })).toBeVisible();
  });

  it("go navigates a sourced upstream slug to its article", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    await user.type(screen.getByRole("searchbox"), "Yeachan-Heo/oh-my-codex");
    await user.click(screen.getByRole("button", { name: "이동" }));

    expect(screen.getByRole("heading", { name: "oh-my-codex" })).toBeVisible();
  });

  it("searches upstream articles by docs-derived keywords", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    await user.type(screen.getByRole("searchbox"), "OpenAgent");
    await user.click(screen.getByRole("button", { name: "검색" }));

    expect(screen.getByRole("link", { name: "oh-my-openagent" })).toBeVisible();
  });

  it("does not navigate for an empty search query", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: "검색" }));

    expect(screen.getByRole("heading", { name: "Github.wiki:대문" })).toBeVisible();
  });
});
