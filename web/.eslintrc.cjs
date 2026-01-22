module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
        project: "./tsconfig.json"
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    rules: {
        "react/prop-types": 0,
        "@typescript-eslint/no-unused-vars": [
            "error", {
                argsIgnorePattern: "^_*",
                varsIgnorePattern: "^_*",
            }
        ],
        "@typescript-eslint/no-floating-promises": 1,
        "max-len": ["error", {code: 100}]
    },
};
