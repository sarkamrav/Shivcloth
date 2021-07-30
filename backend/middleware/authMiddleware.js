import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
const protect = asyncHandler(async (req,res,next)=>{
   let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
      token  =  req.headers.authorization.split(" ")[1]
      const decoded =  jwt.verify(token,process.env.JWT_SECRET)
      console.log("defff",decoded)
      req.user = await User.findById(decoded.id).select('-password');
      console.log("cccc",req.user)
      next();
    } else {
        res.status(401).json("user not authorized");
    }
});

export default protect;