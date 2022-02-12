# Starter project using TypeScript and Webpack

## Run the project

1. `npm install` to install all the repo dependencies.
2. `npm run start` to start the app. This script deletes Webpack generated
   `dist/` folder and then uses Webpack to regenerate it again.

## Change the port

The project will start running on port 9000. If you want to change the port
open `webpack.config.js` and find the `port:9000` and change it from there.

```javascript
module.exports = {
  ...
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port:9000
  }
}
```

## Run unit tests

- `npm run test` if you want to run one test.
- `npm run test-watch` if you want to keep running the tests.

## ts-loader

- `ts-loader` uses `tsc`, the **TypeScript compiler**, and relies on
  your `tsconfig.json`
  configuration. Make sure to avoid setting module to "CommonJS", or webpack
  won't be able to tree-shake your code.
- [Read more about `ts-loader` here](https://webpack.js.org/guides/typescript/#loader)
