import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";
import {ApplicationRef, Type} from "@angular/core";

export function mountComponent<T>(componentType: Type<T>, element: HTMLElement) {
  class AppModuleEx extends AppModule {
    ngDoBootstrap(app: ApplicationRef) {
      console.log("ngDoBootstrap", element);

      app.bootstrap(componentType, element);
    }
  }

  platformBrowserDynamic().bootstrapModule(AppModuleEx);
}
