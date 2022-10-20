const express = require('express');
const router = express.Router();

let player =
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    }
]




router.post("/player", function(req, res) {
let r=req.body
let data = req.body.name
for(let a=0;a<player.length;a++){

    if(player[a].name!==data){
     player.push(r)
    return res.send(player) ;
     
    }
    else {
       return res.send(player) ;
    }
}
 })
 

//solution 1 st assinment Consecutive numbers-1 missing

router.get('/sol1', function(req, res) {
    let array1=[1,2,3,4,6]
    let sum1 = (array1.length+1)*(array1[0]+array1[array1.length-1])/2
    let sum2=0
    for(let a=0;a<array1.length;a++){
      sum2=sum2+array1[a]
    }   
    let a2=sum1-sum2
      res.send({a2})
  })

  //solution 2 st assinment Consecutive numbers-2 missing
  
  router.get("/sol2" , function(req, res) {
  
    let array2=[33,34,35,37,38]
    let sum1 = (array2.length+1)*(array2[0]+array2[array2.length-1])/2
    let sum2=0
    for(let a=0;a<array2.length;a++){
      sum2=sum2+array2[a]
    }   
    let a3=sum1-sum2
      res.send({a3})
  })

module.exports = router;