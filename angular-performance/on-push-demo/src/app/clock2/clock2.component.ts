import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {AppStore} from '../appStore';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-clock2',
  templateUrl: './clock2.component.html',
  styleUrls: ['./clock2.component.css']})
export class Clock2Component implements OnInit {
  @Input() data: string[];
  // @Input() observedData: Observable<any>;
  // data: string[] = [];

  constructor(private appStore: AppStore , private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    const org = this.cdr.detectChanges;
    this.cdr.detectChanges = function() {
      console.log(`Clock2.changeDetected`);
      return org.apply(this, arguments);
    };

    // this.observedData.subscribe( (value) => {
    //   this.data = [...this.data , ...value];
    //   this.cdr.markForCheck();
    // });
  }

  run() {
    this.appStore.inc();
  }

  refresh() {
    this.cdr.detectChanges();
  }

}
