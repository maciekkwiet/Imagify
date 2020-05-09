import $ from 'jquery';

class Image extends HTMLElement {
  constructor() {
    super();
    this.url = this.getAttribute('src');
  }

  connectedCallback() {
    this.render(this.url);
    this.renderModal();
    this.addEventListener('click', () => this.openImage());
  }

  createImage(url) {
    return `<img class="Image-url" src="${url}"/>`;
  }

  openImage() {
    $(`[id="${this.url}"]`).modal({ detachable: false }).modal('show');
  }

  render(url) {
    this.innerHTML = `
        ${this.createImage(url)}
        `;
  }

  renderModal() {
    this.modal = document.createElement('div');
    this.modal.innerHTML = `
    <div class="ui basic modal image-modal" id="${this.url}">
          <img class="image" src="${this.url}" alt="Some image">
    </div>`;
    this.appendChild(this.modal);
  }
}
export default Image;
