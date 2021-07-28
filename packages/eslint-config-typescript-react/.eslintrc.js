require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    'standard-jsx',
    'standard-react',
    'plugin:jsx-a11y/recommended',
    '@keegan-lillo/eslint-config-typescript',
    'prettier',
  ],
  plugins: ['react-hooks'],
  root: true,
  rules: {
    'react/prop-types': 'off',
    'react/require-default-props': [
      'error',
      { ignoreFunctionalComponents: true },
    ],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'lifecycle',
          'getters',
          'setters',
          'instance-variables',
          'instance-methods',
          'everything-else',
          'render',
        ],
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
}
