import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tsConfigPaths(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
