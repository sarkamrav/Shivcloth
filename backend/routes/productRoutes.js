import  express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler'


const router = express.Router();
/* Public Route   for all product */
router.get('/',asyncHandler(async(req,res)=>{
    const product = await Product.find({});
    res.json(product);
}));

/* Public Route   fetching by  product id  */
router.get('/:id',asyncHandler(async(req,res)=>{
   
    const product = await Product.findById(req.params.id);
    res.json(product);
}));


export default router;