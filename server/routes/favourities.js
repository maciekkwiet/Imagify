const express = require('express');
const router = express.Router();
// const {user} = require('../middleware/auth')
const { User } = require('../model/user');

router.get('/', async (req, res) => {
  const { _id } = req.user;
  let user = await User.findOne({ _id });
  const { favourities } = user;
  res.send({ favourities });
});

router.post('/:url', async (req, res) => {
  const { url } = req.params;
  const { _id } = req.user;
  let user = await User.findOne({ _id });

  const { favourities } = user;

  if (!favourities.includes(url)) {
    favourities.push(url);
    req.user.save();
  }
  res.json({ favourities: 'favourities' });
});

router.delete('/:url', async (req, res) => {
  const { url } = req.params;
  const { _id } = req.user;
  let user = await User.findOne({ _id });
  const { favourities } = user;
  const newarray = favourities.filter((x) => x !== url);
  res.json({ favourities: newarray });
});

module.exports = router;
