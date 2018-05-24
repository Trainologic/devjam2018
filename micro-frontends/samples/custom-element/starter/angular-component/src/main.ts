import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import "./app/app.component.wrapper";

if (environment.production) {
  enableProdMode();
}

