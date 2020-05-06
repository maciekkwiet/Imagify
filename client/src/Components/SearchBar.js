import { fromEvent } from 'rxjs';
import store from '../Store';
class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.input = this.querySelector('input');
    this.icon = this.querySelector('form');
    store.searchTextInput = fromEvent(this.input, 'input');
    store.forcedSearchText = fromEvent(this.icon, 'submit');
  }

  render() {
    this.innerHTML = `
    <form>
      <div class="ui big icon input">
          <input name="search-text" type="text" placeholder="Search big...">
          <button type="submit"><i class="search icon link"></i></button>
      </div>
    </form>`;
  }
}

export default SearchBar;
