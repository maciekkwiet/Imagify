import store from '../Store.js';
import axios from 'axios';

import $ from 'jquery';

class ImageService {
  async getImages(searchText) {
    try {
      const { data } = await axios.get(`/api/images?searchText=${searchText}`, {
        services: store.services,
      });
      const allImages = [];

      if (store.services.includes('Pexels')) {
        this.pairImages(
          data.pexels.photos.map((image) => image.src.large2x),
          data.pexels.photos.map((image) => image.src.medium),
          allImages,
        );
      }
      if (store.services.includes('Pixabay')) {
        this.pairImages(
          data.pixabay.hits.map((image) => image.largeImageURL),
          data.pixabay.hits.map((image) => image.webformatURL),
          allImages,
        );
      }
      if (store.services.includes('Unsplash')) {
        this.pairImages(
          data.unsplash.results.map((image) => image.urls.full),
          data.unsplash.results.map((image) => image.urls.small),
          allImages,
        );
      }
      return this.shuffleImages(allImages);
    } catch (ex) {
      $('body').toast({
        message: 'Something went wrong, try again later',
      });
      console.error(ex);
    }
  }

  pairImages(big, medium, allImages) {
    for (let i = 0; i < medium.length; i++) {
      allImages.push({
        bigImage: big[i],
        mediumImage: medium[i],
      });
    }
    return allImages;
  }

  shuffleImages(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}

export default ImageService;
