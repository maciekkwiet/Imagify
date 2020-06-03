import { Observable, Subject } from 'rxjs';

class Store {
  constructor() {
    this.searchTextInput = new Observable();
    this.services = new Observable();
    this.modal = new Subject();
    this.token = new Subject();
    this.user = null;
    this.color = 'Any';
    this.orientation = 'Any';
    this.sort = 'Any';
  }
}

const store = new Store();
export default store;
