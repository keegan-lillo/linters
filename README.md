# @keegan-lillo/linters

Monorepo of various lint configurations I use for my personal projects.

## Choose Your Own Adventure

### Prettier

You will need [Prettier](https://prettier.io/) for both the ESLint and Stylelint
configs.

#### Install Prettier

```shell script
$ yarn add -D prettier
```

#### Using My Config

If you are not using your own Prettier config already, you can use mine. Just
create a new `.prettierrc` file at the root of your project with the following
content:

```json
"@keegan-lillo/prettier-config"
```

Then install the config:

```shell script
yarn add -D @keegan-lillo/prettier-config
```

### ESLint

#### Install ESLint

```shell script
$ yarn add -D eslint
```

#### Install the Config

There are 3 config packages available:

- `@keegan-lillo/eslint-config-base`
  - Enforces Prettier format
  - Enforces import/property ordering
- `@keegan-lillo/eslint-config-typescript`
  - Extends `@keegan-lillo/eslint-config-base` and
    `eslint-config-standard-with-typescript`
- `@keegan-lillo/eslint-config-typescript-typescript`
  - Extends `@keegan-lillo/eslint-config-typescript` and
    `eslint-config-standard-react`

```shell
yarn add -D @keegan-lillo/eslint-config-typescript-react
```

#### Use the Config

Add the following to your `.eslintrc`.

```json5
{
  extends: ['@keegan-lillo/typescript-react'],
  parserOptions: { project: './tsconfig.eslint.json' },
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

_**IMPORTANT!** These ESLint configs will auto-patch ESLint to make it less
annoying to install dependencies. You must make sure the config is first in the
`extends` array. I am using:
[@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch)
behind the scenes. If you don't want to have my configs first, then you will
need to following
[these](https://www.npmjs.com/package/@rushstack/eslint-patch#how-to-use-it)
instructions._

### Stylelint

Stylelint Config for SCSS with some very strict property ordering.

#### Installation

##### Install the dependencies

```shell
yarn add -D @keegan-lillo/stylelint-config-scss
```

##### Stylelint

Add the following to your `.stylelintrc`

```json
{
  "extends": ["@keegan-lillo/stylelint-config-scss"]
}
```
