import express from "express"
import { createData,checklogin,getdasboardinfo} from "../controller/authController.js"
import { validate,checkToken } from "../middleware/validation.js"


const routes=express.Router()

routes.post("/data",validate,createData)
routes.post("/login",checklogin)
routes.get("/dashboard",checkToken,getdasboardinfo)

export default routes

// http://localhost:4000/api/user/data
// http://localhost:4000/api/user/login
// http://localhost:4000/api/user/dashboard