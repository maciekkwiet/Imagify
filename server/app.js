require('dotenv').config();
require('express-async-errors');
const facebook = require('./controlers/facebook');
const facebookCallback = require('./controlers/facebookCallback');
const initializaeFacebookStrategy = require('./routes/facebook');

const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');

const app = express();

const router = require('./routes');
const me = require('./routes/me');
const error = require('./middleware/error');

const port = process.env.PORT || 12345;

const dbKey = process.env.DB_KEY;
mongoose
  .connect(dbKey, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecting with Data Base is ok'))
  .catch(() => console.error('Error with Data Base'));

app.use(express.json());

app.use(passport.initialize()); // inicjalizacja passporta
initializaeFacebookStrategy(passport);
app.use('/api', router); //na endpoint api dzieje się to co jest w router

app.get('/facebook', passport.authenticate('facebook'), facebook); // pojawią sie dane z facebooka
app.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), facebookCallback);
// router.use('/me', me);
// app.use(error);

app.get('/auth/facebook', passport.authenticate('facebook'), function (req, res) {
  // The request will be redirected to Facebook for authentication, so this
  // function will not be called.
});

app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), function (req, res) {
  res.redirect('/account');
});

app.get('/account', ensureAuthenticated, function (req, res) {
  console.log(req.user);
  res.render('account', { user: req.user });
});

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

app.listen(port, () => console.log(`Listening on port ${port}`));
