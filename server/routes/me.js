const _ = require('lodash');
const auth = require('../middleware/auth');
const { User } = require('../model/user');
const express = require('express');
const router = express.Router();
require('express-async-errors')
router.get('/', auth, async (req, res) =>
{
const user = await User.findById(req.user._id).select('-password');
res.send(user)});

module.exports = router;
