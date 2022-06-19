// const User = require("../models/users.model");
// const jwt = require('jsonwebtoken');
// require('dotenv').config()
// const { body, validationResult } = require('express-validator');
// const generateToken = (user) => {
//     return jwt.sign({user},process.env.secretkey)
// }

// const register = async(req,res)=>{
//     console.log(req);
//     try{
//         let user = await User.findOne({email : req.body.email})
   

//         //checking email
//         if(user){
//             return res.status(400).send({message : "Email already exists" })
//         }

//         // if new user, create it or allow to register;
//          user = await User.create(req.body);

//         const token = generateToken(user)
//         return res.status(200).send({user,token});
//     }
//     catch(err){
//         res.status(400).send({message : err.message})
//         console.log(err);
//     }
// }

// const login = async (req,res)=>{
//     try{
//         console.log("trial00")
//         console.log(req.body)
//         const user = await User.findOne({email : req.body.email})
//         console.log(user);
//         //checked if mail exists
//         if(!user){
//             return res.status(400).send({message : "Wrong Email or Password 1"})
//         }

//         //if email exists, check password;
//         const match = user.checkPassword(req.body.password)

//         // if it doesn't match
//         if(!match){
//             return res.status(400).send({message : "Wrong Email or Password 2"})
//         }

//         // if it matches
//         const token = generateToken(user)
//         console.log("trial22")
//         return res.status(200).send({user,token});
        

//     }
//     catch(err){
//         res.status(400).send({message : err.message})
//     }
// }

// module.exports = {register,login}

