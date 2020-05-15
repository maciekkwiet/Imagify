const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const cloudinarySecret = process.env.CLAUDINARY_SECRET;
const cloudinaryKey = process.env.CLAUDINARY_KEY;
const cloudinaryName = process.env.CLOUDINARY_NAME;

cloudinary.config({
  cloud_name: 'dixekqpwi',
  api_key: '698369834765699',
  api_secret: '-bXjadjyGbOMFYKFP3aZOhOTtU4',
});

router.post('/', async (req, res) => {
  const file = req.files.photo;
  console.log(req.user.token);
  console.log(file);
  const result = await cloudinary.uploader.upload(file.tempFilePath);
  console.log(result);
  console.log('Result', result.url);
  req.user.avatar = result.url;
  const { avatar } = await req.user.save();
  res.json({ avatar });
});

module.exports = router;
