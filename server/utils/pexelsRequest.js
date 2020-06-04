const pexelsRequest = (searchText) => {
  const url = `https://api.pexels.com/v1/search?query=${searchText}&per_page=80&page=1`;
  return url;
};

module.exports = pexelsRequest;
