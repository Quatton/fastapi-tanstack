import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";

import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackRouter({ autoCodeSplitting: true }),
    viteReact(),
    tsConfigPaths(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
