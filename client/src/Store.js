import { Observable } from 'rxjs';

class Store {
  constructor() {
    this.searchTextInput = new Observable();
    this.forcedSearchText = new Observable();

    this.emailLoginInput = new Observable();
    this.passwordLoginInput = new Observable();

    this.forcedLogin = new Observable();

  }
}

const store = new Store();
export default store;
