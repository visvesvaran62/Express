import express from "express"
import { createData ,getbyid,deleteid} from "../Controller/authController.js"


const route=express.Router()

route.post("/data",createData)
route.get("/data/:userid",getbyid)
route.delete("/deleteid/:dltid",deleteid)


export default route

// http://localhost:4000/api/users/data
// http://localhost:4000/api/users/data/69e110d6182144c6a952556f
// http://localhost:4000/api/users/deleteid/:dltid

// http://localhost:4000/api/users/deleteid/:dltid