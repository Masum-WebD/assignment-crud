const express = require("express");
const usersController = require("../Controllers/users.controll");
const limiter = require("../Midleware/limiter");

const router = express.Router();

router
  .route("/")
  .get(usersController.getUsers, limiter)
  .post(usersController.addUsers);

  router.route("/").get(usersController.randomUsers)
router
  .route("/:id")
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
