const { Category } = require('../model/category');
const express = require('express');

const router = express.Router();

router.post('/create', async (req, res) => {
  const currentUser = req.user;
  const { _id } = currentUser;
  console.log(_id);
  const searchName = await Category.findOne({ user: _id });
  console.log('name' + searchName);
  if (searchName === null || searchName.name != req.body.name) {
    const folder = new Category({
      // name: req.body.name,
      // images: req.body.images,
      ...req.body,
      user: _id,
    });
    await folder.save();
    res.status(200).json({ folder });
  } else {
    res.json({ text: 'This folder already exist' });
  }
});

router.post('/:url', async (req, res) => {
  const { url } = req.params;
  // console.log('url' + url);
  const { _id } = req.user;
  // console.log('id' + _id);
  let folder = await Category.findOne({ user: _id });
  // console.log('folder' + folder);
  if (folder && !folder.images.includes(url)) {
    folder.images.push(url);
    folder.save();
    res.json({ folder: folder });
  } else {
    res.json({ error: 'You can not add the photos to this folder' });
  }
});

module.exports = router;
