const express = require('express');
const router = express.Router();
const { User } = require('../model/user');

router.get('/', async (req, res) => {
  const { favourities } = req.user;
  res.send({ favourities });
});

router.post('/url', async (req, res) => {
  const { url } = req.body;
  const { favourities } = req.user;

  if (!favourities.includes(url)) {
    favourities.push(url);
    req.user.save();
  }
  res.json({ favourities });
});

router.delete('/', async (req, res) => {
  const { url } = req.body;

  let { favourities } = req.user;
  favourities = favourities.filter((el) => el !== url);
  await User.findOneAndUpdate({ _id: req.user._id }, { $set: { favourities } }, { new: true });
  res.json({ favourities });
});

module.exports = router;
