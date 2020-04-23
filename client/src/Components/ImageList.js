import { debounceTime, filter, map } from 'rxjs/operators';

import ImageService from '../Api/ImageService.js';
import store from '../Store.js';

class ImageList extends HTMLElement {
  constructor() {
    super();
    this.images = [];
    this.imageService = new ImageService();

    this.render();
  }
  connectedCallback() {
    store.searchTextInput
      .pipe(
        map((e) => e.target.value),
        debounceTime(500),
        filter((text) => text.length > 2),
      )
      .subscribe((text) => this.refreshImages(text));
    store.forcedSearchText.subscribe((e) => this.refreshImages(e.target.value));
  }

  async refreshImages(searchText = '') {
    this.images = await this.imageService.getImages(searchText);
    this.render();
  }

  createImageList() {
    return this.images.map((image) => this.createImage(image)).join('');
  }

  createImage(url) {
    return `<img class="" style="width:100%; padding: 10px 10px 10px 10px" src="${url}"/>`;
  }

  render() {
    this.innerHTML = ` 
    <div class="box" style="
      -webkit-column-gap: 0px;  
      -moz-column-gap:0px;  
      column-gap:0px;
      -webkit-column-count: 3;
      -moz-column-count: 3; 
      column-count: 3
      

      ">
        ${this.createImageList()}
    </div>
    
    <style>

      @media (min-width: 500px){
        -webkit-column-count: 3;
        -moz-column-count: 3; 
        column-count: 3;

      @media (max-width: 500px){
        -webkit-column-count: 2;
        -moz-column-count: 2; 
        column-count: 2;
    </style>`;
  }
}

export default ImageList;
