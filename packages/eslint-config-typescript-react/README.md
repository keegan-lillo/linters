# @keegan-lillo/eslint-config-typescript-react

ESLint Config for React Typescript projects.

## Installation

### 1. Install the dependencies

```shell
yarn add -D \
@keegan-lillo/eslint-config-typescript-react \
eslint \
prettier \
typescript

```

### 2. Eslint

Add the following to your `.eslintrc`

#### .eslintrc

```json
{
  "extends": ["@keegan-lillo/typescript-react"],
  "parserOptions": { "project": "./tsconfig.json" }
}
```

`parserOptions.project` is necessary for most of the Typescript rules. If your
project contains files covered by eslint but not by your `tsconfig.json`, you
can create another file such as `tsconfig.eslint.json` and point
`parserOptions.project` at it instead. Then in this file you can exclude/include
all the files that will be covered by ESLint.

#### tsconfig.eslint.json

```json
{
  "extends": "./tsconfig.json",
  "include": ["path/to/all/eslint/files"]
}
```

### 3. Prettier

If you wish to use the prettier config, you can add the following to your
`index.js`

```js
module.exports = require('@keegan-lillo/eslint-config-typescript-react/.prettierrc')
```
