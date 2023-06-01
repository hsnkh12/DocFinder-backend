const express = require('express');
const router = express.Router();
const controllers = require("../controllers/reviews")
router.post("/add", controllers.addReviewController)
router.delete("/:id", controllers.deleteReviewController)
router.put("/:id", controllers.updateReviewController)
router.get("/:id", controllers.getReviewByIDController)


module.exports = { reviewsRoutes: router }