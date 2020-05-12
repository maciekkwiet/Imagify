import $ from 'jquery';

class Image extends HTMLElement {
  constructor() {
    super();
    this.url = this.getAttribute('src');
  }

  connectedCallback() {
    this.render(this.url);
    this.addEventListener('click', () => this.openImage());
  }

  createImage(url) {
    return `<img class="Image-url" src="${url}"/>`;
  }

  openImage() {
    $(`[id="${this.url}"]`).modal('show');
  }

  render(url) {
    this.innerHTML = `
        <div class="app-image">
        ${this.createImage(url)}
        </div>
        ${this.renderModal()} 
        `;
  }

  renderModal() {
    return `<div class="ui modal" id="${this.url}">
    <div class="header">Header</div>
    <div class="image content">
      <img class="image">
      <div class="description">
        <img src="${this.url}" alt="Some image">
      </div>`;
  }
}
export default Image;
