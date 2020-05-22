const _ = require('lodash');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const { User } = require('../model/user');
const jwtKey = process.env.JWT_SECRET;

router.post('/', async (req, res) => {

  const { error } = User.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).json({ error: 'User already registered' });
  else {
    user = new User(_.pick(req.body, ['email', 'password', 'favourities', 'avatar']));
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  const token = jwt.sign({ _id: user._id }, jwtKey);


  res.header('auth', token).send(_.pick(user, ['email', 'favourities', 'token']));

});

module.exports = router;
