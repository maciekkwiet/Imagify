import store from '../Store.js';

class Sort extends HTMLElement {
  connectedCallback() {
    this.render();

    this.querySelectorAll('.sort').forEach((node) => node.addEventListener('click', (e) => this.sortPopularity(e)));
  }

  sortPopularity(e) {
    if (e.srcElement.classList.value.includes('ascending')) {
      store.sort = 'max_popularity';
    } else if (e.srcElement.classList.value.includes('descendig')) {
      store.sort = 'min_popularity';
    } else {
      store.sort = 'Any';
    }
  }

  render() {
    this.innerHTML = `
  <div class="ui grid filt">
      <div class="ui grid floating dropdown labeled icon button">
          <i class="sort icon"></i>
          <span class="text">Sort by...</span>
          <div class="menu">
              <div class="scrolling menu">
                  <div class="item sort">Any sort</div>
                  <div class="item sort ascending"><i class="users icon"></i>Sort by popularity    <i class="angle double up icon"></i></div>
                  <div class="item sort descendig"><i class="users icon"></i>Sort by popularity    <i class="angle double down icon"></i></div>
                  <!--
                  <div class="item sort ascending"><i class="arrows alternate horizontal icon"></i>Sort by width   <i class="angle double up icon"></i></div>
                  <div class="item sort descendig"><i class="arrows alternate horizontal icon"></i>Sort by width   <i class="angle double down icon"></i></div>
                  <div class="item sort ascending"><i class="arrows alternate vertical icon"></i>Sort by hight   <i class="angle double up icon"></i></div>
                  <div class="item sort descendig"><i class="arrows alternate vertical icon"></i>Sort by hight   <i class="angle double down icon"></i></div>
                  -->
              </div>
          </div>
      </div>
  </div>
            `;
  }
}
export default Sort;
