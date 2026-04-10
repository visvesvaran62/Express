import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoute from './Routes/userRoute.js'


dotenv.config()

const PORT=process.env.PORT

const app=express()
app.use(cors())

app.use(express.json())

app.use("/api/user",authRoute)


app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/user