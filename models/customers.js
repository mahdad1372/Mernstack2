const mongoose = require ('mongoose');

const postSchema = new mongoose.Schema({
 
    Customer : {
        type : Number ,
        required : true 
    } 
    
},{ versionKey: false })




module.exports = mongoose.model('Customer', postSchema);