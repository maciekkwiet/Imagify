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
    <div class="ui big icon input four wide column searchBarMain">
        <input type="text" placeholder="Search big...">
        <i class="search icon"></i>
    </div>`;
  }
}

export default SearchBar;
