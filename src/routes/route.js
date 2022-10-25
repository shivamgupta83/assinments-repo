const express = require('express');
const router = express.Router();
 
const User= require("../controllers/bookController")


router.post("/books", User.createbook  )

router.get("/allbooks", User.getbookData)

module.exports = router;