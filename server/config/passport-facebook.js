const PassportFacebookStrategy = require('passport-facebook').Strategy; // import samej strategi

const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;

const initializeFacebookStrategy = (passport) => {
  passport.use(
    new PassportFacebookStrategy(
      {
        //option for the facebook strategy
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: '/api/facebook/callback',
        profileFields: ['id', 'displayName', 'email'],
      },
      (accessToken, refreshToken, profile, done) => {
        return done(null, profile);
      },
    ),
  );
};

module.exports = initializeFacebookStrategy;
