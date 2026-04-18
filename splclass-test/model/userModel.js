import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:18
    },
    email:String,
    isActive:{
        type:Boolean,
        default:true
    },createdby:{
        type:String,
        default:"user"
    },updatedby:{
        type:String,
        default:"user"
    }

},{timestamps:true})


const userModels=mongoose.model("users",userSchema)
export default userModels