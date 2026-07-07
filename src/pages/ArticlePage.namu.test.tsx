import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { AppRoutes } from "../App";

describe("namuwiki-sourced article", () => {
  it("renders the source + CC BY-NC-SA license footer for a converted article", () => {
    render(
      <MemoryRouter initialEntries={["/w/anthropics%2Fclaude-code"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    const sourceLink = screen.getByRole("link", { name: "원문 문서" });
    expect(sourceLink).toHaveAttribute("href", "https://namu.wiki/w/Claude%20Code");

    const licenseLink = screen.getByRole("link", { name: "CC BY-NC-SA 2.0 KR" });
    expect(licenseLink).toHaveAttribute(
      "href",
      "https://creativecommons.org/licenses/by-nc-sa/2.0/kr/",
    );

    // NC pages flag the document root so the header patina promo is hidden.
    expect(document.documentElement.dataset["ncLicense"]).toBe("1");
    // Converted prose is present.
    expect(screen.getAllByText(/TUI 인터페이스/u).length).toBeGreaterThan(0);
  });

  it("does not render a license footer for a self-authored article", () => {
    render(
      <MemoryRouter initialEntries={["/w/code-yeongyu%2Flazycodex"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    expect(screen.queryByRole("link", { name: "원문 문서" })).toBeNull();
  });
});
