const express = require('express');

const login = require('./login');
const register = require('./register');
const error = require('../middleware/error');

const router = express.Router();
router.use('/register', register);
router.use('/login', login);
router.use(error);

module.exports = router;
