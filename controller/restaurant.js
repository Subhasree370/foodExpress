const mongodb = require("mongodb");
const Restaurant = require("../models/restaurant-model");
// const User = require("../models/user-model");

class controller {
  static async addRestaurant(req, res, next) {
    // return res.status(200).json({
    //   success: true,
    //   message: `Name was added successfully`,
    // });

    let { restaurantName, restaurantLogo } = req.body;
    // try {
    //   if (!name || !price || !description) {
    //     const err = new Error();
    //     err.name = "Bad Request";
    //     err.status = 400;
    //     err.message = "Please fill all required details";
    //     throw err;
    //   }

    // const restaurantName = await Restaurant.findOne({ name: name });

    //   if (foundName) {
    //     const err = new Error();
    //     err.name = "Not Acceptable";
    //     err.status = 406;
    //     err.message = "This food name dey meun before sir/ma";
    //     throw err;
    //   }

    //   const file = req.files.image;
    //   const subpath =
    //     "/assets/img/" + Math.random().toString(36) + "_" + file.name;
    //   const path = __basedir + subpath;
    //   file.mv(path, (err) => {
    //     if (err) {
    //       console.log(err);
    //     }
    //     console.log("success");
    //   });
    const restaurant = new Restaurant({
      restaurantName,
      restaurantLogo,
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
