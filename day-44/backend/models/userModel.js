import mongoose from "mongoose";

const newSchema= new mongoose.Schema({
    userName:String,
    email:{
        type:String,
        unique:true
    },
    password:string,
    createdby:{
        type:string,
        default:user
    },
     updatedby:{
        type:string,
        default:user
    }
},{timestamps:true})

const models=mongoose.model("person",newSchema)
export default models