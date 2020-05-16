const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    email: {
      type: String,
      require: true,
      unique: true,
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
<<<<<<< HEAD
    facebookProfile: {
      type: Object,
      required: false,
=======

    avatar: {
      type: String,
      require: false,
>>>>>>> f8bbab2c79df3713e2797b7138e498db6ce065e8
    },
  }),
);

function validate(user) {
  const schema = {
    password: Joi.string().required(),
    email: Joi.string().required().email(),
    avatar: Joi.string(),
  };

  return Joi.validate(user, schema);
}

//name in Atlas = Users
User.validate = validate;
exports.User = User;
