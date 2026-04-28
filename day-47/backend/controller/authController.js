import userModel from "../model/authModels.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const createData=async(req,res)=>{
    const{username,email,password}=req.body
    try {


     const hashing= await bcrypt.hash(password,10)
        
        const userData=await userModel.create({username,email,password:hashing})

        res.status(201).json({msg:"created successfully"})

    } catch (error) {
        console.log("err :",error);
         
    }

}

// export const insertData=async(req,res)=>{
//     try {
//         const{username,email,password}=req.body
//          const emailcheck= await userModel.findOne({email})
//                 if(!emailcheck){
//                      res.status(404).json({msg:"email not match"})
//                 return
//                 }
//         const passcheck= bcrypt.compare(password,emailcheck.password)
//         if(!passcheck){
//                res.status(404).json({msg:"password not mached"})
//         return
//         }

//         const token=await jwt.sign({id:emailcheck._id},process.env.JWT_TOKEN,{expiresIn:"1hr"}) 
//         res.status(200).json({msg:"success",token})

        
//     } catch (error) {
//         console.log(error);
        
        
//     }

// }


export const checklogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const emailcheck = await userModel.findOne({ email });

    if (!emailcheck) {
     res.status(404).json({ msg: "Invalid user email" });
     return
    }

    const passcheck = await bcrypt.compare(
      password,
      emailcheck.password
    );

    if (!passcheck) {
      return res.status(404).json({ msg: "Invalid user password" });
    }

    const jwtcreate = jwt.sign(
      { id: emailcheck._id},
      process.env.JWT_TOKEN,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      msg: "Successfully logged in",
      token: jwtcreate
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
};

export const getdasboardinfo=async(req,res)=>{
   console.log(req);
  try {

    res.status(200).json({msg:"ok",users:req.user})
   
    
    
  } catch (error) {
    
  }

}

