import mongoose from "mongoose";


const connectdb=async()=>{

    try {
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`database connected with ${conn.connection.host}`);
        
        
    } catch (error) {
        console.log("error",error);
        
        
    }
    
}
export default connectdb