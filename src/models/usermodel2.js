const mongoose = require('mongoose');

const userSchema2=new mongoose.Schema({
name:{type: String,required:true},
balance:{type: Number,default:100},
address:String,
age:Number,
gender:{
    type:String,
    enum : ["male","female","other"]
},

isFreeAppUser:{type : Boolean, default:false}
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema2)



// - Your user document should look like this
// ```
// { 
//     _id: ObjectId("61951bfa4d9fe0d34da86829"),
//     name: "Sabiha Khan",
// 	balance:100, // Default balance at user registration is 100
// 	address:"New delhi",
// 	age: 90,
//  	gender: “female” // Allowed values are - “male”, “female”, “other”
// 	isFreeAppUser: false // Default false value.
// }