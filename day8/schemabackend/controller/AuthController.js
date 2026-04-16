import userModels from "../models/userModel.js"

 export  const createUser=async(req,res)=>{
    try{
    const {userid,username}=req.body

    const data= await userModels.create({userid,username})

    res.status(201).json({msg:"creates successfully",data})
    

    }catch(err){
       
        

    }
    

   

 }

 export const getUser=async(req,res)=>{
    try{
        const data= await userModels.find()
        res.status(200).json({data})

    }catch(err){
        console.log(err);
        

    }
 }
  export const getById=async(req,res)=>{
    try{
        const{userid}=req.params
        const data= await userModels.findById(userid)
        res.status(200).json({data})
        

    }catch(err){
        console.log(err);
        

    }
 }