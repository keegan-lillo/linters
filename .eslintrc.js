module.exports = {
  extends: ['@keegan-lillo/eslint-config-typescript-react'],
  ignorePatterns: ['!**/.*rc.js'],
  parserOptions: { project: './tsconfig.json' },
}
