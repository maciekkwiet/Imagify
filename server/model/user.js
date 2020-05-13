const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model(
  'users',
  new mongoose.Schema({
    email: {
      type: String,
      require: true,
    },

    password: {
      type: String,
      require: true,
    },

    favouritiescc: {
      type: [String],
      required: false,
    },

    resetToken: {
      type: String,
      require: false,
    },

    resetTokenExpiration: {
      type: String,
      require: false,
    },

  
  }),
);

function validate(user) {
  const schema = {
    password: Joi.string().required(),
    email: Joi.string().required().email(),
    resetToken: Joi.string(),
    resetTokenExpiration: Joi.string(),
  };

  return Joi.validate(user, schema);
}

//name in Atlas = Users
User.validate = validate;
exports.User = User;
