import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/db.js"
import authusers from "./routes/authRoutes.js"



dotenv.config()

const PORT=process.env.PORT || 3000



const app=express()
app.use(cors())
app.use(express.json())
app.use("/api/auth",authusers)

connectDb()
app.listen(PORT,()=>{
    console.log(`server running on http://loaclhost:${PORT}`);
})

//http://loaclhost:4000/api/auth