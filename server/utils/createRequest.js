const axios = require('axios').default;
const unsplashRequest = require('./unsplashRequest');
const pixabayRequest = require('./pixabayRequest');
const pexelsRequest = require('./pexelsRequest');

const createRequest = (serviceName, searchText, variable, filter) => {
  console.log(variable);
  switch (serviceName) {
    case 'UNSPLASH':
      return axios.get(unsplashRequest(searchText, variable, filter));

    case 'PIXABAY':
      return axios.get(pixabayRequest(searchText, variable,filter));
    case 'PEXELS':
      return axios.get(pexelsRequest(searchText, variable,filter), {
        headers: {
          Authorization: process.env.PEXELS_KEY,
        },
      });
    default:
      throw 'Invalid service name provided';
  }
};

module.exports = createRequest;
