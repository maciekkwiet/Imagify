const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const Schema = mongoose.Schema;

const user = new Schema({
  login: {
    type: String,
    minlength: 3,
    maxlength: 10,
    required: true,
  },

  password: {
    type: String,
    require: true,
    // minlength: 5,
    // maxlength: 1024,
    // unique: true,
    // lowercase: true,
    // uppercase: true,
    // specialCharacters: true,
    // numbers: true
  },

  email: {
    type: String,
    require: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },

  favourities: {
    type: [String], ///////////////////////
    required: false,
  },
});

function validateUser(user) {
  const schema = {
    login: Joi.String().alphanum().min(3).max(10).has().not().spaces().required(),

    password: Joi.String().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).has().not().spaces().required(),

    email: Joi.String().min(5).max(255).required().email(),
  };
  return Joi.validate(user, schema);
}

//name in Atlas = Users
module.exports = mongoose.model('Users', user);
exports.validate = validateUser;
