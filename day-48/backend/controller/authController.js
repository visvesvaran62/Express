import Models from "../model/authModels.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const createData=async(req,res)=>{
    const {userName,email,password}=req.body
    try {
        if(!userName||!email||!password ){
            res.status(404).json({msg:"please fill the all data"})
            return
        }

        const hashpassword=await bcrypt.hash(password,10)

        const userCreatedata=await Models.create({userName,email,password:hashpassword})
        res.status(201).json({msg:"created successfully"})
        
    } catch (error) {
    console.log(error);
    
        
    }
}


export const logincheck=async(req,res)=>{
    const{email,password}=req.body
    try {
        const emailcheck=await Models.findOne({email})

        if(!emailcheck){
            return res.status(404).json({msg:"mismatch email"})
        }

        const passcheck=await bcrypt.compare(password,emailcheck.password)
          if(!passcheck){
            return res.status(404).json({msg:"password not matched"})
        }

       
     const jwttoken= await jwt.sign({id:emailcheck._id},process.env.JWT_SECURE,{expiresIn:"1h"})
    if(!jwttoken){
        res.status(404).json({msg:"invalid token"})
    }
     res.status(200).json({token:jwttoken})

        
    } catch (error) {
        console.log(error);
        
        
    }


}


 
export const dashinfo = async (req,res)=>{

    // console.log(req);

    try {

        res.status(200).json({Users:req.users})
        // console.log(Users);
        
        
    } catch (error) {

        console.log('error',error);
        
        
        
    }
    

}
