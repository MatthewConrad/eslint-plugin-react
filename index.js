import eslint from "@eslint/js";
import { fixupPluginRules } from "@eslint/compat";

import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";

const plugin = {
  meta: {
    name: "@majaco/eslint-plugin-react",
    version: "1.0.0",
  },
  configs: {
    recommended: [
      ...tseslint.config(
        eslint.configs.recommended,
        tseslint.configs.recommended,
        reactPlugin.configs.flat.recommended,
        reactPlugin.configs.flat["jsx-runtime"],
        {
          plugins: { "react-hooks": fixupPluginRules(reactHooksPlugin) },
          rules: {
            ...reactHooksPlugin.configs.recommended.rules,
          },
        },
        jsxA11y.flatConfigs.recommended,
        eslintConfigPrettier
      ),
      {
        rules: {
          "react/prop-types": 0,
          "react/display-name": 0,
          "react-hooks/rules-of-hooks": "error",
          "react-hooks/exhaustive-deps": "error",
          "@typescript-eslint/no-unused-vars": [
            "error",
            { argsIgnorePattern: "^_|", varsIgnorePattern: "^_" },
          ],
          // Addresses a common problem when extending interfaces
          "@typescript-eslint/no-empty-interface": 0,
          "@typescript-eslint/no-empty-object-type": [
            "error",
            { allowInterfaces: "always" },
          ],
          "eol-last": ["error", "always"],
          "no-console": ["error", { allow: ["warn", "error"] }],
          "no-multiple-empty-lines": [2, { max: 2, maxEOF: 1 }],
          "no-trailing-spaces": [2, { skipBlankLines: true }],
        },
        settings: {
          react: {
            version: "detect",
          },
        },
      },
    ],
  },
  processors: {},
};

export default plugin;
