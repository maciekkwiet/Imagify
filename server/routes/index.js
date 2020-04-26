const express = require('express');
const router = express.Router();

const login = require('./login');
const register = require('./register');
const error = require('../middleware/error');
const me = require('./me');
const auth = require('../middleware/auth');

router.use('/register', register);
router.use('/login', login);
router.use('/me', auth, me);
router.use(error);

module.exports = router;
