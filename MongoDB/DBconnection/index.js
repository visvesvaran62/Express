import express from "express"
import dotenv from "dotenv"
import con from "./config/db.js"

dotenv.config()

con()

const app=express()

const PORT=process.env.PORT


app.listen(PORT,()=>{
    console.log(`server conneceted with http://localhost:${PORT}`);
    
})



