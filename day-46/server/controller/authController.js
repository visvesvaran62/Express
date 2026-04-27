import userModel from "../models/authModels.js";
import bcrypt from "bcrypt"

export const createUser=async(req,res)=>{
    const{userName,email,password}=req.body

    try {
        const hashed=await bcrypt.hash(password,10)
        const data=await userModel.create({userName,email,password:hashed})
        console.log(data);
        
         res.status(200).json({msg:"created Successfully"})
        
    } catch (error) {
        res.status(400).json({msg:"error"})
        
    }
}