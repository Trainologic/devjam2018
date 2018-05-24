import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {ContactService} from '../services/contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Set<Contact>;

  @Output() remove = new EventEmitter<Contact>();
  @Output() add = new EventEmitter<String>();

  name: string;

  constructor() { }

  ngOnInit() {}

  handleNewContactEvent($event: KeyboardEvent) {
    if ($event.keyCode === 13) {
      this.add.emit(this.name);
      this.name = '';
    }
  }

  getScore(contact: Contact) {
    return ContactService.calculateContactScore(contact);
  }
}

export interface Contact {
  id: number;
  name: string;
}
