import  express from 'express';
import dotenv from 'dotenv'; 
import connectDB from './config/db.js';
import productRoute from './routes/productRoutes.js'
import userRoute from './routes/userRoutes.js'

const app = express();
app.use(express.json()); /* post data reteriving */
// app.use(express.urlencoded({ extended: false }));
dotenv.config();
connectDB();




app.use('/api/products/',productRoute)

app.use('/api/users/',userRoute);
app.listen(5000,console.log("server is running"));