require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:jest/recommended',
    '@keegan-lillo/eslint-config-base',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  plugins: ['typescript-sort-keys'],
  root: true,
  rules: {
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/prefer-nullish-coalescing': [
      'warn',
      {
        forceSuggestionFixer: true,
        ignoreConditionalTests: false,
        ignoreMixedLogicalExpressions: false,
      },
    ],
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'jest/no-deprecated-functions': 'off',
    'no-unused-expressions': 'off', // Fix for optional chaining
    'no-void': ['error', { allowAsStatement: true }],
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
  },
}
