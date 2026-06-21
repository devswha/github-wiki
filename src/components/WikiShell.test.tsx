import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

import { AppRoutes } from "../App";

describe("WikiShell", () => {
  beforeEach(() => {
    document.documentElement.removeAttribute("data-theme");
    window.localStorage.clear();
  });

  it("renders wiki shell landmarks and navigation controls", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    expect(screen.getByRole("banner")).toBeVisible();
    const primaryNavigation = screen.getByRole("navigation", { name: "주요 메뉴" });

    expect(primaryNavigation).toBeVisible();
    expect(screen.queryByRole("region", { name: "patina 저장소 홍보" })).not.toBeInTheDocument();
    expect(
      within(primaryNavigation).getByRole("link", { name: "devswha/patina GitHub Star 찍기" }),
    ).toHaveAttribute(
      "href",
      "https://github.com/devswha/patina",
    );
    expect(screen.getByRole("searchbox")).toBeVisible();
    expect(screen.getByRole("button", { name: "검색" })).toBeVisible();
    expect(screen.getByRole("button", { name: "이동" })).toBeVisible();
    expect(screen.getByRole("complementary", { name: "위키 보조 정보" })).toBeVisible();
    expect(screen.getByRole("contentinfo")).toBeVisible();
  });

  it("toggles and persists night mode from the header", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: "나이트 모드" }));

    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(window.localStorage.getItem("github-wiki-theme")).toBe("dark");
    expect(screen.getByRole("button", { name: "라이트 모드" })).toBeVisible();
  });
});
