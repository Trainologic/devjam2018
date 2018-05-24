import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, Inject, InjectionToken, NgModule, PlatformRef} from '@angular/core';
import { AppComponent } from './app.component';

export const TOKEN_ROOT_ELEMENT = new InjectionToken("TOKEN_ROOT_ELEMENT");

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    AppComponent
  ]
  // bootstrap: [AppComponent]
})
export class AppModule {
}
