// eslint.config.js
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginReactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
  // --- 1. Ignores Globaux ---
  {
    ignores: ["dist/**", "node_modules/**", "backend/**", ".vite/**"],
  },

  // --- 2. Fichiers de configuration Node.js (comme vite.config.ts) ---
  {
    files: ["vite.config.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.node.json"],
        ecmaVersion: "latest",
      },
      globals: { ...globals.node },
    },
    // ---- CORRECTION 1 : AJOUT DE CE BLOC PLUGINS ----
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },

  // --- 3. Fichiers de code source React (Votre Application) ---
  {
    files: ["src/**/*.{ts,tsx,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.app.json"],
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser, ...globals.es2020 },
    },
    plugins: {
      // ---- CORRECTION 2 : AJOUT DE CETTE LIGNE ----
      "@typescript-eslint": tseslint.plugin,
      
      "react": pluginReact,
      "react-hooks": pluginHooks,
      "jsx-a11y": pluginJsxA11y,
      "react-refresh": pluginReactRefresh,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginHooks.configs.recommended.rules,
      ...pluginJsxA11y.configs.recommended.rules,
      
      "react-refresh/only-export-components": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // --- 4. Fichiers de configuration JavaScript (comme eslint.config.js) ---
  {
    files: ["eslint.config.js"], 
    languageOptions: {
      globals: { ...globals.node },
    },
  }
);