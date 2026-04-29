import bcrypt from "bcrypt"
import userModel from "../model/authModel.js"
export const islogin=async(req,res,next)=>{
     const{userName,email,password}=req.body
    try {
        // if (!userName || !email||! password ) {
        //     res.status(404).json({msg:"please fill the all field"})
        //    return 
        // }

        // const emailcheck=await userModel.findOne({email})
        // if (!emailcheck) {
        //     res.status(404).json({msg:"invalid email"})
        //     return
            
        // }

        
        
        // const isPasscheck= await bcrypt.compare(password,emailcheck.password)
        // if (!isPasscheck) {
        //     res.status(404).json({msg:"password not match"})
        //   return  
        // }
        next()
        
    } catch (error) {
        console.log(error);
        
        
    }
}