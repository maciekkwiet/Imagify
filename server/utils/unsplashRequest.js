const unsplashRequest = (searchText, color, orderBy, orientation) => {
  let baseURL = '';

  if (color) {
    baseURL += `&color=${color}`;
  }
  if (orderBy) {
    baseURL += `&order_by=${orderBy}`;
  }
  if (orientation) {
    baseURL += `&orientation=${orientation}`;
  }

  const url = `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${process.env.UNSPLASH_CLIENT_ID}${baseURL}`;
  console.log(url);
  return url;
};
module.exports = unsplashRequest;
