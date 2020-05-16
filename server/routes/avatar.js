const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const api_secret = process.env.CLAUDINARY_SECRET;
const api_key = process.env.CLAUDINARY_KEY;
const cloud_name = process.env.CLOUDINARY_NAME;

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

  router.post('/', async (req, res) => {
    try{
    const file = req.files.photo;
    // console.log(req.user.token);
    // console.log(file);
    const result = await cloudinary.uploader.upload(file.tempFilePath);
    // console.log(result);
    // console.log('Result', result.url);
    req.user.avatar = result.url;
    const { avatar } = await req.user.save();
    res.json({ avatar });
    }
    catch {
      res.json({ text: 'Something is wrong with avatar' });
    }
  });


module.exports = router;
