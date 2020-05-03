const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { favourities } = req.user;
  res.send({ favourities });
});

router.post('/:url', async (req, res) => {
  const { url } = req.params;
  const { favourities } = req.user;

  if (!favourities.includes(url)) {
    favourities.push(url);
    req.user.save();
  }
  res.json({ favourities });
});

router.delete('/:url', async (req, res) => {
  const { url } = req.params;
  let { favourities } = req.user;
  favourities = favourities.filter((el) => el !== url);
  res.json({ favourities });
  req.user.update({ _id: req.user._id }, { $set: { favourities: favourities } });
});

module.exports = router;
