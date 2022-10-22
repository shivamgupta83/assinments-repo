// const UserModel= require("../models/userModel")
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });




const createUser= async function (req, res) {
    let data= req.body
    let savedData= await mongoose.model('User', userSchema).create(data)
    res.send({msg: savedData});
}

const getUsersData= async function (req, res) {
    let allUsers= await mongoose.model('User', userSchema).find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData