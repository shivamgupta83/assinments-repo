 
const UserModel= require("../models/usermodel2")

const  createUser = async function (req,res) {
 
const {name,balance,address,age,gender} = req.body
const  header = req.headers["isfreeappuser"]
const headers=header.toLowerCase()=== "true" ? true  : false

if(!name||  !address || !age || !gender ){

    res.send({saveddata:"some thing is missing"})
}
 
else {let  data=await UserModel.create({name,balance,address,age,gender,headers})

res.send({saveddata:data})}

}

module.exports ={createUser}
 
