# Optimizing React demo 02
## Intro
This is a simple counter React app created for demonstating various performance related aspects.

## Start the app
- `npm install`
- `npm start`

## Demo flow
- Show app
- build and show package size
- `npm i moment`
- Import and call moment in `App.jsx`
- build and note package size grew three-fold
- generate stats file `npm run build.stats`
- Use https://chrisbateman.github.io/webpack-visualizer/ to analise bundle content
- Ignore moment locale files: `new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)`
- build and note package size is reasonable
