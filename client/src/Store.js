import { Observable } from 'rxjs';

class Store {
  constructor() {
    this.searchTextInput = new Observable();
    this.forcedSearchText = new Observable();
    this.checkPexels = new Observable();
    this.checkUnsplash = new Observable();
    this.checkPixabay = new Observable();
  }
}

const store = new Store();
export default store;
