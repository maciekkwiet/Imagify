const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;

const cloudinarySecret = process.env.CLOUDINARY_SECRET;
const cloudinaryKey = process.env.CLOUDINARY_KEY;
const cloudinaryName = process.env.CLOUDINARY_NAME;

console.log(cloudinarySecret, cloudinaryKey, cloudinaryName);

cloudinary.config({
  cloud_name: 'cloudinaryName',
  api_key: 'cloudinaryKey',
  api_secret: 'cloudinarySecret',
});

router.post('/', async (req, res) => {
  const file = req.files.photo;
  const result = await cloudinary.uploader.upload(file.tempFilePath);
  req.user.avatar = result.url;
  const { avatar } = await req.user.save();
  res.json({ avatar });
});

module.exports = router;
