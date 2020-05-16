const axios = require('axios').default;

const createRequest = (serviceName, searchText) => {
  switch (serviceName) {
    case 'UNSPLASH':
      return axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${process.env.UNSPLASH_CLIENT_ID}`,
      );
    case 'PIXABAY':
      return axios.get(`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${searchText}&image_type=photo`);
    case 'PEXELS':
      return axios.get(`https://api.pexels.com/v1/search?query=${searchText}&per_page=80&page=1`, {
        headers: {
          Authorization: process.env.PEXELS_KEY,
        },
      });
    default:
      throw 'Invalid service name provided';
  }
};

module.exports = createRequest;
