import { Observable } from 'rxjs';

class Store {
  constructor() {
    this.searchTextInput = new Observable();
    this.services = new Observable();
  }
}

const store = new Store();
export default store;
