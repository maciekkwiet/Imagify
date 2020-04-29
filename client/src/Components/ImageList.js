import { debounceTime, filter, map } from 'rxjs/operators';

import ImageService from '../Api/ImageService.js';
import store from '../Store.js';

class ImageList extends HTMLElement {
  constructor() {
    super();
    this.images = [];
    this.imageService = new ImageService();
  }

  connectedCallback() {
    this.render();
    this.searchTextInputSubscription = store.searchTextInput
      .pipe(
        map(
          (e) => e.target.value,
          debounceTime(500),
          filter((text) => text.length > 2),
        ),
      )
      .subscribe((text) => {
        this.refreshImages(text);
      });
    this.forcedSearchTextSubscription = store.forcedSearchText.subscribe((e) => this.refreshImages(e.target.value));
  }

  async refreshImages(searchText = '') {
    this.images = await this.imageService.getImages(searchText);
    this.render();
  }

  createImageList() {
    return this.images.map((image) => this.createImage(image)).join('');
  }

  createImage(url) {
    return `<app-image src=${url}></app-image>`;
  }

  render() {
    this.innerHTML = this.createImageList();
  }
  disconnectedCallback() {
    this.searchTextInputSubscription.unsubscribe();
    this.forcedSearchTextSubscription.unsubscribe();
  }
}

export default ImageList;
