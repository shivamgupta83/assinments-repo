const mongoose = require('mongoose');
const ObjectId= mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {

    userid:{type:ObjectId,ref:"User"},

    productid:{type:ObjectId,ref:"product"},

     amount:Number
    // isFreeAppUser:{type:Boolean,default:false}
        
   }, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)

// Your Order document looks like this.
// ```
// {
// 	_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	userId: “61951bfa4d9fe0d34da86829”,
// 	productId: “61951bfa4d9fe0d34da86344”
// 	amount: 0,
// 	isFreeAppUser: true, 
// 	date: “22/11/2021”
// }
// ```