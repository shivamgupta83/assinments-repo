const productModel= require("../models/productmodel")

const createproduct=async function(req,res){
const dataproduct=req.body
const  data=await productModel.create(dataproduct)
res.send({msg:data})
}

module.exports ={createproduct}
 