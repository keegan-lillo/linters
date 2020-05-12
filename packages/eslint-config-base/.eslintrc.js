module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['import', 'sort-keys-fix'],
  rules: {
    'import/order': [
      'error',
      {
        'alphabetize': { caseInsensitive: true, order: 'asc' },
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'unknown',
          'index',
        ],
        'newlines-between': 'always',
        'pathGroups': [
          {
            group: 'index',
            pattern: './*.+(css|scss|sass|less)',
            position: 'after',
          },
        ],
      },
    ],
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
  },
}
