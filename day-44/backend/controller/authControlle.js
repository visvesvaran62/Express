 import bcrypt from "bcrypt"
 import userModel from "../models/userModel.js"
export const createUser= async(req,res)=>{
    const {userName,email,password}=req.body

   const emailcheck= await userModel.findOne({email})
        if(emailcheck){
            return res.status(400).json({msg: "already register"})
        }
    
  

 const hashingpass= await bcrypt.hash(password,10)
    try {
       res.status(201).json({msg:"created successfully",password:hashingpass})
    //    console.log(hashingpass);
       

    } catch (error) {
        console.log(error);
        
        
    }
    
}