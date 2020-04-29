import { Observable } from 'rxjs';

class Store {
  constructor() {
    this.searchTextInput = new Observable();
    this.forcedSearchText = new Observable();
    this.emailInput = new Observable();
    this.passwordInput = new Observable();
    this.confirmPasswordInput = new Observable();
    this.signUp = new Observable();
  }
}

const store = new Store();
export default store;
