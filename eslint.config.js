module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react-hooks", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  env: {
    browser: true,
    es2020: true,
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
