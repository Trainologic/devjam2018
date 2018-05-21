import {AppStore, Contact} from "./app.store";

export class AppService {
  constructor(private appStore: AppStore) { }

  gotoNewContact() {
    if(!this.appStore.apps.ng5) {
      window.open("/contact/new");
    }
    else {
      this.appStore.apps.ng5.window.focus();
    }
  }

  addContact(contact: Contact) {
    this.appStore.contacts.push(contact);
    this.appStore.apps.ng5 = null;

    // this.onStoreChanged();

    window.close();
  }

  private onStoreChanged() {
    const {apps} = this.appStore;
    for(const key in apps) {
      const app = apps[key];

      if(app && app.onStoreChanged) {
        app.onStoreChanged();
      }
    }
  }

  onNg1AppCreated(onStoreChanged: Function) {
    window.name = "ng1";
    this.appStore.apps.ng1 = {
      window,
      onStoreChanged,
    };
  }

  onNg5AppCreated() {
    window.name = "ng5";
    this.appStore.apps.ng5 = {
      window,
    };
  }

  onNg5AppClosed() {
    this.appStore.apps.ng5 = null;
  }
}
