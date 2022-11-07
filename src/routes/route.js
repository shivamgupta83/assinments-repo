const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const autharization=require("../midi/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end

router.get("/users/:userId",autharization.auth, userController.getUserData)

router.put("/users/:userId", autharization.auth,userController.updateUser)

module.exports = router;