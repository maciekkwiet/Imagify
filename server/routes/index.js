const router = require('express').Router();

const login = require('./login');
const register = require('./register');
const facebook = require('./facebook');
const me = require('./me');
const images = require('./images');
const favourities = require('./favourities');
const auth = require('../middleware/auth');
<<<<<<< HEAD
const error = require('../middleware/error');
=======
const avatar = require('./avatar');
>>>>>>> f8bbab2c79df3713e2797b7138e498db6ce065e8

router.use('/register', register);
router.use('/login', login);
router.use('/facebook', facebook);
router.use('/images', images);
router.use('/me', auth, me);
router.use('/favourities', auth, favourities);
router.use('/upload-avatar',auth,avatar);

router.use(error);

module.exports = router;
