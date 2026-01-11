import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import configPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import * as globals from "globals";

export default [
    js.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    ...pluginVue.configs["flat/strongly-recommended"],
    ...pluginVue.configs["flat/recommended"],
    {
        ignores: [
            "node_modules/**",
            "dist/**",
            ".output/**",
            ".nuxt/**",
            ".nitro/**",
            ".cache/**",
            "coverage/**",
            "*.min.js",
            ".env.*",
            "!.env.example",
        ],
    },
    {
        files: ["**/*.vue", "**/*.ts", "**/*.js"],
        languageOptions: {
            parser: pluginVue.parser,
            parserOptions: {
                parser: tsParser,
                ecmaVersion: "latest",
                sourceType: "module",
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
                defineNuxtConfig: "readonly",
                ref: "readonly",
                computed: "readonly",
                watch: "readonly",
                onMounted: "readonly",
                onUnmounted: "readonly",
                nextTick: "readonly",
                useHead: "readonly",
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            prettier: pluginPrettier,
        },
        rules: {
            "prettier/prettier": ["warn", { usePrettierrc: true }],
            "vue/multi-word-component-names": "warn",
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/explicit-module-boundary-types": "error",
            "@typescript-eslint/no-non-null-assertion": "error",
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-debugger": "error",
            "no-var": "error",
            "prefer-const": "error",
            eqeqeq: ["error", "always"],
            curly: ["error", "all"],
            "no-throw-literal": "error",
            "prefer-promise-reject-errors": "error",
        },
    },
    configPrettier,
];
