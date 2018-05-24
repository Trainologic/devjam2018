import {ApplicationRef, Injectable} from '@angular/core';

@Injectable()
export class AppStore {

  counter: number;

  constructor() {
    this.counter = 0;
  }

  public getCounter(): number {
    return this.counter;
  }

  public inc() {
    this.counter++;
  }
}
