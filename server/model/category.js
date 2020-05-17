const mongoose = require('mongoose');

const Category = mongoose.model(
  'Category',
  new mongoose.Schema({
    name: {
      type: { String, default: 'New folder' },
      require: false,
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

exports.Category = Category;
