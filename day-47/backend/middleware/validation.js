import userModel from "../model/authModels.js"
import bcrypt from "bcrypt"

export const validate=async(req,res,next)=>{
     const{username,email,password}=req.body
    try {
        const emailcheck=userModel.findOne({email})
        if(!emailcheck){
             res.status(404).json({msg:"email not match"})
        return

        }

        next()
       




    } catch (error) {
        console.log(error);
        
        
    }

}

export const checkToken=async(req,res,next)=>{
    try {
         const token = req.headers.authorization 
         if(!token){
            res.status(404).json({msg:"invalid token"})
         }
         
         const checkjwt=jwt.verify(token,process.env.JWT_TOKEN)
         req.user=checkjwt
         next()


    } catch (error) {
        console.log(error);
        
        
    }
}