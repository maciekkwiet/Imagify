const _ = require('lodash');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const { User } = require('../model/user');
const jwtKey = process.env.JWT_SECRET;

router.post('/', async (req, res) => {
  //sprawdzenie czy nie ma błędu w przesłanych danych od użytkownika
  const { error } = User.validate(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  //tworzymy użytkownika jako obiekt, który zwraca Promisa i sprawdzamy czy email juz jest w DB

  let user = await User.findOne({ email: req.body.email });

  // //sprawdzenie czy istnieje w bazie
  if (user) return res.status(400).json({ error: 'User already registered' });
  else {
    // //Jeżeli użytkownika nie ma w bazie to go dodaj
    user = new User(_.pick(req.body, ['email', 'password', 'favourities']));
  }

  //haszowanie hasła
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  //wysyłam do bazy danych
  await user.save();
  const token = jwt.sign({ _id: user._id }, jwtKey);
  // wysyłam do klienta tylko wyselekcjonowane dane
  //auth => name of header
  //token =>value
  res.header('auth', token).json(_.pick(user, ['email', 'favourities']));
});

module.exports = router;
