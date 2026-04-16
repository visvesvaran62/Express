import userModels from "../model/authModel.js"
export  const createData=async(req,res)=>{
    try {
        const{userid,username,mobilenumber}=req.body

        const createdata=await userModels.create({userid,username,mobilenumber})

        res.status(200).json({createdata})
     
    } catch (error) {
        console.log(error);
        
        
    }

}

export const getbyid =async(req,res)=>{
    try{
        const{userid}=req.params
        const getda=await userModels.findById(userid)
        res.status(200).json({getda})

    }catch(err){
        console.log(err);
        
    }
}

export const deleteid=async(req,res)=>{
  
    try {
          const {userid}=req.params
        const delte=await userModels.findByIdAndDelete(userid)
        res.status(200).json({msg:"delete your data"})
        
    } catch (error) {
        console.log(error);
        
    }
}