class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.render();
    this.input = this.querySelector('input');
    this.icon = this.querySelector('i');

    this.icon.addEventListener('click', () => this.handleSubmit());
  }
  handleSubmit() {
    const event = new CustomEvent('searching-images', { detail: this.input.value });
    this.dispatchEvent(event);
  }
  render() {
    return `<div class="ui big icon input">
                <input type="text" placeholder="Search big...">
                <i class="search icon link"></i>
            </div>`;
  }
}

export default SearchBar;
