const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
});

const restaurantSchema = new Schema({
  restaurantName: {
    type: String,
    trim: true,
    required: [true, "Name is required"],
    // validate: {
    //   validator: (value) => {
    //     return /^[a-zA-Z0-9]{2,15}$/.test(value);
    //   },
    //   message: (problem) => `${problem.value} is not a valid name`,
    // },
  },
  restaurantLogo: {
    type: String,
    require: true,
  },
  restaurantImage: {
    type: String,
    require: true,
  },

  restaurantLocation: {
    type: AddressSchema,
    required: true,
  },

  restaurantLatitude: {
    type: Number,
  },

  restaurantLongitude: {
    type: Number,
  },
  restaurantRating: {
    type: Number,
  },

  userID: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },

  // discountCoupon: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Users",
  //   required: true,
  // },

  // foodID: {
  //   items: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: "Food",
  //       required: true,
  //     },
  //   ],
  // },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
