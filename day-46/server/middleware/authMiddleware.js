import userModel from "../models/authModels.js"

export const userMIdleware=async(req,res,next)=>{
const{userName,email,password}=req.body
    try {
        if(!userName || !email || !password){
            res.status(400).json({msg:"please fill tha all data"})
            return
        }

      const emailcheck=await userModel.findOne({email})
      if(emailcheck){
        res.status(400).json({msg:"already register"})
        return
      }

      if(password.length < 5){
        res.status(400).json({msg:"must be above 5 charctrer"})
        return

      }
      next()
          
    } catch (error) {
        console.log(error);
        
    }

}