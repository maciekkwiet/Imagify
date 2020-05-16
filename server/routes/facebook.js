const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { User } = require('../model/user');

const jwtKey = process.env.JWT_SECRET;

router.get('/', passport.authenticate('facebook', { session: false, scope: ['email'] }));

router.get(
  '/callback',
  passport.authenticate('facebook', { failureRedirect: '/login', session: false }),
  async (req, res) => {
    const { user: profile } = req;
    const email = profile.emails[0].value;
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, facebookProfile: profile });
    }
    //Tu stworzyć usera jeśli go nie ma, zrobić token i go wysłać

    const token = jwt.sign({ _id: user._id }, jwtKey);
    // res.header({ 'x-aut': token }).redirect('/');
    res.cookie('auth', token).redirect('/#');
  },
);
module.exports = router;
