const mongoose = require ('mongoose');

const postSchema = new mongoose.Schema({

    Name : {
        type : String ,
        required : true 
    } , 

    Email : {
        type : String ,
        required : true
    } ,
    Password : {
        type : Number ,
        required : true
    } ,
})




module.exports = mongoose.model('user', postSchema);