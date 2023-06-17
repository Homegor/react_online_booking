module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["standard", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: [0, 2],
    semi: [2, "never"],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" }
    ],
    quotes: [
      "error",
      "double",
      { allowTemplateLiterals: true }
    ],
    "multiline-ternary": ["off"],
    "react/display-name": "off"
  }
}
