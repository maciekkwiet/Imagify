const express = require('express');
const Joi = require('@hapi/joi');

const createRequest = require('../utils/createRequest');

const router = express.Router();

const schema = Joi.object({
  services: Joi.array()
    .items(Joi.string().uppercase().valid('UNSPLASH', 'PIXABAY', 'PEXELS'))
    .unique()
    .default(['UNSPLASH', 'PIXABAY', 'PEXELS']),
  color: Joi.string(),
  orderBy: Joi.string(),
  orientation: Joi.string(),
  filters: Joi.object(),
});

router.post('/', async (req, res) => {
  console.log(req.body);

  const { searchText } = req.query;
  const {
    filters: { color, orientation, orderBy },
  } = req.body;

  console.log(color);
  console.log(orientation);
  console.log(orderBy);

  let apiRequests = [];
  let orderByUs;
  let orderByPb;
  let orientationUs;
  let orientationPb;

  const {
    value: { services },
    error,
  } = schema.validate(req.body);

  if (error) return res.status(400).json({ error: error.details[0].message });

  const newArrayColor = services.filter((serviceName) => serviceName !== 'PEXELS');

  if (color) {
    apiRequests = newArrayColor.map((serviceName) =>
      createRequest(serviceName, searchText, color, orderByUs, orderByPb, orientationUs, orientationPb),
    );
  }

  if (orderBy == 'min_popularity') {
    orderByUs = 'latest';
    orderByPb = 'latest';
    apiRequests = newArrayColor.map((serviceName) =>
      createRequest(serviceName, searchText, color, orderByUs, orderByPb, orientationUs, orientationPb),
    );
  }
  if (orderBy == 'max_popularity') {
    orderByUs = 'relevant';
    orderByPb = 'popular';
    apiRequests = newArrayColor.map((serviceName) =>
      createRequest(serviceName, searchText, color, orderByUs, orderByPb, orientationUs, orientationPb),
    );
  }
  if (orientation == 'Vertical') {
    orientationUs = 'landscape';
    orientationPb = 'vertical';
    apiRequests = newArrayColor.map((serviceName) =>
      createRequest(serviceName, searchText, color, orderByUs, orderByPb, orientationUs, orientationPb),
    );
  }
  if (orientation == 'Horizontal') {
    orientationUs = 'portrait';
    orientationPb = 'horizontal';
    apiRequests = newArrayColor.map((serviceName) =>
      createRequest(serviceName, searchText, color, orderByUs, orderByPb, orientationUs, orientationPb),
    );
  }

  const responses = await Promise.all(apiRequests);

  const [unsplash, pixabay, pexels] = responses.map(({ data }) => data);

  res.json({ unsplash, pixabay, pexels });
});

module.exports = router;
