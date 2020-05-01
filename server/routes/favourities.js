const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  console.log(req.user);
  const { favourities } = req.user;
  res.send({ favourities });
  console.log(favourities);
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
  const { favourities } = req.user;
  const newarray = favourities.filter((el) => el !== url);
  res.json({ favourities: newarray });
});

module.exports = router;
