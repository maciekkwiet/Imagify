const router = require('express').Router();

const login = require('./login');
const register = require('./register');
const facebook = require('./facebook');
const me = require('./me');
const images = require('./images');
const favourities = require('./favourities');
const auth = require('../middleware/auth');
const error = require('../middleware/error');

const avatar = require('./avatar');

router.use('/register', register);
router.use('/login', login);
router.use('/facebook', facebook);
router.use('/images', images);
router.use('/me', auth, me);
router.use('/favourities', auth, favourities);
router.use('/upload-avatar', auth, avatar);

router.use(error);

module.exports = router;
