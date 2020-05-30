const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: false,
    },

    favourities: {
      type: [String],
      required: false,
    },

    resetToken: {
      type: String,
      required: false,
    },

    resetTokenExpiration: {
      type: String,
      required: false,
    },
    facebookProfile: {
      type: Object,
      required: false,
    },
    avatar: {
      type: String,
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

User.validate = validate;
exports.User = User;
