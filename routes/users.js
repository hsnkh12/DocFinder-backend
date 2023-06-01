const express = require('express');
const router = express.Router();
const controllers = require("../controllers/users")

router.post("/login", controllers.loginController)
router.post("/signup", controllers.singupController)
router.post("/reset-password", controllers.resetPasswordController)
router.delete("/:id", controllers.deleteUserController)
router.put("/:id", controllers.updateUserController)
router.post("/logout", controllers.logoutController)
router.get("/:id", controllers.getUserByIDController)
router.get("/", controllers.filterUsersController)

module.exports = { usersRoutes: router }