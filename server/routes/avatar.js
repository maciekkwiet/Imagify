const axios = require('axios').default;
const express = require('express');
const router = express.Router();
const cloudinary = require("cloudinary").v2
const { User } = require('../model/user');
const cloudinarySecret = process.env.CLAUDINARY_SECRET;
const cloudinaryKey = process.env.CLAUDINARY_KEY;
const cloudinaryName = process.env.CLOUDINARY_NAME;
const claudinaryUrl = "https://api.cloudinary.com/v1_1/dixekqpwi/image/upload
const claudinaryUploadPreset = "zcn8zotb "


router.post('/', async(req,res)=>
{
const {photoUrl} = req.query;
const {email} = req.query.email;
const user = await User.findOne({email})
if(user)
{
if(user.avatar)
{
    res.json({"message":"avatar already exist"})
}
else
{
// const response = await axios.post("")
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

await cloudinary.uploader.upload(photoUrl,function(error, result) {console.log(result, error)});


await user.save();
res.json({avatar: user.avatar})
}
}
else{res.json({"message" : "invalid user"})}



})




router.get('/', async(req,res)=>
{
const {url} = req.query;



})















module.exports = router;