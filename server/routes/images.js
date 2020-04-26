const express = require('express');
const Joi = require('@hapi/joi');

const createRequest = require('../utils/createRequest');

const router = express.Router();

const schema = Joi.object({
  services: Joi.array()
    .items(Joi.string().uppercase().valid('UNSPLASH', 'PIXABAY', 'PEXELS'))
    .unique()
    .default(['UNSPLASH', 'PIXABAY', 'PEXELS']),
});

router.get('/', async (req, res) => {
  const { searchText } = req.query;
  const {
    value: { services },
    error,
  } = schema.validate(req.body);

  if (error) res.json({ error: error.details[0].message });

  const apiRequests = services.map((serviceName) => createRequest(serviceName, searchText));

  const responses = await Promise.all([...apiRequests]);
  const [unsplash, pixabay, pexels] = responses.map(({ data }) => data);
  res.json({ unsplash, pixabay, pexels });
});

module.exports = router;
