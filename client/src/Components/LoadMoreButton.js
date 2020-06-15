import store from '../Store.js';

class LoadMoreButton extends HTMLElement {
  connectedCallback() {
    store.loadmore.subscribe(() => this.create());
  }
  create() {
    this.render();
    const button = this.querySelector('#loadMore');
    button.addEventListener('click', () => this.counter());
  }

  counter() {
    store.counter.next();
  }

  render() {
    this.innerHTML = `
      <div id="loadMore" class="ui big button">Load more...</div>
   `;
  }
}
export default LoadMoreButton;
