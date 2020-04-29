class Image extends HTMLElement {
  constructor() {
    super();
    this.url = this.getAttribute('src');
  }

  connectedCallback() {
    this.render(this.url);
    this.removeAttribute('src');
  }

  createImage(img_url) {
    return `<img class="Image-url" src="${img_url}"/>`;
  }

  render(img_url) {
    this.innerHTML = this.createImage(img_url);
  }
}
export default Image;
