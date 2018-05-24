import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contact-name',
  templateUrl: './contact-name.component.html',
  styleUrls: ['./contact-name.component.css']
})
export class ContactNameComponent implements OnInit {
  name: string;
  @Output() addNewContact = new EventEmitter<string>();

  handleNewContactEvent(event: any) {
    if (event.keyCode === 13) {
      this.addNewContact.emit(this.name);
      this.name = '';
    }
  }

  ngOnInit(): void {
  }

}
