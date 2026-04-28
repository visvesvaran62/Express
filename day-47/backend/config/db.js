import mongoose from "mongoose";

const ConnectDB=async()=>{
    const conn= await mongoose.connect(process.env.MONGO_URL)
    console.log(`database connected on ${conn.connection.host}`);
    
}
export default ConnectDB