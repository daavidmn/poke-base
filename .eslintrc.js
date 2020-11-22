module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:vue/essential", "standard", "prettier", "prettier/vue"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": "error"
  }
};
