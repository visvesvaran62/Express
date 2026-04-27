import express from "express"
import { createUser } from "../controller/authController.js"
import { userMIdleware } from "../middleware/authMiddleware.js"

const route=express.Router()


route.post("/data",userMIdleware,createUser)


export default route


//http://loaclhost:4000/api/auth/data