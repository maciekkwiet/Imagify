const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;

const api_secret = process.env.CLOUDINARY_SECRET;
const api_key = process.env.CLOUDINARY_KEY;
const cloud_name = process.env.CLOUDINARY_NAME;

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

router.post('/', async (req, res) => {
  try {
    const { photo } = req.body;
    const result = await cloudinary.uploader.upload(photo);
    req.user.avatar = result.url;
    const { avatar } = await req.user.save();
    res.json({ avatar });
  } catch (ex) {
    console.log(ex);
    res.json({ text: 'Something is wrong with avatar' });
  }
});

module.exports = router;
