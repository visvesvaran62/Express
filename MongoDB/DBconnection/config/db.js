import mongoose  from "mongoose";



const con=async()=>{

    try {

        const connect=await mongoose.connect(process.env.MONGO_URI)
        console.log(`database connect with ${connect.connection.host}`);
        
        
    } catch (error) {
        console.log("error",error);
        
    }

}

export default con