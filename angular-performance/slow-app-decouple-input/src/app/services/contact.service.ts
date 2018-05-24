import {Contact} from '../contact-list/contact-list.component';
import * as faker from 'faker';
import {Injectable} from '@angular/core';

declare let require: any;
const memoize = require('lodash.memoize');

/**
 * Slow Method
 **/
const cpuIntensiveProcess = (num: number) => factor(num);

const factor = (num: number) => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return factor(num - 1) + factor(num - 2);
};


@Injectable()
export class ContactService {

  static generateContactList(size: Number): Set<Contact> {
    const result: Set<Contact> = new Set();
    for (let i = 0; i < size; i ++) {
      result.add(<Contact>{id:  Math.floor((Math.random() * 20) + 15) , name: faker.name.findName()});
    }

    return result;
  }

  static createContact(contactName: String) {
    return <Contact>{id: Math.floor((Math.random() * 20) + 1) , name: contactName};
  }

  static calculateContactScore(contact: Contact) {
    console.log('calculateContactScore');
    return cpuIntensiveProcess(contact.id);
  }

}
