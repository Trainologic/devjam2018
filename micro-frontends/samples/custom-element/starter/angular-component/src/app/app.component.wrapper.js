import {AppComponent} from "./app.component";
import {mountComponent} from "../helpers";

class AppComponentWrapper extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    mountComponent(AppComponent, this);
  }
}

customElements.define("my-component", AppComponentWrapper);
