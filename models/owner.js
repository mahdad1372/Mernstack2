const mongoose = require ('mongoose');

const postSchema = new mongoose.Schema({

    Tables : {
        type : Number ,
        required : true 
    } , 

    Chaires : {
        type : Number ,
        required : true
    } ,
    
},{ versionKey: false })




module.exports = mongoose.model('Owner', postSchema);