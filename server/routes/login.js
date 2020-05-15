const { User } = require('../model/user');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const jwtKey = process.env.JWT_SECRET;

router.post('/', async (req, res) => {
  //sprawdzenie czy nie ma błędu w przesłanych danych od użytkownika
  const { error } = User.validate(req.body);
  if (error) return res.status(400).json({ error: 'error 400' });
  //tworzymy użytkownika jako obiekt, który zwraca Promisa i sprawdzamy czy email juz jest w DB
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: 'Invalid email or password' });

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) return res.status(400).json({ error: 'error 400' });
  const token = jwt.sign({ _id: user._id }, jwtKey);
  res.json({ token: token });
});

module.exports = router;
