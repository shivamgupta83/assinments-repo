const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const {authenticate,authorise}=require("../middleware/auth")

 
//Write a POST api to register a user from the user details in request body
router.post("/createUser", userController.createUser)

//login user
router.post("/loginUser", userController.loginUser)

//The userId is sent by front end

router.get("/getUserData/:userId",authenticate,authorise, userController.getUserData)

router.post("/postMessage/:userId/posts",authenticate,authorise, userController.postMessage)

router.put("/updateUser/:userId",authenticate,authorise, userController.updateUser)
 
router.delete("/deleteuser/:userId",authenticate,authorise, userController.deleteuser)

module.exports = router;