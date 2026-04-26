import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import userdata from "./routes/addRoutes.js"


dotenv.config()

const app=express()
connectDB()

app.use(cors())
app.use(express.json())
app.use("/api/user",userdata)



const PORT=process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`server connected successfully on http://localhost:${PORT}`);
})

// http://localhost:4000/api/user