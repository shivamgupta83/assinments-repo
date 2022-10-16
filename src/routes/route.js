const express = require('express');
const router = express.Router();///test-you
const _ =require("lodash")
//importing a custom module
const xyz = require('../logger/logger.js')
//importing external package
// const underscore = require('underscore')
const help=require("../util/helper.js")
const format=require("../validater/formatter")

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.welcome())
    console.log("Calling my function ",help.batch("lithium","3rd","node js and about modules,npm,index.js Etc"))
    console.log(help.yy())
    console.log(format.for())
    //Trying to use an external package called underscore
    let number=[1,3,5,7,9,11,13,17,19,21,25]
    let number1=[[1],[2],[3],[4],[5]]
    let pair=[["horror","The"],["drama","Titanic"],["thriller","Shutter"],["fantasy","hai"]]

      let myArray =  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      console.log(_.chunk(myArray,[size=4]))
     
    console.log(_.tail(number))
    console.log(_.union(number1))
    console.log(_.fromPairs(pair))


    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

