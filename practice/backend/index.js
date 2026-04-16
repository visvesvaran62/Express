import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/db.js"
import usersData from "./routes/authRoute.js"

dotenv.config()
connectDb()

const app=express()
app.use(cors())
app.use(express.json())

app.use("/api/users",usersData)



const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);  
})


// http://localhost:4000/api/users