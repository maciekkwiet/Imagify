const express = require('express');
const router = express.Router();
const login = require('./login');
const register = require('./register');
const error = require('../middleware/error');
const me = require('./me');
const auth = require('../middleware/auth');

router.use('/register', register);
router.use('/login', login);

// router.get('/facebook',passport.authenticate('facebook'),facebook)// pojawią sie dane z facebooka
// router.get('/facebook/callback',passport.authenticate('facebook'),facebookCallback);
router.use('/me', auth, me);
router.use(error);

module.exports = router;
