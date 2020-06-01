const express = require('express');
const Joi = require('@hapi/joi');

const createRequest = require('../utils/createRequest');

const router = express.Router();

const schema = Joi.object({
  services: Joi.array()
    .items(Joi.string().uppercase().valid('UNSPLASH', 'PIXABAY', 'PEXELS'))
    .unique()
    .default(['UNSPLASH', 'PIXABAY', 'PEXELS']),
  color: Joi.string().valid('red', 'black', 'white', 'yellow', 'orange', 'green', 'blue'),
  order_by: Joi.string(),
});

router.get('/', async (req, res) => {
  const { searchText } = req.query;
  const { color } = req.body;
  // const { order_by } = req.body;
  // const { filter } = req.body;
  const filter = 'popularity';
  const order_by = 'popular';


  const {
    value: { services },
    error,
  } = schema.validate(req.body);

  if (error) return res.status(400).json({ error: error.details[0].message });

  if (filter == 'color') {
    const newArrayColor = services.filter((serviceName) => serviceName !== 'PEXELS');
    this.apiRequests = newArrayColor.map((serviceName) => createRequest(serviceName, searchText, color, filter));
  } else if (filter == 'popularity') {
    const newArrayColor = services.filter((serviceName) => serviceName !== 'PEXELS');
    const [UNSPLASH, PIXABAY] = newArrayColor;
    // const {UNSPLASH,PIXABAY} =[...newArrayColor]
    console.log(UNSPLASH);

    if (UNSPLASH && order_by == 'min_popularity') {
      order_by == 'latest';
      this.serviceName = UNSPLASH;
    } else if (UNSPLASH && order_by == 'max_popular') {
      order_by == 'relevant';
      this.serviceName = UNSPLASH;
      console.log('service ' + this.serviceName);
    }
    console.log('test order_by ' + order_by);
    console.log('service2' + this.serviceName);
    console.log('orderby' + order_by);
    console.log('filter' + filter);
    console.log('searchText' + searchText);
    this.apiRequests = createRequest(this.serviceName, searchText, order_by, filter);
  }

  // this.apiRequests = services.map((serviceName) => createRequest(serviceName, searchText, color));

  const responses = await Promise.all(this.apiRequests);

  const [unsplash, pixabay, pexels] = responses.map(({ data }) => data);

  res.json({ unsplash, pixabay, pexels });
});

module.exports = router;
