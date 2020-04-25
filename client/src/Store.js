import { Observable } from 'rxjs';

class Store {
  constructor() {
    this.searchTextInput = new Observable();
    this.forcedSearchText = new Observable();
    this.searchLoginInput = new Observable();
    this.searchPasswordInput = new Observable();
    this.forcedLogin = new Observable();
  }
}

const store = new Store();
export default store;
