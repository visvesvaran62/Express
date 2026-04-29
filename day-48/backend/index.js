import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import ConnectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config()

const app=express()
app.use(cors())
app.use(express.json())
app.use("/api/user",authRoutes)
ConnectDB()
const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server connected on http://localhost:${PORT}`);
    
})

// http://localhost:4000/api/user