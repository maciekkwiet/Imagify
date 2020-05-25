const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    email: {
      type: String,
      require: true,
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

    resetToken: {
      type: String,
      require: false,
    },

    resetTokenExpiration: {
      type: String,
      require: false},
    facebookProfile: {
      type: Object,
      required: false,
    },
  }),
);

function validate(user) {
  const schema = {
    password: Joi.string().required(),
    email: Joi.string().required().email(),
  };

  return Joi.validate(user, schema);
}

//name in Atlas = Users
User.validate = validate;
exports.User = User;
