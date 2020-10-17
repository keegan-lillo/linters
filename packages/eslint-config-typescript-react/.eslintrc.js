require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    'standard-react',
    '@keegan-lillo/eslint-config-typescript',
    'prettier/react',
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
