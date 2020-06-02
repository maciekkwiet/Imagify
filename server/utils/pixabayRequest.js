const pixabayRequest = (searchText, color, orderBy, orientation) => {
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

  const url = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${searchText}&image_type=photo${baseURL}`;
  console.log(url);
  return url;
};

module.exports = pixabayRequest;
