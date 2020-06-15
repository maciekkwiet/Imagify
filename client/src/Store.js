import { Observable, Subject } from 'rxjs';

class Store {
  constructor() {
    this.searchTextInput = new Observable();
    this.services = new Observable();
    this.modal = new Subject();
    this.token = new Subject();
    this.user = null;
    this.color = '';
    this.orientation = '';
    this.sort = '';
    this.n = 0;
    this.counter = new Subject();
    this.loadmore = new Subject();
  }
}

const store = new Store();
export default store;
