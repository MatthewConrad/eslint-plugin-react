# eslint-plugin-react

Plugin of preferred ESLint rules for React projects.

This includes:

- Extension of:
  - `eslint:recommended`
  - `@typescript-eslint/recommended`
  - `react/recommended`
  - `react-hooks`
  - `jsx-a11y/recommended`
  - `prettier`
- A small set of additional rules.

## Prerequisites

To use the latest version of the package, you must already have ESLint version 9 installed in your project.

While not required, for consistency it would be best to use this in conjunction with Prettier (and don't forget to include a `.prettierrc` JSON or equivalent configuration, even if it's empty).

## Usage

Install the package:

```
npm i --save-dev @majaco/eslint-plugin-react
```

Then, import the package and include its config in your own:

```
// eslint.config.js

import majacoReact from "@majaco/eslint-plugin-react";

export default [
  ...majacoReact.configs.recommended,
  {
    // your local project config
  }
]
```
