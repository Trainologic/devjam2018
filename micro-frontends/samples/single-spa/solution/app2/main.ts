import "zone.js";
import {AppModule} from "./app.module";
import singleSPAAngular from "single-spa-angular2";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

const helpers = singleSPAAngular({
    mainModule: AppModule,
    angularPlatform: platformBrowserDynamic(),
    template: "<app-root></app-root>",
    domElementGetter: () => document.querySelector("body > .app2"),
});

export function mount(props) {
    console.log("angular.mount");
    return helpers.mount(props);
}

export function unmount(props) {
    console.log("angular.unmount");
    return helpers.unmount(props);
}

export function bootstrap(props) {
    console.log("angular.bootstrap");
    return helpers.bootstrap(props);
}
