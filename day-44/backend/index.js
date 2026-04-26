import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoute.js"



dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())
connectDB()

app.use("/api/user",userRoutes)


const PORT=process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})

// http://localhost:4000/api/user
