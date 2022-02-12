# Restaurants near me app

## ts-loader

- `ts-loader` uses `tsc`, the **TypeScript compiler**, and relies on your `tsconfig.json`
  configuration. Make sure to avoid setting module to "CommonJS", or webpack won't be able to
  tree-shake your code.
- [Read more about `ts-loader` here](https://webpack.js.org/guides/typescript/#loader)
