const express = require('express');

const login = require('./login');
const register = require('./register');
const images = require('./images');
const me = require('./me');
const error = require('../middleware/error');
const auth = require('../middleware/auth');

const router = express.Router();
router.use('/register', register);
router.use('/login', login);
router.use('/images', images);
router.use('/me', auth, me);
router.use(error);

module.exports = router;
