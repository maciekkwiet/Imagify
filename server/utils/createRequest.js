const axios = require('axios').default;
const unsplashRequest = require('./unsplashRequest');
const pixabayRequest = require('./pixabayRequest');
const pexelsRequest = require('./pexelsRequest');

const createRequest = (serviceName, searchText, color, orderBy, orientation) => {
  switch (serviceName) {
    case 'UNSPLASH':
      return axios.get(unsplashRequest(searchText, color, orderBy, orientation));

    case 'PIXABAY':
      return axios.get(pixabayRequest(searchText, color, orderBy, orientation));
    case 'PEXELS':
      return axios.get(pexelsRequest(searchText), {
        headers: {
          Authorization: process.env.PEXELS_KEY,
        },
      });
    default:
      throw 'Invalid service name provided';
  }
};

module.exports = createRequest;
