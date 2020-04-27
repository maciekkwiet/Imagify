const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    email: {
      type: String,
      require: false,
      // unique: true,
    },

    password: {
      type: String,
      require: false,
      // unique: true,
    },

    favourities: {
      type: [String],
      required: false,
    },

    facebookToken: {
      type: String,
      required: false,
    },

    facebookTokenRefresh: {
      type: String,
      required: false,
    },

    facebookProfile: {
      type: Object,
      required: false,
    },
  }),
);

function validate(user) {
  console.log(user);
  const schema = {
    password: Joi.string().required(),
    email: Joi.string().required().email(),
  };

  return Joi.validate(user, schema);
}

//name in Atlas = Users
User.validate = validate;
exports.User = User;
