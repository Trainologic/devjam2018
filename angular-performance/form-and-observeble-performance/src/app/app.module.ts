import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ObservableCompComponent } from './observable-comp/observable-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    MyFormComponent,
    ObservableCompComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
