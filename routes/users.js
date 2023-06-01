const express = require('express');
const router = express.Router();
const controllers = require("../controllers/users")
const {verifyTokenMiddleware, verifyUserMiddleware} = require("../middlewares/auth")

router.post("/login", controllers.loginController)
router.post("/signup", controllers.singupController)

router.put("/reset-password/:id",
    verifyTokenMiddleware, 
    verifyUserMiddleware,
    controllers.resetPasswordController
)

router.delete("/:id", 
    verifyTokenMiddleware, 
    verifyUserMiddleware,
    controllers.deleteUserController
)

router.put("/:id", 
    verifyTokenMiddleware, 
    verifyUserMiddleware,
    controllers.updateUserController
)

router.post("/logout",
    verifyTokenMiddleware, 
    verifyUserMiddleware, 
    controllers.logoutController
)

router.get("/:id", 
    verifyTokenMiddleware, 
    verifyUserMiddleware, 
    controllers.getUserByIDController
)

router.get("/", 
    verifyTokenMiddleware, 
    verifyUserMiddleware, 
    controllers.filterUsersController
)

module.exports = { usersRoutes: router }