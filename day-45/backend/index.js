import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import RouteHandler from "./route/authRoutes.js"



dotenv.config()


const app=express()
connectDB()

app.use(cors())
app.use(express.json())
app.use("/api/auth",RouteHandler)

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})
// http://localhost:4000/api/auth