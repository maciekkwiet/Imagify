class Image extends HTMLElement {
  constructor() {
    super();
    this.url = this.getAttribute('src');
  }

  connectedCallback() {
    this.render(this.url);
  }

  createImage(url) {
    return `<img class="Image-url" src="${url}"/>`;
  }

  render(url) {
    this.innerHTML = `
        <div class="app-image">
        ${this.createImage(url)}
        </div>`;
  }
}
export default Image;
