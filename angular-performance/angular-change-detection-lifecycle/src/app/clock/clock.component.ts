import {
  AfterViewChecked, AfterViewInit, ApplicationRef, ChangeDetectorRef, Component, DoCheck, Input,
  OnInit
} from '@angular/core';
import {AppStore} from '../appStore';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, DoCheck, AfterViewChecked , AfterViewInit {
  static nextId = 0;
  @Input() id: number;

  constructor(private cdr: ChangeDetectorRef ,
              private appStore: AppStore) {
    // this.id = ++ClockComponent.nextId;
    // const _this = this;
    // //
    // const org = cdr.detectChanges;
    // cdr.detectChanges = function() {
    //   console.log(`ClockComponent(${_this.id}).changeDetected`);
    //   return org.apply(this, arguments);
    // };
  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('ClockComponent.ngDoCheck');
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.run();
    } , 1000);
    this.cdr.detach();

  }

  ngAfterViewChecked() {
    // console.log(`ClockComponent(${this.id}).AfterViewChecked`);
  }

  run() {
    this.appStore.inc();
  }

  live() {
    this.cdr.reattach();
  }

  get counter() {
    return this.appStore.getCounter();
  }

}
