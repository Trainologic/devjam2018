import {
  AfterViewChecked, ApplicationRef, Component, DoCheck, Input,
  OnInit
} from '@angular/core';
import {AppStore} from '../appStore';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {

  constructor(private app: ApplicationRef , private appService: AppStore) {

  }

  run() {
    this.appService.inc();
  }

  get counter() {
    return this.appService.getCounter();
  }
}
