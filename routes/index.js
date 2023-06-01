const express = require('express');
const router = express.Router();
const controllers = require("../controllers/index")

router.get("/", controllers.homeController)

module.exports = { indexRoutes: router }