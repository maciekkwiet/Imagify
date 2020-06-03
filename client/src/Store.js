import { Observable, Subject } from 'rxjs';

class Store {
  constructor() {
    this.searchTextInput = new Observable();
    this.services = new Observable();
    this.modal = new Subject();
    this.token = new Subject();
    this.user = null;
    this.color = new Observable();
    this.orientation = new Observable();
    this.sort = new Observable();
  }
}

const store = new Store();
export default store;
