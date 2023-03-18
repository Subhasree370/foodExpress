const express = require("express");
const router = express.Router();
const controller = require("../controller/restaurant");
const auth = require("../middleware/auth-middleware");

router.post(
  "/add-restaurant",
  auth.decodeToken,
  auth.isRestaurantOwner,
  controller.addRestaurant
);

// router.get("/allfoods", auth.decodeToken, auth.isAdmin, controller.allFoods);

// router.post(
//   "/makeavailable",
//   auth.decodeToken,
//   auth.isAdmin,
//   controller.makeFoodAvailable
// );

// router.post("/makeadmin", auth.decodeToken, auth.isAdmin, controller.makeAdmin);

// router.delete("/:id", auth.decodeToken, auth.isAdmin, controller.deleteFood);

module.exports = router;
