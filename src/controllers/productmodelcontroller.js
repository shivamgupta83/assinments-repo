const productModel= require("../models/productmodel")

const createproduct=async function(req,res){

    const {name,category,price}=req.body

if(!name || !category || !price){
    res.send({msg:"name and category and price is mendotry"})
}

 const  data=await productModel.create({name,category,price})
res.send({msg:data})

}

module.exports ={createproduct}
 