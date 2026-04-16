import express from 'express'
import dotenv from 'dotenv'
import connectdb from './config/Db.js'
import cors from 'cors'
import userRoutes from "./Routes/AuthRoute.js"


dotenv.config()

connectdb()

const app=express()

app.use(cors())

app.use(express.json())

app.use("/api/user",userRoutes)

const PORT=process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})



// http://localhost:4000/api/user