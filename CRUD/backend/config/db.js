import mongoose from "mongoose";

const connectDB=async()=>{

    try {

        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`database connect on ${conn.connection.host}` );
        
        
    } catch (error) {
        console.log("error",error);
        
        
    }
}
export default connectDB