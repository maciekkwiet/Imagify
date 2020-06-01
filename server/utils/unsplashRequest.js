const unsplashRequest = (searchText, variable, filter) => {
  let baseURL = ' ';
  console.log('baseURL1' + baseURL);
  console.log(variable);

  // if (filter === 'color') {
  //   baseURL = `color=${variable}`;
  //   console.log('baseURL2' + baseURL);
  // }

  switch (filter) {
    case 'color':
      baseURL = `color=${variable}`;
      break;
    case 'popularity':
      baseURL = `order_by=${variable}`;
      break;
    default:
      throw 'Invalid variable';
  }
  console.log('baseURL3' + baseURL);

  const url = `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${process.env.UNSPLASH_CLIENT_ID}&${baseURL}`;
  return url;
};
module.exports = unsplashRequest;
