import store from '../Store';
class Image extends HTMLElement {
  constructor() {
    super();
    this.url = this.getAttribute('data-big-image');
    this.favourities = this.getAttribute('favourities');
   
  }
  connectedCallback() {
    this.favourites = document.createElement('app-favourites');
    this.render(this.url,this.favourities);
    this.querySelector('img').addEventListener('click', () => this.openImage());
  }

  createImage(url, favourities) {
    if(!favourities){return `<img class="Image-url" src="${url}"/>`
    } else {return `<img class="Image-url" src="${favourities}"/>`};
  }
  openImage() {
    const content = this.modalContent;
    store.modal.next({ type: 'OPEN', content });
  }
  
  render(url, favourities) {
    this.innerHTML = `
        ${this.createImage(url, favourities)}
        `;
    this.appendChild(this.favourites);

  }
  get modalContent() {
    return `
    <div class="ui basic modal" id="image-modal">
          <img class="image" src="${this.url}" alt="Some image">
    </div>`;
  }
}
export default Image;
