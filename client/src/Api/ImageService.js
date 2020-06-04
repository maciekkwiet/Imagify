import store from '../Store.js';
import axios from 'axios';

import $ from 'jquery';

class ImageService {
  async getImages(searchText) {
    try {
      const { data } = await axios.post(`/api/images?searchText=${searchText}`, {
        services: store.services,
        filters: { color: store.color, orientation: store.orientation, orderBy: store.sort },
      });

      const allImages = [];

      if (data.pexels) allImages.push(...data.pexels.photos.map((image) => image.src.medium));
      if (data.pixabay) allImages.push(...data.pixabay.hits.map((image) => image.webformatURL));
      if (data.unsplash) allImages.push(...data.unsplash.results.map((image) => image.urls.small));

      return this.shuffleImages(allImages);
    } catch (ex) {
      $('body').toast({
        message: 'Something went wrong, try again later',
      });
      console.error(ex);
    }
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
