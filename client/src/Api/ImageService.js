import { map, debounceTime } from 'rxjs/operators';

import { UNSPLASH_CLIENT_ID } from '../../secrets';
import { PIXABAY_KEY } from '../../secrets';
import { PEXELS_KEY } from '../../secrets';
import store from '../Store.js';

class ImageService {
  constructor() {
    this.allImages;
    this.isUnspalshChecked = false;
    this.isPixabayChecked = false;
    this.isPexelsChecked = false;
    this.checkUnsplashSubscription = store.checkUnsplash.pipe(map((e) => e.toElement.checked)).subscribe((checked) => {
      if (checked) {
        this.isUnspalshChecked = true;
      } else this.isUnspalshChecked = false;
    });
    this.checkPixabaySubscription = store.checkPixabay.pipe(map((e) => e.toElement.checked)).subscribe((checked) => {
      if (checked) {
        this.isPixabayChecked = true;
      } else this.isPixabayChecked = false;
    });
    this.checkPexelsSubscription = store.checkPexels.pipe(map((e) => e.toElement.checked)).subscribe((checked) => {
      if (checked) {
        this.isPexelsChecked = true;
      } else this.isPexelsChecked = false;
    });
  }
  async getImages(searchText) {
    this.allImages = [];

    if (this.isUnspalshChecked) {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${UNSPLASH_CLIENT_ID}`,
      );
      const { results } = await response.json();
      this.allImages.push(...results.map((image) => image.urls.small));
    }
    if (this.isPixabayChecked) {
      const response = await fetch(`https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${searchText}&image_type=photo`);
      const { hits } = await response.json();
      this.allImages.push(...hits.map((image) => image.webformatURL));
    }
    if (this.isPexelsChecked) {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${searchText}&per_page=80&page=1`, {
        headers: {
          Authorization: PEXELS_KEY,
        },
      });
      const { photos } = await response.json();
      this.allImages.push(...photos.map((image) => image.src.medium));
    }
    return this.shuffleImages(this.allImages);
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
