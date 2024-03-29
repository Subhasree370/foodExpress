const express = require("express");
const router = express.Router();
const controller = require("../controller/admin");
const auth = require("../middleware/auth-middleware");

router.post("/", auth.decodeToken, auth.isRestaurantOwner, controller.newFood);

router.get(
  "/:restaurentId",
  auth.decodeToken,
  auth.isRestaurantOwner,
  controller.allFoodsByRestaurant
);

router.post(
  "/makeavailable",
  auth.decodeToken,
  auth.isAdmin,
  controller.makeFoodAvailable
);

router.post("/makeadmin", auth.decodeToken, auth.isAdmin, controller.makeAdmin);

router.delete("/:id", auth.decodeToken, auth.isAdmin, controller.deleteFood);

module.exports = router;
