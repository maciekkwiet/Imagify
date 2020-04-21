const express = require('express'); //zdefiniowany serwer
const login = require('./login'); // pobieramy moduł
const register = require('./register');

const router = express.Router();

// router.use('/login', login);
router.use('/register', register);
// router.post('/favourites', favourites);

module.exports = router;
