import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import {AppStore} from './appStore';
import { Clock2Component } from './clock2/clock2.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    Clock2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
