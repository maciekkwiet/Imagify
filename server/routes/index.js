const router = require('express').Router();

const login = require('./login');
const category = require('./category');
const register = require('./register');
const facebook = require('./facebook');
const me = require('./me');
const images = require('./images');
const favourities = require('./favourities');
const avatar = require('./avatar');

const auth = require('../middleware/auth');
const error = require('../middleware/error');
const resetpassword = require('./email/resetpassword');

router.use('/register', register);
router.use('/login', login);
router.use('/facebook', facebook);
router.use('/images', images);
router.use('/me', auth, me);
router.use('/favourities', auth, favourities);
router.use('/resetpassword', resetpassword);
router.use('/upload-avatar', auth, avatar);
router.use('/category', auth, category);

router.use(error);

module.exports = router;
