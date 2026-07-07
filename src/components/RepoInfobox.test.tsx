import { render, screen, within } from "@testing-library/react";

import type { InfoboxRow } from "../wiki/types";

import { RepoInfobox } from "./RepoInfobox";

const baseRows: readonly InfoboxRow[] = [
  { label: "Owner", value: "anthropics" },
  { label: "Repository", value: "claude-code" },
  { label: "Primary language", value: "Python / TypeScript" },
];

describe("RepoInfobox stars/forks row", () => {
  it("injects a one-line stars/forks cell with emoji and an as-of date", () => {
    render(<RepoInfobox rows={baseRows} slug="anthropics/claude-code" title="claude-code" />);

    const infobox = screen.getByRole("table", { name: /repository information/i });
    const statsCell = within(infobox).getByText(/⭐/u);

    expect(statsCell).toHaveTextContent("136.6k");
    expect(statsCell).toHaveTextContent("🍴");
    expect(statsCell).toHaveTextContent("기준");
  });

  it("omits the stars cell for a slug without collected stats", () => {
    render(
      <RepoInfobox
        rows={[
          { label: "Owner", value: "owner" },
          { label: "Repository", value: "unknown-repo" },
        ]}
        slug="owner/unknown-repo"
        title="unknown-repo"
      />,
    );

    const infobox = screen.getByRole("table", { name: /repository information/i });
    expect(within(infobox).queryByText(/⭐/u)).toBeNull();
  });
});
