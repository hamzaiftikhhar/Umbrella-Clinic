import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

const nextCoreWebVitals = nextPlugin.flatConfig?.coreWebVitals ?? {
  name: "next/core-web-vitals",
  plugins: { "@next/next": nextPlugin },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,
  },
};

export default tseslint.config(
  { ignores: [".next", "next-env.d.ts", "node_modules", "dist", ".output", "scripts"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  nextCoreWebVitals,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  eslintPluginPrettier,
);
