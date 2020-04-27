require('dotenv').config();
require('express-async-errors');
const PassportFacebookStrategy = require('passport-facebook').Strategy; // import samej strategi

const { User } = require('../model/user');
const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;

const initializaeFacebookStrategy = (passport) => {
  passport.use(
    new PassportFacebookStrategy(
      {
        //option for the facebook strategy
        clientID: FACEBOOK_APP_ID ,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: 'http://localhost:12345/facebook/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        // error jak coś pójdzie nie tak, docs zapisa na bazie rekordów
        done(accessToken, refreshToken, profile);
      },
    ),
  );
};
module.exports = initializaeFacebookStrategy;
