module.exports = {
  extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],
  env: {
    es2024: true,
  },
  // Report unused `eslint-disable` comments.
  reportUnusedDisableDirectives: true,
  // Tell ESLint not to ignore dot-files, which are ignored by default.
  ignorePatterns: ['!.*.js'],
  // Global settings used by all overrides.
  settings: {
    // Use the Node resolver by default.
    'import/resolver': { node: {} },
  },
  // Global parser options.
  parserOptions: {
    ecmaVersion: '2024',
    sourceType: 'module',
  },
};
