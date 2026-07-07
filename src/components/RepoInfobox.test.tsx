import { render, screen, within } from "@testing-library/react";

import type { InfoboxRow } from "../wiki/types";

import { RepoInfobox } from "./RepoInfobox";

const baseRows: readonly InfoboxRow[] = [
  { label: "Owner", value: "anthropics" },
  { label: "Repository", value: "claude-code" },
  { label: "Primary language", value: "Python / TypeScript" },
];

describe("RepoInfobox stars/forks row", () => {
  it("renders a plain 스타 / 포크 row with numbers only (no icons/badges)", () => {
    render(<RepoInfobox rows={baseRows} slug="anthropics/claude-code" title="claude-code" />);

    const infobox = screen.getByRole("table", { name: /repository information/i });
    const statsRow = within(infobox).getByRole("row", { name: /스타 \/ 포크/u });

    // value cell is numbers only: "<stars> / <forks>"
    expect(statsRow).toHaveTextContent(/136\.6k\s*\/\s*\d/u);
    // no icons / badges / as-of noise
    expect(statsRow).not.toHaveTextContent("⭐");
    expect(statsRow).not.toHaveTextContent("🍴");
    expect(statsRow).not.toHaveTextContent("기준");
  });

  it("omits the stars row for a slug without collected stats", () => {
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
    expect(within(infobox).queryByRole("row", { name: /스타 \/ 포크/u })).toBeNull();
  });
});
