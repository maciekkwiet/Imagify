const express = require('express');

const login = require('./login');
const register = require('./register');
const error = require('../middleware/error');
const me = require('./me');
const favourities = require('./favourities');
const resetpassword = require('./resetpassword');
const auth = require('../middleware/auth');

const router = express.Router();
router.use('/register', register);
router.use('/login', login);
router.use('/me', auth, me);
router.use('/favourities', auth, favourities);
router.use('/resetpassword',resetpassword);

router.use(error);

module.exports = router;
