const unsplashRequest = (searchText, color, orderBy, orientation) => {
  let baseURL = '';

  if (color) {
    baseURL += `&color=${color}`;
  }
  if (orderBy) {
    if (orderBy == 'min_popularity') {
      orderBy = 'latest';
    } else if (orderBy == 'max_popularity') {
      orderBy = 'relevant';
    }
    baseURL += `&order_by=${orderBy}`;
  }
  if (orientation) {
    if (orientation == 'Vertical') {
      orientation = 'landscape';
    } else if (orientation == 'Horizontal') {
      orientation = 'portrait';
    }
    baseURL += `&orientation=${orientation}`;
  }

  const url = `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${process.env.UNSPLASH_CLIENT_ID}${baseURL}`;
  console.log(url);
  return url;
};
module.exports = unsplashRequest;
