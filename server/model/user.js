const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    email: {
      type: String,
      require: true,
<<<<<<< HEAD
      // unique: true,
=======
      unique: true,
>>>>>>> 7f1175e1987a8761d201c49dc357515d27b7151e
    },

    password: {
      type: String,
      // require: true,
    },

    favourities: {
      type: [String],
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
