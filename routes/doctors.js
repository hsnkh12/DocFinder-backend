const express = require('express');
const router = express.Router();
const controllers = require("../controllers/doctors")
const reviews = require("../controllers/reviews")

router.get("/", controllers.filterDoctorsController)
router.get("/:id", controllers.getDoctorByIDController)
router.get("/:name", controllers.getDoctorsByNameController)
router.delete("/:id",controllers.deleteDoctorController)
router.post("/scrap", controllers.scrapNewDoctorsController)
router.get("/:id/reviews", reviews.getDoctorReviewsController)

module.exports = { doctorsRoutes: router }