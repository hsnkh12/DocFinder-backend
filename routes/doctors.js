const express = require('express');
const router = express.Router();
const controllers = require("../controllers/doctors")
const reviews = require("../controllers/reviews")
const {verifyTokenMiddleware, verifyUserMiddleware} = require("../middlewares/auth")


router.get("/", controllers.filterDoctorsController)
router.get("/:id", controllers.getDoctorByIDController)
router.get("/name/:name", controllers.getDoctorsByNameController)

router.delete("/:id",
    verifyTokenMiddleware, 
    verifyUserMiddleware,
    controllers.deleteDoctorController
)

router.post("/scrap", 
    verifyTokenMiddleware, 
    verifyUserMiddleware,
    controllers.scrapNewDoctorsController
)

router.get("/:id/reviews", 
    verifyTokenMiddleware, 
    verifyUserMiddleware,
    reviews.getDoctorReviewsController
)

module.exports = { doctorsRoutes: router }