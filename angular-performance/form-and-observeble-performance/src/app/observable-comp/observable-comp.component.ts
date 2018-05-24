import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

const factor = (num: number) => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return factor(num - 1) + factor(num - 2);
};

@Component({
  selector: 'app-observable-comp',
  templateUrl: './observable-comp.component.html',
  styleUrls: ['./observable-comp.component.css']
})
export class ObservableCompComponent implements OnInit {

  @ViewChild('emailRef') emailRef: ElementRef;
  email: string;   // text to search (email)

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    Observable.fromEvent(this.emailRef.nativeElement, 'keyup')
    // get value
      .map((evt: any) => evt.target.value)
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe((email: string) => this.updateEmail(email));
  }


  updateEmail(email) {
    this.email = email + 'score = ' + factor(38);
    this.cdr.markForCheck();
  }

}
