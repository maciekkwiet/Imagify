const pixabayRequest = (searchText, color, orderBy, orientation) => {
  let baseURL = '';

  if (color) {
    baseURL += `&color=${color}`;
  }
  if (orderBy) {
    if (orderBy == 'max_popularity') {
      orderBy = 'popular';
    } else if (orderBy == 'min_popularity') {
      orderBy = 'latest';
    }
    baseURL += `&order_by=${orderBy}`;
  }
  if (orientation) {
    if (orientation == 'Vertical') {
      orientation = 'vertical';
    } else if (orientation == 'Horizontal') {
      orientation = 'horizontal';
    }
    baseURL += `&orientation=${orientation}`;
  }

  const url = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${searchText}&image_type=photo${baseURL}`;
  console.log(url);
  return url;
};

module.exports = pixabayRequest;
