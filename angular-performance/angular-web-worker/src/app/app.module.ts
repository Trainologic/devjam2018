import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebWorkerService } from './services/web-worker.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WebWorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
