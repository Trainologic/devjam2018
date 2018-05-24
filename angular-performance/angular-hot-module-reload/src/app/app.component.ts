import { Component } from '@angular/core';
// import {AppService, CounterData} from './app.service';

import {appStore} from './app.store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
  }

  value() {
    return appStore.counter;
  }

  inc() {
    appStore.counter++;
  }

  dec() {
    appStore.counter--;
  }
}
