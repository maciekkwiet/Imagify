import { Observable } from 'rxjs';

class Store {
  constructor() {
    this.searchTextInput = new Observable();
    this.forcedSearchText = new Observable();

    this.emailRegisterInput = new Observable();
    this.passwordRegisterInput = new Observable();
    this.confirmPasswordRegisterInput = new Observable();

    this.emailLoginInput = new Observable();
    this.passwordLoginInput = new Observable();
  }
}

const store = new Store();
export default store;
