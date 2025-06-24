import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintBaseConfig from "./eslintBase.mjs";

export default defineConfig([
  ...eslintBaseConfig,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
]);
