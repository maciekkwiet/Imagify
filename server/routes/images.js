const axios = require('axios').default;
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  const { searchText } = req.query;
  const unsplashRequest = axios.get(
    `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${process.env.UNSPLASH_CLIENT_ID}`,
  );
  const pixabayRequest = axios.get(
    `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${searchText}&image_type=photo`,
  );
  const pexelsRequest = axios.get(`https://api.pexels.com/v1/search?query=${searchText}&per_page=80&page=1`, {
    headers: {
      Authorization: process.env.PEXELS_KEY,
    },
  });

  const responses = await Promise.all([unsplashRequest, pixabayRequest, pexelsRequest]);
  const [unsplash, pixabay, pexels] = responses.map(({ data }) => data);
  res.json({ unsplash, pixabay, pexels });
});

module.exports = router;
