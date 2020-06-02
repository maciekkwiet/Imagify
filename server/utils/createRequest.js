const axios = require('axios').default;
const unsplashRequest = require('./unsplashRequest');
const pixabayRequest = require('./pixabayRequest');
const pexelsRequest = require('./pexelsRequest');

const createRequest = (serviceName, searchText, color, orderrByUs, orderByPb, orientationUS, orientationPB) => {
  switch (serviceName) {
    case 'UNSPLASH':
      return axios.get(unsplashRequest(searchText, color, orderrByUs, orientationUS));

    case 'PIXABAY':
      return axios.get(pixabayRequest(searchText, color, orderByPb, orientationPB));
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
