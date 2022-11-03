const express = require('express');
const router = express.Router();
 const UserController= require("../controllers/usermodel2controller")
const productController= require("../controllers/productmodelcontroller")
const orderController= require("../controllers/ordermodelcontroller")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// Can we set the 'next' input parameter in a route handler?
// What is the primary difference between a middleware and a route handler?
router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
    res.send("Ending the cycle")
}  )

//1 createuser
 router.post("/createUser",commonMW.mid1,UserController.createUser)

//2 create product
router.post("/product",productController.createproduct)

//3 create order
 router.post("/order",commonMW.mid1,orderController.createorder)
 
// get orderdata
  router.get("/orderdata",orderController.getorderdata)


// router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

// router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

module.exports = router;