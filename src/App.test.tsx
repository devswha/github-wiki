import { render, screen, within } from "@testing-library/react";

import { App } from "./App";

describe("App", () => {
  it("renders Github.wiki shell when the app boots", () => {
    render(<App />);

    const mainNavigation = screen.getByRole("navigation", { name: "주요 메뉴" });

    expect(
      within(mainNavigation).getByRole("link", { name: "Github.wiki" }),
    ).toBeInTheDocument();
  });
});
