import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler'


const getProduct = asyncHandler(async(req,res)=>{
    const product = await Product.find({});
    console.log("ssss",product);
    res.json(product);
});

const getProductById = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    res.json(product);
});



export {getProduct,getProductById};