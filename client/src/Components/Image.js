import store from '../Store';
//import Favourites from './Favourites'
class Image extends HTMLElement {
  constructor() {
    super();
    this.url = this.getAttribute('source');
    this.removeAttribute('src');
  }
  connectedCallback() {
    this.favourites = document.createElement('app-favourites');
    this.render(this.url);
    this.querySelector('img').addEventListener('click', () => this.openImage());
  }

    /*const button = document.querySelector('favourites'); //catch button
      const form = document.querySelector('heart');
      async function handleResetSubmit(event) {
      const send = document.querySelector('favourites').value; // catch
      event.preventDefault(); //stop refresh
      const url = `http://..?` + 'send=' + send; //create url with param
      await fetch(url, {
        method: 'POST'
      }); //go to backend
      console.log(url)*/

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
