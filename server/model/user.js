const mongoose = require('mongoose');
const Joi = require('joi')

const User = mongoose.model('User',new mongoose.Schema({

    email: {
      type: String,
      require: true,
    },

    password: {
      type: String,
      require: true,
    },

    favourities: {
      type: [String],
      required: false,
    },
  }),
);

function validate(user) {
  console.log(user);
  const schema = {
    password: Joi.string().required(),
    email: Joi.string().required(),
    favourities: Joi.string(),
  };

  return Joi.validate(user, schema);
}

//name in Atlas = Users
exports.validate = validate;
exports.User = User;
