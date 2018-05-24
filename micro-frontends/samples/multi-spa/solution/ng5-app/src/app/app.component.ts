import { Component } from '@angular/core';
import {Contact} from "../../../common/app.store";
import {AppService} from "../../../common/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;

  constructor(private appService: AppService) {
  }

  add() {
    if(!this.name) {
      return;
    }

    const contact: Contact = {id:-1, name: this.name};

    this.appService.addContact(contact);
  }

  onKeyDown($event) {
    if($event.which == 13) {
      this.add();
    }
  }
}
