const express = require('express');
const router = express.Router();
const controllers = require("../controllers/index")
const {verifyAdminMiddleware, verifyTokenMiddleware, verifyUserMiddleware} = require("../middlewares/auth")

router.get("/", controllers.homeController)
router.get("/is-admin", verifyTokenMiddleware, verifyUserMiddleware, verifyAdminMiddleware, controllers.adminUserController)

module.exports = { indexRoutes: router }