import viteConfig from "../vite.config";

describe("vite config", () => {
  it("ignores generated QA artifact directories while watching", () => {
    expect(viteConfig.server?.watch?.ignored).toEqual(
      expect.arrayContaining([
        "**/.omo/**",
        "**/dist/**",
        "**/node_modules/**",
        "**/playwright-report/**",
        "**/test-results/**",
        "**/tests/**",
      ]),
    );
    expect(viteConfig.server?.watch?.usePolling).toBe(true);
  });
});
