import { fromEvent } from 'rxjs';
import store from '../Store';
class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.input = this.querySelector('input');
    store.searchTextInput = fromEvent(this.input, 'input');
  }

  render() {
    this.innerHTML = `
    <form>
      <div class="ui big icon input searchBarMain">
          <input name="search-text" type="text" placeholder="Search big...">
          <i class="search icon"></i>
      </div>
    </form>`;
  }
}

export default SearchBar;
