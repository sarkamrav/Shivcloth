import mongoose from 'mongoose';

const connectDB = async()=>{
    try{
      const conn = await mongoose.connect(process.env.MONGO_URI,{
          useNewUrlParser:true,
          useUnifiedTopology:true,
          useCreateIndex:true
      })
      console.log("database connected");
    } catch(error){
       console.log("db error",error);
    }
}

export default connectDB;