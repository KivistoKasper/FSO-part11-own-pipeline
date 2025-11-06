import globals from "globals";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
  {ignores: ["node_modules/**", "dist/**", "frontend/**"]},
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
]);
