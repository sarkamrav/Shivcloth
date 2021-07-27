import  express from 'express';
import dotenv from 'dotenv'; 
import connectDB from './config/db.js';
import productRoute from './routes/productRoutes.js'

const app = express();
dotenv.config();
connectDB();


app.use('/api/products/',productRoute)
app.listen(5000,console.log("server is running"));