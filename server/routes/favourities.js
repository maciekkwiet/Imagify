const express = require('express');
const router = express.Router();
const { user } = require('../middleware/auth');
const { User } = require('../model/user');
// const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  const { _id } = req.user;
  let user = await User.findOne({ _id });
  console.log(req.user);
  const { favourities } = user;
  res.send({ favourities });
  console.log(favourities);
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
  const newarray = favourities.filter((el) => el !== url);
  res.json({ favourities: newarray });
});

module.exports = router;
