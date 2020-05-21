const mongoose = require('mongoose');
const Joi = require('joi');

const Category = mongoose.model(
  'Category',
  new mongoose.Schema({
    name: {
      type: { String },
      require: false,
      maxlength: 10,
    },

    images: {
      type: [String],
      require: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User', //name of collection
    },
  }),
);

function validate(category) {
  const schema = {
    name: Joi.string(),
    maxlength: 10,
    imagies: Joi.string(),
  };

  return Joi.validate(category, schema);
}

Category.validate = validate;
exports.Category = Category;
