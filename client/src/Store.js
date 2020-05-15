import { Observable, Subject } from 'rxjs';

class Store {
  constructor() {
    this.searchTextInput = new Observable();
    this.checkPexels = new Observable();
    this.checkUnsplash = new Observable();
    this.checkPixabay = new Observable();
    this.modal = new Subject();
  }
}

const store = new Store();
export default store;
