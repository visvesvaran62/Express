import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    userid:{
        type:Number,
        require:true
    },
    username:{
        type:String,
    },
    mobilenumber:{
        type:Number
    },
    createdby:{
        type:String
    },
    updateedby:{
        type:String
    }
},{timestamps:true})


const userModels=mongoose.model("datas",userSchema)
export default userModels