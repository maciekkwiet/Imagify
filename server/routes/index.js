const express = require('express');

const login = require('./login');
const register = require('./register');
const images = require('./images');
const error = require('../middleware/error');
const me = require('./me');
const favourities = require('./favourities');
const auth = require('../middleware/auth');
const avatar = require('./avatar');

const router = express.Router();
router.use('/register', register);
router.use('/login', login);
router.use('/images', images);
router.use('/me', auth, me);
router.use('/favourities', auth, favourities);
router.use('/avatar', avatar);

router.use(error);

module.exports = router;
