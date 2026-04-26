 import bcrypt from "bcrypt"
export const createUser= async(req,res)=>{
    const {userName,email,password}=req.body
    

 const hashingpass= await bcrypt.hash(password,10)
    try {
       res.status(201).json({msg:"created successfully",password:hashingpass})
    //    console.log(hashingpass);
       

    } catch (error) {
        console.log(error);
        
        
    }
    
}