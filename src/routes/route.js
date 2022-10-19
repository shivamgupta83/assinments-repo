const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    const {age}=req.query
    console.log(studentName)
    res.send(studentName)
})

 
router.post("/test-post1" , function(req, res) {
    res.send({a:56, b: 45})
})

  


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    console.log(ele)
     
    arr.push(ele)
    console.log(res)
    res.send(  { msg: arr , status: true }  )
})

module.exports = router;