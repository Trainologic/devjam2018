import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {ContactService} from '../services/contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Set<Contact>;

  @Output() remove = new EventEmitter<Contact>();
  @Output() add = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {}

  getScore(contact: Contact) {
    return ContactService.calculateContactScore(contact);
  }
}

export interface Contact {
  id: number;
  name: string;
}
