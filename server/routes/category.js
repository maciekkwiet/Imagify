const { Category } = require('../model/category');
const express = require('express');

const router = express.Router();

router.post('/create', async (req, res) => {
  const currentUser = req.user;
  const { _id } = currentUser;
  const category = await Category.findOne({ user: _id });

  if (category === null || category.name != req.body.name) {
    const folder = new Category({
      ...req.body,
      user: _id,
    });
    await folder.save();
    res.status(200).json({ folder });
  } else {
    res.json({ text: 'This folder already exist' });
  }
});

router.post('/', async (req, res) => {
  const { url } = req.body;
  const { _id } = req.user;
  const { name } = req.body;
  const folder = await Category.findOne({ user: _id, name });

  if (!folder) {
    res.json({ error: "This folder doesn't exist" });
  } else if (folder && folder.images.includes(url)) {
    res.json({ error: 'This photo already exist in this folder' });
  } else {
    folder.images.push(url);
    folder.save();
    res.json({ folder: folder });
  }
});

router.delete('/', async (req, res) => {
  const { _id } = req.user;
  const { name } = req.body;
  const folder = await Category.findOne({ user: _id, name });

  if (!folder) {
    res.json({ error: "This folder doesn't exist" });
  } else if (folder) {
    await Category.findOneAndDelete({ user: _id, name });
    res.json({ text: 'This folder was deleted' });
  }
});

module.exports = router;
