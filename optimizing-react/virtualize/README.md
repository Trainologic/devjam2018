# Optimizing React demo 01
## Intro
This is a simple React app created for demonstating various performance related aspects.

## Main parts
### `ListContainer`
Manage the data

### `List`
Renders the data

### `ListV`
Renders the data using a virtualized list

### `ListItem`
Renders a single list item

## Start the app
- `npm install`
- `npm start`

## Phase 01: PureComponent
- Open the app
- Try to add 1 item, see it takes a long time
- Open devtools and analyze performance - note that all `ListItem`s get rendered for no reason
- Change `ListItem` to extend `PureComponent`
- See that performance improved
- See that only the new `ListItem` gets rendered

## Phase 02: PureComponent is brittle
- Add inline style object to `ListItem`
- See that performance is back to square one
- Add the style as static object
- See that performance is better once more

## Phase 03: Virtualization
- Show performance is still problematic for actions involving all items (add star, mount)
- Activate magic
- See that performance improved by orders of magnitude
- Show how virtualization works using render highlighting

## Phase 04: Preact
- `npm i -S preact preact-compat`
- Webpack:
    ```javascript
    "resolve": {
      "alias": {
        "react": "preact-compat",
        "react-dom": "preact-compat"
      }
    }
    ```
- note bundle size smaller
- note performance better (even not using virtualization)
