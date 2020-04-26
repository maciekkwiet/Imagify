const axios = require('axios').default;
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  const { searchText } = req.query;
  const { data: unsplash } = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${process.env.UNSPLASH_CLIENT_ID}`,
  );
  res.json({ unsplash });
});

module.exports = router;
