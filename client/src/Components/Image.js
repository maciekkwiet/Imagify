import $ from 'jquery';
//import Favourites from './Favourites'


class Image extends HTMLElement {


  constructor() {
    super();
    this.url = this.getAttribute('src');
  }

  connectedCallback() {
    this.favourites = document.createElement ('app-favourites');
    this.render(this.url);
    this.addEventListener('click', () => this.openImage());
   
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
        this.appendChild(this.favourites);
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

