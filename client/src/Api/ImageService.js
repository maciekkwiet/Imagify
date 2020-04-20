import { UNSPLASH_CLIENT_ID } from '../../secrets';

class ImageService {
  async getImages(searchText) {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${UNSPLASH_CLIENT_ID}`;

    const response = await fetch(url);
    const { results } = await response.json();
    return results.map((image) => image.urls.small);
  }
}

export default ImageService;
