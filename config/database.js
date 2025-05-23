import mongoose from "mongoose";

let connected = false;

const connectDB = async () =>{
 mongoose.set('strictQuery', true);
 //if database is already connected, dont connect again
 if(connected){
  return;  
 }

 try {
  await mongoose.connect(process.env.MONGODB_URI,{serverSelectionTimeoutMS: 15000});
  connected = true;
 } catch (error) {
  console.log(error);
  
 }
}
export default connectDB;