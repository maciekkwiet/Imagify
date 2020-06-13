import store from '../Store.js';

class LoadMoreButton extends HTMLElement {
  connectedCallback() {
    this.render();
    store.loadmore.subscribe(() => this.render());
    this.querySelector('#loadMore').addEventListener('click', () => this.counter());
  }

  counter() {
    store.counter.next();
  }

  render() {
    //   if (store.n === 0) {
    //     //   this.innerHTML = `
    //     //     <div style="display:none" id="loadMore" class="ui big button">Load more...</div>
    //     //  `;
    //     this.innerHTML = `
    //     <div id="loadMore" class="ui big button">Load more...</div>
    //  `;
    //   } else {
    //     this.innerHTML = `
    //     <div id="loadMore" class="ui big button">Load more...</div>
    //  `;
    //   }
    //if (store.n != 0) {
    this.innerHTML = `
      <div id="loadMore" class="ui big button">Load more...</div>
   `;
    //}
  }
}
export default LoadMoreButton;
