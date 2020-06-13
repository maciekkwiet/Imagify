import store from '../Store.js';

class LoadMoreButton extends HTMLElement {
  connectedCallback() {
    this.render();
    this.querySelector('#loadMore').addEventListener('click', () => this.counter());
  }

  counter() {
    store.n++;
    store.counter.next();
  }

  render() {
    this.innerHTML = `
        <div id="loadMore" class="ui big button">Load more...</div>
     `;
  }
}
export default LoadMoreButton;
