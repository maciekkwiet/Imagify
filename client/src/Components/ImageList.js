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
    console.log(searchText);
    this.images = await this.imageService.getImages(searchText);
    this.render();
  }

  createImageList() {
    return this.images.map((image) => this.createImage(image));
  }

  createImage(url) {
    return `<img class="ui medium image" src="${url}"/>`;
  }

  render() {
    this.innerHTML = `
    <div class="ui container">
        ${this.createImageList()}
    </div>`;
  }
}

export default ImageList;
