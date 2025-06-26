import type { Config } from "orval";

import path from "node:path";

export default {
  backend: {
    input: {
      target: path.resolve(__dirname, "../backend/openapi.json"),
      parserOptions: {
        validate: false,
      },
    },
    output: {
      mode: "tags-split",
      baseUrl: process.env.VITE_PUBLIC_BACKEND_URL || "http://localhost:8000",
      target: path.resolve(__dirname, "./src/lib/api/_generated/api.ts"),
      schemas: path.resolve(__dirname, "./src/lib/api/_generated"),
      prettier: true,
      client: "react-query",
      clean: true,
      mock: true,
    },
  },
  zod: {
    input: {
      target: path.resolve(__dirname, "../backend/openapi.json"),
      parserOptions: {
        validate: false,
      },
    },
    output: {
      mode: "tags-split",
      baseUrl: process.env.VITE_PUBLIC_BACKEND_URL || "http://localhost:8000",
      target: path.resolve(__dirname, "./src/lib/api/_generated"),
      fileExtension: ".schema.ts",
      client: "zod",
      namingConvention: "PascalCase",
    },
  },
} satisfies Config;
