export default {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      classes: true,
      jsx: true,
      arrowFunctions: true,
    },
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    '@typescript-eslint',
    'prettier',
    'testing-library',
    'jest-dom',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'react-app',
    'plugin:prettier/recommended',

    // 'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['functions', 'arrowFunctions'] },
    ],

    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',

    'max-params': ['error', 5],
    'no-confusing-arrow': 0,
    'arrow-body-style': 0,
    'node/global-require': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', 'tsx'],
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false,
      },
    ],
    'react/no-deprecated': 1,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': 1,
    'react/no-unescaped-entities': 0,
    'react/jsx-no-target-blank': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'jsx-a11y/no-static-element-interactions': 0,
    'linebreak-style': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'import/extensions': ['off', 'never'],
    'import/no-unresolved': 'off',
    'class-methods-use-this': ['off'],
    'no-console': 0,
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
      },
    ],
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/anchor-is-valid': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debug': 'warn',
  },
};
