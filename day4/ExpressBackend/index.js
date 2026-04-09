import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app=express()
// console.log(app);
app.use(cors())

const PORT=process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})