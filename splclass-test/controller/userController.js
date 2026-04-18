import userModels from "../model/userModel.js";

export const createData=async(req,res)=>{
    try {
      
      
      const{name,age,email}=req.body
        const create=await userModels.create({name,age,email})
        res.status(201).json({msg:"created successfuly"})
        
    } catch (error) {
        console.log(error);
        
    }
}

export const getingData=async(req,res)=>{
    try {
        const {name,age,email}=req.body
        const data=await userModels.find() 
        res.status(200).json({msg:"success",data})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"not get"})
        
    }

}

export const getingDatabyid=async(req,res)=>{
    try {
        const {userid}=req.params
        const getbyid=await userModels.findById(userid)
        res.status(200).json({msg:"succesfully data geted",getbyid})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"internal error"})
    }
}

export const updatebyid=async(req,res)=>{
    try {
        
         const {userid}=req.params
             const{name,age,email}=req.body
           if(!updatedata){
           return res.status(500).json({msg:"id not found"})
           }
        const updatedata=await userModels.findByIdAndUpdate(userid,{name,age,email})
          res.status(200).json({msg:"succesfully data geted",updatedata})
        
        res
        
    } catch (error) {
         console.log(error);
        res.status(500).json({msg:"internal error"})
        
        
    }
}

export const deletedatabyid=async(req,res)=>{
    try {
        
         const {userid}=req.params
            //  const{name,age,email}=req.body
           
        const deletedata=await userModels.findByIdAndDelete(userid)
          res.status(200).json({msg:"succesfully data geted",deletedata})
        
        res
        
    } catch (error) {
         console.log(error);
        res.status(500).json({msg:"internal error"})
        
        
    }
}