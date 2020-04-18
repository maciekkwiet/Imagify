import ImageService from '../Api/ImageService.js';

class ImageList extends HTMLElement {
  constructor() {
    super();
    this.images = [];
    this.imageService = new ImageService();

    this.render();
    document.querySelector('search-bar').addEventListener('searching-images', (e) => this.refreshImages(e.detail));
  }

  async refreshImages(searchText) {
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
