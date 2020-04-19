import { fromFetch } from 'rxjs/fetch';
import { from } from 'rxjs';

import { UNSPLASH_CLIENT_ID } from '../../secrets';
import { map, switchMap } from 'rxjs/operators';

class ImageService {
  getImages(searchText) {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${UNSPLASH_CLIENT_ID}`;
    return fromFetch(url).pipe(
      switchMap((res) => from(res.json())),
      map(({ results }) => results),
      map((images) => images.map((image) => image.urls.small)),
    );

    // const response = await fetch(
    //   `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${UNSPLASH_CLIENT_ID}`,
    // );
    // const { results } = await response.json();
    // return results.map((image) => image.urls.small);
  }
}

export default ImageService;
