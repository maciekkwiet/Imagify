const { User } = require('../model/user');

const facebookCallback = (req, res) => {
  console.log('test');
  const { accessToken, refreshToken, profile } = req;
  User.find({ accessToken: accessToken }, (error, docs) => {
    //Sprawdzamy czy użytkownik istnieje czy jeszcze go nie ma
    if (docs) {
      //   done({ profile: profile });
      console.log(profile);
    }
    //Jezeli nie ma użytkownika to go tworzymy
    else {
      User.create(
        { facebookToken: accessToken, facebookProfile: profile, facebookTokenRefresh: refreshToken },
        (error) => {
          //sprawdzamy czy sa błędy
          if (error) {
            console.log('error: ', error);
          } else {
            // done({ profile: profile });
            console.log(profile);
            console.log('user is create');
          }
        },
      );
    }
  });
  //   console.log(accessToken);
  //   console.log(refreshToken);
  console.log('test');
};
module.exports = facebookCallback;
