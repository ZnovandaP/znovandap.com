import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["**/dist", "**/build", "**/next.config.js"]), {
    extends: [
        ...nextCoreWebVitals,
        ...compat.extends("airbnb"),
        ...compat.extends("airbnb-typescript")
    ],

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },

    rules: {
        "react/jsx-props-no-spreading": 0,
        "react/require-default-props": 0,
        "@typescript-eslint/no-unused-vars": 1,
        "import/no-extraneous-dependencies": 0,
        "linebreak-style": "off",
        "max-len": "off",
    },
}]);