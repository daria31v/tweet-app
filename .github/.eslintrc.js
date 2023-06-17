module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ["standard", "prettier"],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {},
  settings: {
    react: {
      version: "detect"
    }
  },

  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: false
      }
    }
  }
};
