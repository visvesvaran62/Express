import userModel from "../model/addModels.js";

export const createdata=async(req,res)=>{

    try {
       const{name,mobilenumber,email}=req.body
        

      const data=await userModel.create({name,mobilenumber,email})

      res.status(201).json({msg:"succesful",data})
        
        
    } catch (error) {
        console.log("error",error);
        
    }
}
export const finduser=async(req,res)=>{
    try {
    const{name,email,mobilenumber}=req.body
     const finddata=await userModel.find()
     res.status(200).json({finddata})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"internal error"})
        
    }
}
export const findbyid=async(req,res)=>{
    try {
        const{userid}=req.params
         
        const getid=await userModel.findById(userid)
        res.status(200).json({getid}) 
        
    } catch (error) {
        res.status(500).json({msg:"id not matched"})
        
    }
}
export const updatedata=async(req,res)=>{
    try {
        const{userid}=req.params
        const{name,email,mobilenumber}=req.body

        const updatebyid=await userModel.findByIdAndUpdate(userid,{name,email,mobilenumber})
        res.status(200).json({msg:"successfully updated"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"invalid id "})
        
        
    }
}

export const deletedata=async(req,res)=>{
    try {
        const{userid}=req.params
         
        const deletingdata=await userModel.findByIdAndDelete(userid)
        res.status(200).json({msg:"successfully deleted"}) 
        
    } catch (error) {
        res.status(500).json({msg:"id not matched"})
        
    }
}