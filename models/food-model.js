const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  available: {
    type: Boolean,
    default: true,
  },

  category: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  images: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Food", foodSchema);
