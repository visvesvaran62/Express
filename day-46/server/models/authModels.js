import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    userName:String,
    email:String,
    password:String
},{timestamps:true})


const userModel=mongoose.model("authdata",userSchema)

export default userModel