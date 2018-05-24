import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppStore, connectToAppStore} from "../../../common/app.store";
import {FormsModule} from "@angular/forms";
import {AppService} from "../../../common/app.service";

export const appStore: AppStore = connectToAppStore();
export const appService = new AppService(appStore);

appService.onNg5AppCreated();

window.addEventListener("unload", function() {
  appService.onNg5AppClosed();
});


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    {provide: AppService, useValue: new AppService(appStore)},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
