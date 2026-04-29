import express from "express"
import { createData, dashinfo, logincheck } from "../controller/authController.js"
import { checkToken } from "../middleware/validation.js"


const routes=express.Router()

routes.post("/data",createData)
routes.post("/LoginUser",logincheck)
routes.get("/Dashinfo",checkToken,dashinfo)


export default routes

// http://localhost:4000/api/user/data
// http://localhost:4000/api/user/LoginUser
// http://localhost:4000/api/user/Dashinfo