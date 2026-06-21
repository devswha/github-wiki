import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "github-wiki-static-asset-404",
      configureServer(server) {
        server.middlewares.use((request, response, next) => {
          const requestUrl = request.url ?? "";

          if (requestUrl.startsWith("/assets/")) {
            response.statusCode = 404;
            response.end("Not found");
            return;
          }

          next();
        });
      },
    },
  ],
  server: {
    watch: {
      ignored: [
        "**/.git/**",
        "**/.omo/**",
        "**/dist/**",
        "**/node_modules/**",
        "**/playwright-report/**",
        "**/test-results/**",
        "**/tests/**",
      ],
      usePolling: true,
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    setupFiles: ["./src/test/setup.ts"],
  },
});
