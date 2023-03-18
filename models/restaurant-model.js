const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// restaurant_location: restaurant_location_id_FK,

const restaurantSchema = new Schema({
  restaurantName: {
    type: String,
    trim: true,
    required: [true, "Name is required"],
    validate: {
      validator: (value) => {
        return /^[a-zA-Z0-9]{2,15}$/.test(value);
      },
      message: (problem) => `${problem.value} is not a valid name`,
    },
  },
  restaurantLogo: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
