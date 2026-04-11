export const addingData=(req,res)=>{
    console.log(req);
    const{name,age}=req.body

     if(name=="vishva"&&age=="22"){
    res.status(200).json({msg:" data matched"})
   }
   else{
    res.status(500).json({msg:"not match"})
   }

    // res.status(200).json({msg:"successful"})
    
}

export const userData=(req,res)=>{
    const{id}=req.body
    console.log(req);
       if(id=="100"){
    res.status(200).json({msg:" data matched"})
   }
   else{
    res.status(500).json({msg:"not match"})
   }

    

     
 


}

 export const passData=(req,res)=>{
   
    const{name,course}=req.query

    console.log(req);
    if(course=="mern"){
    res.status(200).json({msg:" data matched"})
   }
   else{
    res.status(500).json({msg:"not match"})
   }
    
    

 } 

  export const headData=(req,res)=>{
    console.log(req);
     res.status(200).json({msg:"successful"})
    

 } 