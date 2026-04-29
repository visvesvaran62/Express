import jwt from "jsonwebtoken"
export const checkToken=(req,res,next)=>{
    try {

        const token=req.headers.authorization

        if(!token){
            return res.status(404).json({msg:"invalid token"})
        }

        const ChexkJwt= jwt.verify(token,process.env.JWT_SECURE)

        req.users=ChexkJwt
        console.log( req.users);
        

        next()
        
    } catch (error) {
        console.log(error);
         res.status(404).json({msg:"Your Token is broken kindly login again"})
        
        
    }

}