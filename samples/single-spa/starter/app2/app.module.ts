import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from "@angular/common";
import {RootComponent} from "./root.component";

@NgModule({
  imports: [
    BrowserModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/app2/'}],
  declarations: [
    RootComponent,
  ],
  bootstrap: [RootComponent]
})
export class AppModule {
}
