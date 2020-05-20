import $ from 'jquery';
import axios from 'axios';

class Image extends HTMLElement {


  constructor() {
    super();
    this.url = this.getAttribute('src');
  }

  connectedCallback() {
    this.render(this.url);
    this.addEventListener('click', () => this.openImage());
    this.button = this.querySelector("favourites");
    this.addEventListener('click', () => this.favourites());
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
    }
  
  
  
  async favourites () {
    const response = await axios.post (`/api/favourities/${this.url}`, { favourites: `${this.favourites}`,
  })
}
  
  createImage(url) {
    return `<img class="Image-url" src="${url}"/>`;
  }

  openImage() {
    $(`[id="${this.url}"]`).modal('show');
  }

  createfavourites () {
    $(`[id="${this.url}]`)
  }

  render(url) {
    this.innerHTML = `
        <div class="app-image">
        ${this.createImage(url)}
        </div>
        ${this.renderModal()} 
        ${this.createfavourites()}
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

