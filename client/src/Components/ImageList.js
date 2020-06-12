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
        map((e) => e.target.value),
        debounceTime(500),
        filter((text) => text.length > 2),
      )
      .subscribe((text) => {
        this.refreshImages(text);
      });
  }

  async refreshImages(searchText = '') {
    store.n = 1;
    this.images = await this.imageService.getImages(searchText);
    this.render();
  }

  createImageList() {
    const tabImages = this.images.slice(0, 10 * store.n);
    return tabImages.map((image) => this.createImage(image.mediumImage, image.bigImage)).join('');
  }

  createImage(url, bigUrl) {
    return `<app-image source=${url} data-big-image=${bigUrl}></app-image>`;
  }

  render() {
    if (this.images.length > 10 * store.n) {
      this.innerHTML = this.createImageList();
    }
  }
  disconnectedCallback() {
    this.searchTextInputSubscription.unsubscribe();
  }
}
export default ImageList;
