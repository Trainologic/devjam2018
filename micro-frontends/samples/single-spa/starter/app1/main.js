import singleSPAReact from "single-spa-react";
import React from "react";
import ReactDOM from "react-dom";
import Root from "./root.component";

const helpers = singleSPAReact({
    React: React,
    ReactDOM: ReactDOM,
    rootComponent: Root,
    domElementGetter: ()=>document.querySelector("body > .app1"),
});

export function mount(props) {
    console.log("react.mount");
    return helpers.mount(props);
}

export function unmount(props) {
    console.log("react.unmount");
    return helpers.unmount(props);
}

export function bootstrap(props) {
    console.log("react.bootstrap");
    return helpers.bootstrap(props);
}
