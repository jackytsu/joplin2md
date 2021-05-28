// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierConfig = require("./prettier.config.cjs");

module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ["airbnb-base", "prettier", "plugin:prettier/recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".cjs", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "prettier/prettier": ["warn", prettierConfig],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
    },
};
