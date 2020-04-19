const express = require('express');
const login = require('./login');
// const register = require('./register');

const router = express.Router();

router.use('/login', login);
// router.use('/register', register);
// router.post('/favourites', favourites);

module.exports = router;
