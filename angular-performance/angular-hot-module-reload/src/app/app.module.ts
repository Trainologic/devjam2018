import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    // this._appService.setState({});
  }

  // OnInit(store) {
  //   this._appService.setState(store.State);
  //
  // }
  //
  // OnDestroy(store) {
  //   store.State = this._appService.getState();
  // }

}
