import express from "express"
import { userLogin, checklogin } from "../controller/authController.js"
import { islogin } from "../middleware/validation.js"

const route=express.Router()
// http://localhost:4000/api/auth/regist

route.post("/regist",userLogin)
route.post("/login",checklogin)

export default route