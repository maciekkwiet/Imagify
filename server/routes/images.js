const express = require('express');
const Joi = require('@hapi/joi');

const createRequest = require('../utils/createRequest');

const router = express.Router();

const schema = Joi.object({
  services: Joi.array()
    .items(Joi.string().uppercase().valid('UNSPLASH', 'PIXABAY', 'PEXELS'))
    .unique()
    .default(['UNSPLASH', 'PIXABAY', 'PEXELS']),

  orderBy: Joi.string().valid('min_popularity', 'max_popularity'),
  filters: {
    orientation: Joi.string().valid('Vertical', 'Horizontal'),
    color: Joi.string().valid('red', 'black', 'white', 'yellow', 'orange', 'green', 'blue'),
  },
});

router.post('/', async (req, res) => {
  const { searchText } = req.query;
  const { orderBy } = req.body;
  const {
    filters: { color, orientation },
  } = req.body;
  let apiRequests = [];

  const {
    value: { services },
    error,
  } = schema.validate(req.body);

  if (error) return res.status(400).json({ error: error.details[0].message });

  if (color || orientation || orderBy) {
    const newArrayColor = services.filter((serviceName) => serviceName !== 'PEXELS');
    apiRequests = newArrayColor.map((serviceName) =>
      createRequest(serviceName, searchText, color, orderBy, orientation),
    );
  } else {
    apiRequests = services.map((serviceName) => createRequest(serviceName));
  }

  const responses = await Promise.all(apiRequests);

  const [unsplash, pixabay, pexels] = responses.map(({ data }) => data);

  res.json({ unsplash, pixabay, pexels });
});

module.exports = router;
