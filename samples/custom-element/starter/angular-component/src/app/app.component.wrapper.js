import {AppComponent} from "./app.component";
import {mountComponent} from "../helpers";

class AppComponentWrapper extends HTMLElement {
  constructor() {
    super();

    console.log("AppComponentWrapper.ctor");
  }

  connectedCallback() {
    console.log("AppComponentWrapper.connectedCallback");
    mountComponent(AppComponent, this);
  }
}

customElements.define('my-component', AppComponentWrapper);
