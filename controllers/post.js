const Post = require('../models/owner');
const Post2 = require('../models/customers');
const User = require('../models/user');
const User2 = require('../models/user2');

const dotenv = require('dotenv');
dotenv.config();
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken')

exports.register =  (req, res) => {
  const user = new User (req.body);
  const username = req.body.Name
  const email = req.body.Email
  const password = req.body.Password
  const users = {name : username}
  const errors = validationResult(req);

if (!errors.isEmpty()) {
  return res.status(422).jsonp(errors.array()[0].msg);
}else{
   user.save().then(() => {

    var Token = jwt.sign(users, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json({Token , username ,email , password})
})

}
}


exports.register2 =  (req, res) => {
  const user = new User2 (req.body);
  const username = req.body.Name
  const email = req.body.Email
  const password = req.body.Password
  const users = {name : username}
  const errors = validationResult(req);

if (!errors.isEmpty()) {
  return res.status(422).jsonp(errors.array()[0].msg);
}else{
   user.save().then(() => {

    var Token = jwt.sign(users, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json({Token , username ,email , password})
})
}
}





exports.login = (req, res) => {
  User.findOne({Name: req.body.Name , Password: req.body.Password}, function(err, user){
    if (err) {
     res.status(400).send(err);
    } else if (!user) {
     res.status(404).send(err);
    } else {
      
     res.status(200).json({user , data:true});
    }
  });
};


exports.login2 = (req, res) => {
  User2.findOne({Name: req.body.Name , Password: req.body.Password}, function(err, user){
    if (err) {
     res.status(400).send(err);
    } else if (!user) {
     res.status(404).send(err);
    } else {

     res.status(200).json({user , data:true});
    }
  });
};

exports.Owner =  (req, res) => {
    const post = new Post (req.body);
    const Tables = post.Tables
    const Chairs = post.Chaires
    const errors = validationResult(req);
 
    if (!errors.isEmpty()) {
      console.log(errors.array()[0].msg)
      return res.status(422).jsonp(errors.array()[0].msg);
    } else {
     
       post.save().then(() => {
        
        process.env.NT = Tables
        process.env.T = Tables
        process.env.C = Chairs
        res.status(200).json(Tables + " tables available, each table " + Chairs + " chairs")
        
    })
    }
  }



  exports.customer =  (req, res) => {
    const post = new Post2 (req.body);

    const errors = validationResult(req);


    var newTable = ''
    
    if(post.Customer/process.env.C > Math.round(post.Customer/process.env.C)){
      newTable = Math.round(post.Customer/process.env.C) + 1
    }else{
      newTable = Math.round(post.Customer/process.env.C)
    }

    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array()[0].msg);
    } else {
       post.save().then(() => {

       
        
        var j = process.env.NT - newTable + 1
        if(post.Customer > process.env.C * process.env.T){
        if(process.env.T <= 0){
          res.status(200).json(`sorry there is no available Table You have to wait `)
        } else{
          process.env.T = process.env.T - newTable
          res.status(200).json(`${newTable} tables required , ${process.env.C} customer head to Table T1. ${post.Customer - process.env.C } customers required to wait till next available
          table`)
        }
        }else{

          var Tablenumber = []
          process.env.I = process.env.T - newTable + 1
          var i = process.env.I;
          while (i <= Number(process.env.T)) {
            
            Tablenumber.push(`T${i}`);
            i++;
            
         }
         process.env.J = Number(process.env.J) + 1
         
         process.env.T = process.env.T - newTable
          res.status(200).json(`${newTable} tables required, head to Table ${Tablenumber}`)
        }
    })
    }
  }


