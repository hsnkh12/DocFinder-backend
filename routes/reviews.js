const express = require('express');
const router = express.Router();
const controllers = require("../controllers/reviews")
const {verifyTokenMiddleware, verifyUserMiddleware} = require("../middlewares/auth")



router.post("/:id", 
    verifyTokenMiddleware, 
    verifyUserMiddleware,
    controllers.addReviewController
)

router.delete("/:id", 
    verifyTokenMiddleware, 
    verifyUserMiddleware,
    controllers.deleteReviewController
)

router.put("/:id", 
    verifyTokenMiddleware, 
    verifyUserMiddleware,
    controllers.updateReviewController
)
router.get("/:id", 
    controllers.getDoctorReviewsController
)


module.exports = { reviewsRoutes: router }