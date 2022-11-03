 
const UserModel= require("../models/usermodel2")

const createUser=async function(req,res){
let datauser=req.body
let  data=await UserModel.create(datauser)
res.send({saveddata:data})
}

module.exports={createUser}
