const express = require('express');
const router = express.Router();
const login = require('./login');
const register = require('./register');
const facebook = require('./facebook');
const me = require('./me');
const auth = require('../middleware/auth');

router.use('/register', register);
router.use('/login', login);
router.use('/facebook', facebook);

router.use('/me', auth, me);

module.exports = router;
