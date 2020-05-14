import { map, debounceTime } from 'rxjs/operators';
import store from '../Store.js';
import axios from 'axios';

class ImageService {
  constructor() {
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
    const services = [];

    this.isUnspalshChecked ? services.push('UNSPLASH') : '';
    this.isPixabayChecked ? services.push('PIXABAY') : '';
    this.isPexelsChecked ? services.push('PEXELS') : '';

    try {
      const { data } = await axios.get(`/api/images?searchText=${searchText}`, {
        services: services,
      });
      const allImages = [];

      services.includes('PEXELS') ? allImages.push(...data.pexels.photos.map((image) => image.src.medium)) : '';
      services.includes('PIXABAY') ? allImages.push(...data.pixabay.hits.map((image) => image.webformatURL)) : '';
      services.includes('UNSPLASH') ? allImages.push(...data.unsplash.results.map((image) => image.urls.small)) : '';

      const uniqueImages = [...new Set(allImages)];

      return this.shuffleImages(uniqueImages);
    } catch (ex) {
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
