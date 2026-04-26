import userModel from "../model/addModels.js";
import bcrypt from "bcrypt"

export const createdata=async(req,res)=>{

    try {
        const{name,email,password}=req.body
        const emailcheck= await userModel.findOne({email})
        if(emailcheck){
            return res.status(400).json({msg: "already register"})
        }
        const hashingdata= await bcrypt.hash(password,10)
        const datas=await userModel.create({name,email,password:hashingdata})
        res.status(201).json({msg:"created successfully",datas})
        console.log(datas.data.msg);
    } catch (error) {
        console.log(error);
    }
}
export const finduser=async(req,res)=>{
   try {
    const data=await userModel.find()
    res.status(200).json(data);
   } catch (error) {
    console.log(error);
    res.status(500).json({msg:"server error"})
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
        res.status(200).json({msg:"successfully deleted",}) 
        
    } catch (error) {
        res.status(500).json({msg:"id not matched"})
        
    }
}