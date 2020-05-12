module.exports = {
  extends: [
    'standard-react',
    '@keegan-lillo/eslint-config-typescript',
    'prettier/react',
  ],
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
  },
}
