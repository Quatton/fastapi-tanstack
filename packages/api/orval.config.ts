import type { Config } from "orval";

import path from "node:path";

export default {
  backend: {
    input: {
      target: path.resolve(__dirname, "../../backend/openapi.json"),
      parserOptions: {
        validate: false,
      },
    },
    output: {
      mode: "tags-split",
      target: path.resolve(__dirname, "./src/api.ts"),
      schemas: path.resolve(__dirname, "./src"),
      prettier: true,
      client: "react-query",
      clean: true,
      mock: true,
    },
  },
} satisfies Config;
