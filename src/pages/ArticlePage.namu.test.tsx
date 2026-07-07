import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { AppRoutes } from "../App";

describe("namuwiki external link (post-rollback)", () => {
  it("links to the namuwiki article without importing its content or license notice", () => {
    render(
      <MemoryRouter initialEntries={["/w/anthropics%2Fclaude-code"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // A plain external link to namuwiki is present (link-only, no CC obligation).
    const namuLink = screen.getByRole("link", { name: "나무위키 문서" });
    expect(namuLink).toHaveAttribute("href", "https://namu.wiki/w/Claude%20Code");

    // Rolled back: no imported-content license footer / SA notice anymore.
    expect(screen.queryByRole("link", { name: "원문 문서" })).toBeNull();
    expect(screen.queryByText(/CC BY-NC-SA/u)).toBeNull();
    expect(document.documentElement.dataset["ncLicense"]).toBeUndefined();
  });
});
