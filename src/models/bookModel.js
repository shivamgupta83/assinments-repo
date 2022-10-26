const mongoose = require('mongoose');

const bookModel = new mongoose.Schema( {
    bookName: {type:String,require:true}, 
    authorName: String, 
    pages:Number,
    tags: [String],
    publishedYear:Number,
    isPublished:{type: Boolean , default:true},
    instock: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number }
}, { timestamps: true });


module.exports = mongoose.model('Book', bookModel) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
