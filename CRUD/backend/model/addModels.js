import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:{
        type:String
    },
    createdby:{
        type:String,
        default:"admin"
    },
    updatedby:{
        type:String,
        default:"admin"
    }
},{timestamps:true})


const userModel=mongoose.model("personalData",userSchema)

export default userModel