class SortAndFilter extends HTMLElement {
  //   constructor() {
  //     super();
  //     this.url = this.getAttribute('source');
  //   }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
<div class="ui grid">
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
            <div class="item">
                <div class="ui red empty circular label"></div>
                Red
            </div>
            <div class="item">
                <div class="ui blue empty circular label"></div>
                Blue
            </div>
            <div class="item">
                <div class="ui black empty circular label"></div>
                Black
            </div>
            <div class="item">
                <div class="ui purple empty circular label"></div>
                Purple
            </div>
            <div class="item">
                <div class="ui orange empty circular label"></div>
                Orange
            </div>
            <div class="item">
                <div class="ui white empty circular label"></div>
                White
            </div>
            <div class="item">
                <div class="ui yellow empty circular label"></div>
                Yellow
            </div>
            <div class="item">
                <div class="ui pink empty circular label"></div>
                Pink
            </div>
            <div class="item">
                <div class="ui green empty circular label"></div>
                Green
            </div>
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
            <div class="item">
                <div class="ui red empty circular label"></div>
                Red
            </div>
            <div class="item">
                <div class="ui black empty circular label"></div>
                Black
            </div>
            <div class="item">
                <div class="ui white empty circular label"></div>
                White
            </div>
            <div class="item">
                <div class="ui yellow empty circular label"></div>
                Yellow
            </div>
            <div class="item">
                <div class="ui orange empty circular label"></div>
                Orange
            </div>
            <div class="item">
                <div class="ui green empty circular label"></div>
                Green
            </div>
            <div class="item">
            <div class="ui blue empty circular label"></div>
            Blue
            </div>
         </div>
        </div>
    </div>
</div>
          `;
  }
}
export default SortAndFilter;
