require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['prettier'],
  plugins: ['import', 'prettier', 'sort-destructure-keys', 'sort-keys-fix'],
  root: true,
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
    'prettier/prettier': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
  },
}
