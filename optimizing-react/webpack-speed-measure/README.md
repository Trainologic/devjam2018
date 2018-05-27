# Optimizing React demo 04
## Intro
This is a simple React app created for demonstating various performance related aspects.

## Start the app
- `npm install`
- `npm start`

## Demo flow
- Build the app
- Note that the build time is very long
- Install and configure speed-measure-webpack-plugin
    `npm i speed-measure-webpack-plugin`
    ```javascript
       const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

       const smp = new SpeedMeasurePlugin({ disable: false});

       module.exports = smp.wrap({
    ```
- Build the app, note which loader takes a long time
- Check `webpack.config.js` and fix to ignore `node_modules`
- Optional: configure `babel-loader` with `loader: babel-loader?cacheDirectory=true`
