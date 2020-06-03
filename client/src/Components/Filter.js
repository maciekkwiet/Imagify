import store from '../Store.js';

class Filter extends HTMLElement {
  connectedCallback() {
    this.render();

    this.querySelectorAll('.orient').forEach((node) => node.addEventListener('click', (e) => this.filterOrient(e)));
    this.querySelectorAll('.color').forEach((node) => node.addEventListener('click', (e) => this.filterColor(e)));
  }

  filterOrient(e) {
    store.orientation = e.target.textContent == 'Any orientation' ? '' : e.target.textContent;
  }

  filterColor(e) {
    store.color = e.target.textContent == 'Any color' ? '' : e.target.textContent;
  }

  render() {
    this.innerHTML = `
<div class="ui grid filt">
    <div class="ui floating dropdown labeled icon button">
        <i class="filter icon"></i>
        <span class="text">Filter by Orientation</span>
        <div class="menu">
            <div class="ui icon search input">
                <i class="search icon"></i>
                <input type="text" placeholder="Search orientation...">
            </div>
            <div class="divider"></div>
            <div class="header">
                <i class="tags icon"></i>
                Tag orientation
            </div>
            <div class="scrolling menu">
                <div class="item orient">Any orientation</div>
                <div class="item orient"><i class="arrows alternate horizontal icon"></i>Horizontal</div>
                <div class="item orient"><i class="arrows alternate vertical icon"></i>Vertical</div>
            </div>
        </div>
    </div>

    <div class="ui floating dropdown labeled icon button">
        <i class="filter icon"></i>
        <span class="text">Filter by Color</span>
        <div class="menu">
            <div class="ui icon search input">
                <i class="search icon"></i>
                <input type="text" placeholder="Search color...">
            </div>
            <div class="divider"></div>
            <div class="header">
                <i class="tags icon"></i>
                Tag color
            </div>
            <div class="scrolling menu">
                <div class="item color">Any color</div>
                <div class="item color"><div class="ui red empty circular label"></div>Red</div>
                <div class="item color"><div class="ui black empty circular label"></div>Black</div>
                <div class="item color"><div class="ui white empty circular label"></div>White</div>
                <div class="item color"><div class="ui yellow empty circular label"></div>Yellow</div>
                <div class="item color"><div class="ui orange empty circular label"></div>Orange</div>
                <div class="item color"><div class="ui green empty circular label"></div>Green</div>
                <div class="item color"><div class="ui blue empty circular label"></div>Blue</div>
            </div>
        </div>
    </div>
</div>
          `;
  }
}
export default Filter;
