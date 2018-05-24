import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;

  constructor() {
    this.name = 'default name';
    setInterval(() => {
      console.log('got event');
    } , 2000);
  }

  changeName() {
    this.name = 'bla 2';
  }
}
