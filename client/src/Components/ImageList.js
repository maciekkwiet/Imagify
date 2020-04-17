import ImageService from '../Api/ImageService.js';

class ImageList extends HTMLElement {
  constructor() {
    super();
    document.querySelector('search-bar').addEventListener('searching-images', (e) => this.refreshImages(e.detail));
    this.render();
  }

  async refreshImages(searchText) {
    console.log('ImageList -> refreshImages -> searchText', searchText);
    const imageService = new ImageService();
    const images = await imageService.getImages(searchText);
    this.render(images);
  }

  createImageList(images) {
    return images.map((image) => this.createImage(image));
  }
  createImage(url) {
    return `<img class="ui medium image" src="${url}"/>`;
  }

  render(images) {
    this.innerHTML = `<div class="ui container">
            ${this.createImageList(images)}
            </div>`;
  }
}

export default ImageList;
