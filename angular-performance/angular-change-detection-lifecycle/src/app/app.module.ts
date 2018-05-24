import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import {AppStore} from './appStore';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
