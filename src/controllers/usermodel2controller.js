 const UserModel= require("../models/usermodel2")

const createUser=async function(req,res){
    let datauser=req.body

    let r = await UserModel.findOne({name:datauser.name})

    if(r){
        req.body["isFreeAppUser"]=false

        let  data=await UserModel.create(datauser)
        res.send({saveddata:data})

    }
    else {
        req.boby["isFreeAppUser"]=true
    let  data=await UserModel.create(datauser)
    res.send({saveddata:data})
}
 


}

module.exports={createUser}


 
 
