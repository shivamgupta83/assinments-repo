const express = require('express');
 

const route = express.Router();

let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
  
  //assinment 20-10-2022 code

 route.post('/canVote1', function(req, res) {
    let age1 = req.query.votingAge
    let newArraY=[]
    for(let a=0;a<persons.length;a++){
        if(persons[a].age>=age1){
        persons[a].votingStatus=true;   
        newArraY.push(persons[a])
        }
    }
    res.send(newArraY)
})

route.post('/canVote2', function(req, res) {
    let age1 = req.query.votingAge
 
  let ner1 = persons.filter(a=>{
       if(a.age>=age1){
        a.votingStatus=true;
        return true
        
       }
    })
         res.send(ner1)

         })


 
module.exports = route;