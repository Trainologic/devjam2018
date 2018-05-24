import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from './contact-list.component';
import {ContactService} from '../services/contact.service';

@Pipe({ name: 'score', pure: true })
export class ScorePipe implements PipeTransform {

  transform(contact: Contact) {
    return ContactService.calculateContactScore(contact);
  }
}
