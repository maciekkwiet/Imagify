import store from '../Store';

class Image extends HTMLElement {
  constructor() {
    super();
    this.url = this.getAttribute('src');
  }

  connectedCallback() {
    this.render(this.url);
    this.querySelector('img').addEventListener('click', () => this.openImage());
  }

  createImage(url) {
    return `<img class="Image-url" src="${url}"/>`;
  }

  openImage() {
    const content = this.modalContent;
    store.modal.next({ type: 'OPEN', content });
  }

  render(url) {
    this.innerHTML = `
        ${this.createImage(url)}
        `;
  }

  get modalContent() {
    return `
    <div class="ui basic modal" id="image-modal">
          <img class="image" src="${this.url}" alt="Some image">
    </div>`;
  }
}
export default Image;
