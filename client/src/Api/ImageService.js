import { map } from 'rxjs/operators';
import store from '../Store.js';
import axios from 'axios';

class ImageService {
  constructor() {
    this.isUnspalshChecked = true;
    this.isPixabayChecked = true;
    this.isPexelsChecked = true;

    this.checkUnsplashSubscription = store.checkUnsplash.pipe(map((e) => e.toElement.checked)).subscribe((checked) => {
      if (checked) {
        this.isUnspalshChecked = true;
        if (this.isPixabayChecked || this.isPexelsChecked) {
          this.oppositeDisabled();
        }
      } else {
        this.isUnspalshChecked = false;
        if ((this.isPixabayChecked && !this.isPexelsChecked) || (!this.isPixabayChecked && this.isPexelsChecked)) {
          this.disabled();
        }
      }
    });

    this.checkPixabaySubscription = store.checkPixabay.pipe(map((e) => e.toElement.checked)).subscribe((checked) => {
      if (checked) {
        this.isPixabayChecked = true;
        if (this.isPexelsChecked || this.isUnspalshChecked) {
          this.oppositeDisabled();
        }
      } else {
        this.isPixabayChecked = false;
        if ((this.isUnspalshChecked && !this.isPexelsChecked) || (!this.isUnspalshChecked && this.isPexelsChecked)) {
          this.disabled();
        }
      }
    });

    this.checkPexelsSubscription = store.checkPexels.pipe(map((e) => e.toElement.checked)).subscribe((checked) => {
      if (checked) {
        this.isPexelsChecked = true;
        if (this.isPixabayChecked || this.isUnspalshChecked) {
          this.oppositeDisabled();
        }
      } else {
        this.isPexelsChecked = false;
        if ((this.isPixabayChecked && !this.isUnspalshChecked) || (!this.isPixabayChecked && this.isUnspalshChecked)) {
          this.disabled();
        }
      }
    });
  }

  disabled() {
    this.isUnspalshChecked ? document.querySelector('#Unsplash').setAttribute('disabled', 'disabled') : null;
    this.isPexelsChecked ? document.querySelector('#Pexels').setAttribute('disabled', 'disabled') : null;
    this.isPixabayChecked ? document.querySelector('#Pixabay').setAttribute('disabled', 'disabled') : null;
  }

  oppositeDisabled() {
    this.isUnspalshChecked ? document.querySelector('#Unsplash').removeAttribute('disabled') : null;
    this.isPexelsChecked ? document.querySelector('#Pexels').removeAttribute('disabled') : null;
    this.isPixabayChecked ? document.querySelector('#Pixabay').removeAttribute('disabled') : null;
  }

  async getImages(searchText) {
    const services = [];

    this.isUnspalshChecked ? services.push('UNSPLASH') : null;
    this.isPixabayChecked ? services.push('PIXABAY') : null;
    this.isPexelsChecked ? services.push('PEXELS') : null;

    try {
      const { data } = await axios.get(`/api/images?searchText=${searchText}`, {
        services: services,
      });
      const allImages = [];
      console.log(data);
      services.includes('PEXELS') ? allImages.push(...data.pexels.photos.map((image) => image.src.medium)) : null;
      services.includes('PIXABAY') ? allImages.push(...data.pixabay.hits.map((image) => image.webformatURL)) : null;
      services.includes('UNSPLASH') ? allImages.push(...data.unsplash.results.map((image) => image.urls.small)) : null;

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
