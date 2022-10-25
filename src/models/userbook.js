const mongoose = require('mongoose');

const bookname = new mongoose.Schema( {
    autherName: String,

    lastName: String,

    cotegry: String,
     
     year: Number
    
}, { timestamps: true });

  module.exports = mongoose.model('book', bookname)



 