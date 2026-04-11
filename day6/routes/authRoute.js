import express from "express"
import { addingData, headData, passData, userData } from "../controller/authController.js"

const route=express.Router()
// http://localhost:4000/api/user/detail
// http://localhost:4000/api/user/user/:userId
// http://localhost:4000/api/user/sendData
// http://localhost:4000/api/user/data

route.post("/detail",addingData)

route.get("/user/:userId",userData)

route.get("/sendData",passData)

route.get("/data",headData)

export default route