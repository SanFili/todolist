module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["react-app", "airbnb-typescript", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint", "simple-import-sort", "promise", "prettier"],
  rules: {
    "no-console": ["warn", { allow: ["error"] }],
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/naming-convention": [
      "off",
      {
        selector: "default",
        format: null,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { varsIgnorePattern: "[rR]eact" },
    ],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: ["Label"],
        labelAttributes: ["label"],
        controlComponents: ["TextInput"],
        depth: 3,
      },
    ],
    "react/button-has-type": "off",
    "react/jsx-key": ["error", { checkFragmentShorthand: true }],
    "react/jsx-curly-newline": "off",
    "react/no-array-index-key": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-indent": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "eslint-comments/no-unused-disable": "off",
    "simple-import-sort/imports": "warn",
    "react/jsx-wrap-multilines": "off",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-unresolved": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/comma-dangle": "off",
    "react/no-unused-prop-types": "off",
    "react/forbid-prop-types": "off",
  },

  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: ".",
    createDefaultProgram: true,
  },
  reportUnusedDisableDirectives: false,
};
