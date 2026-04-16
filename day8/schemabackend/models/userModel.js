import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    userid:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        trim:true
    },
    
    createdBy:{
        type:String,
        default:"adimn"
    },
    updatedby:{
        type:String,
        default:"admin"
    }
},{timestamps:true})

const userModels=mongoose.model("userdata",userSchema)
export default userModels