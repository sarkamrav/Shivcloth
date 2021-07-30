import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../util/generateToken.js';

const authUser = asyncHandler(async(req,res)=>{
   const {email,password} = req.body;
    const user = await User.findOne({email:email});
    if(user && (await user.mathpassword(password))){
        res.json({
            id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id),
        })
    } else {
        res.status(401).json("Password dosen't match");
    }
});


/* get user profile */
/* private */
/* GET api/users/profile */

const getUserProfile = asyncHandler(async(req,res)=>{
     const user = await User.findById(req.user._id);
     if(user){
         res.json({
             id:user._id,
             name:user.name,
             email:user.email,
             isAdmin:user.isAdmin,
         })
     } else{
         res.status(401).json("Password dosen't match");
     }
 });
 

 /* register User */
/* public */
/* POST api/users */

const registerUser = asyncHandler(async(req,res)=>{
    const {name,email,password} = req.body;
    console.log("req.body",req.body)
     const userExist = await User.findOne({email:email});
   if(userExist){
     res.status(400).json("User Exist");
   }
   console.log("guuu")
      const user = await User.create({
           name,
           email,
           password  
       })
       console.log("user",user);
   if(user){
    res.status(201).json({
        id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:generateToken(user._id),
    })
   } else{
       res.status(400).json("User Exist")
   }
 });

export  {authUser,getUserProfile,registerUser};