const pixabayRequest = (searchText, variable) => {
  let baseURL = ' ';
  console.log('baseURL' + baseURL);

  switch (variable) {
    case 'color':
      baseURL = `colors=${variable}`;
      console.log('baseURL2' + baseURL);
  }

  console.log('baseURL3' + baseURL);
  const url = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${searchText}&image_type=photo&${baseURL}`;
  console.log(url);
  return url;
};

module.exports = pixabayRequest;
