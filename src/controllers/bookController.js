
const bookModel = require("../models/userbook");
 
 

const createbook= async function (req, res) {
    let data= req.body
    let savedbook= await  bookModel.create(data)
    res.send({msg: savedbook});
}

const getbookData= async function (req, res) {
    let allbooks= await bookModel.find()
    res.send({msg: allbooks})
}

module.exports.createbook = createbook
module.exports.getbookData = getbookData