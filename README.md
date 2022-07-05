# pnpm single version

Enforce Single version of dependencies on pnpm workspace.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Installation

```bash
pnpm add -D pnpm-single-version
```

## Usage

Add following options to `package.json` in project root

```json5
"pnpmSingleVersion": {
    "include": [
        // Place all the single version dependencies here
        "@babel/core",
        "esbuild",
        // glob is also supported
        "eslint-plugin-*",
        "*-plugin",
    ]
}
```

### Maunal Checking using CLI

You can `pnpm-single-version` in Terminal

```bash
pnpm pnpm-single-version
```

### Another way

Apart from cli command, you also able to check single version of dependencies when `pnpm-lock.yaml` is resolved. This is much effective way than checking manually.

pnpm provide a way to hook directly into installation process using `.pnpmfile.cjs`, by using `afterAllResolved` hook,  installation process can be interrupted when non-single version dependencies is detected. 

1. First create a `.pnpmfile.cjs` in root directory of your monorepo if your dont have one.

2. Added following code to your `.pnpmfile.cjs` 
   
   ```js
   module.exports = {
       hooks: {
           afterAllResolved: (() => {
               try {
                   require.resolve("pnpm-single-version");
                   return require("pnpm-single-version").checkSingleVersion;
               } catch {
                   return undefined;
               }
           })(),
       },
   }
   ```

So now when you call `pnpm install` and `pnpm update`, checking is going to be involved automatically only when you have dependenices changes.

More about `.pnpmfile.cjs` at https://pnpm.io/pnpmfile

#### Known Caveats

Hook method is not working before `node_modules` are installed, so you may need to manually run `pnpm-single-version` after first `pnpm install`.
