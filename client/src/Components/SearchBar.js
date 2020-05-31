import { fromEvent } from 'rxjs';
import store from '../Store';
class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.input = this.querySelector('.input-legit');
    store.searchTextInput = fromEvent(this.input, 'input');
  }

  render() {
    this.innerHTML = `
    <div class="ui big icon input four wide column searchBarMain">
      <input style="display:none" type="text" name="fakeusernameremembered"/>
      <input class="input-legit" type="text" autocomplete="chrome-off" placeholder="Search big...">
      <i class="search icon"></i>
    </div>`;
  }
}

export default SearchBar;
