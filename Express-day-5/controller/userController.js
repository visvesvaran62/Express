export const sendData=(req,res)=>{

    const{name}=req.body

    console.log(req);
    res.status(200).json({msg:name})
   

}

export const userId=(req,res)=>{
    console.log(req);

    res.status(200).json({msg:"success"})
    
}