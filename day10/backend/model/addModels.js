import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    name:String,
    mobilenumber:Number,
    email:String,
    createdby:{
        type:String,
        default:"admin"
    },
    updatedby:{
        type:String,
        default:"admin"
    }
},{timestamps:true})


const userModel=mongoose.model("userdetail",userSchema)

export default userModel