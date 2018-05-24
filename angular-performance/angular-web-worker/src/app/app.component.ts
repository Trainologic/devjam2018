import { Component } from '@angular/core';
import { WebWorkerService , WebWorker } from './services/web-worker.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private webWorkerService: WebWorkerService) {}

  counter = 0;
  factor = 0;

  doHeavyStuff(value): any {
    const factor = (num: number) => {
      if (num === 1 || num === 2) {
        return 1;
      }
      return factor(num - 1) + factor(num - 2);
    };

    return factor(value);
  }

  calcWebWorkerFactor(value) {
    const webWorker: WebWorker  =
      this.webWorkerService.createWorker(this.doHeavyStuff, [value]);
    webWorker.start();
    webWorker.get().addEventListener('message', (e) => {
      this.factor = e.data;
    });
  }

  calcFactor(value) {
    this.factor  = this.doHeavyStuff(value);
  }


  inc() {
    this.counter++;
  }

}
