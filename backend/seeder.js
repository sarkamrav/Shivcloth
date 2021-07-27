import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import Order  from './models/orderModel.js'
import User  from './models/userModel.js'
import Product  from './models/productModel.js'
import products from './data/products.js'
import users from './data/users.js'

dotenv.config();

connectDB();

const importData  = async()=>{
    try{
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()
        const userCreated = await User.insertMany(users);
        const adminUser = userCreated[0]._id;
       const sampleProduct =  products.map(data =>{
            return {...data,user:adminUser}
        });
        await Product.insertMany(sampleProduct);
        console.log("Data imported")
        process.exit();

    } catch(error){
        console.log("error",error);
    }
    
}

const destroyData  = async()=>{
    try{
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();
        console.log("Data Destroyed")
        process.exit();

    } catch(error){
        console.log("error",error);
    }
    
}
if(process.argv[2]== '-d'){
    destroyData();
} else{
    importData();
}