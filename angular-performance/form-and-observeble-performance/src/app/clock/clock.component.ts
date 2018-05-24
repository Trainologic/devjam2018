import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  private counter: number;

  constructor(private cdr: ChangeDetectorRef ) {
    this.counter = 0;

    setInterval( () => {
      this.counter++;
    }, 1000);

  }

  ngOnInit() {
  }

  inc() {
    this.counter++;
  }

  getCounter() {
    return this.counter;
}

}
