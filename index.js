const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Owners = require('./models/owner');
var cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect (process.env.MONGO_LOCAL , {
    useNewUrlParser : true ,
    useCreateIndex : true
});


const postroutes = require('./routes/owner');


names = () => {
    const posts = Owners.find()
    .then(posts => {
    process.env.T = posts[posts.length - 1].Tables
    process.env.C = posts[posts.length - 1].Chaires
    })
    .catch((err) => { console.log(err)});
}

names()

app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.use( '/' , postroutes);




const port = process.env.PORT
app.listen( port , () =>{
    console.log(`Node.js api is running on port ${port}`)
});