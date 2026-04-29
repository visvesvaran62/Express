import userModel from "../model/authModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const userLogin=async (req,res)=>{
    
     const{userName,email,password}=req.body
    
    try {
        if(!userName ||  ! email ||! password ){
            res.status(404).json({msg:"fill the field"})
        }

        const hashed=await bcrypt.hash(password,10)
        console.log(hashed);
        

        const createData=await userModel.create({userName,email,password:hashed})
        console.log(createData);
        

       
       
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "internal error"});
    }
}

export const checklogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ msg: "Please fill all fields" });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECURE || "fallback_secret", { expiresIn: "1h" });
        
        res.status(200).json({ msg: "Login successful", token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message || "Internal server error" });
    }
}