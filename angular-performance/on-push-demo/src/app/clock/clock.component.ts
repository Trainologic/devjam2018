import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AppStore} from '../appStore';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit  {

  data = ['data1' , 'data2' , 'data3'];
  // data = new BehaviorSubject(['data1']);

  constructor(private cdr: ChangeDetectorRef ,
              private app: ApplicationRef ,
              private appStore: AppStore) {
  }

  run() {
    this.appStore.inc();
  }

  get counter() {
    return this.appStore.getCounter();
  }

  addData(value) {
    // this.data = [...this.data, value];
    this.data.push(value);
    // this.data.next(value);

  }

  ngOnInit(): void {
  }

}
