const mongodb = require("mongodb");
const Restaurant = require("../models/restaurant-model");
// const User = require("../models/user-model");

class controller {
  static async allRestaurant(req, res, next) {
    try {
      const allRestaurant = await Restaurant.find();
      return res.status(200).json(allRestaurant);
    } catch (error) {
      next(error);
    }
  }

  static async addRestaurant(req, res, next) {
    // return res.status(200).json({
    //   success: true,
    //   message: `Name was added successfully`,
    // });

    let {
      restaurantName,
      restaurantLogo,
      restaurantImage,
      restaurantLocation,
      restaurantLatitude,
      restaurantLongitude,
      restaurantRating,
    } = req.body;
    // let { street, state, city, country, pincode } = restaurantLocation;

    const restaurant = new Restaurant({
      restaurantName,
      restaurantLogo,
      restaurantImage,
      restaurantLocation,
      restaurantLatitude,
      restaurantLongitude,
      restaurantRating,
      userID: req.user,
    });

    await restaurant.save();

    return await res.status(201).json({
      success: true,
      message: `${restaurantName} is added successfully`,
    });
    // } catch (error) {
    //   next(error);
    // }
  }
}

module.exports = controller;
