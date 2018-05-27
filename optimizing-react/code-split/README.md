# Optimizing React demo 01
## Intro
This is a simple React app created for demonstating various performance related aspects.
This repo demonstrates code lazy loading

## Main parts
### `App`
Basic app with a router

### `DynamicImport`
A component that manages async loading of other components

## Start the app
- `npm install`
- `npm start`

## Demo Flow
- Run the app
- Note a single bundle is created
- Note a single bundle loaded
- Enable lazy loading in code
- Note multiple bundles created
- Note bundles are loaded when required
- Optional: throttle network to note 'loading' indicator
