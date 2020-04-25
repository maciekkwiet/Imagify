require('express-async-errors');
const _ = require('lodash');
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { User } = require('../model/user');

router.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json({ user });
});

module.exports = router;
