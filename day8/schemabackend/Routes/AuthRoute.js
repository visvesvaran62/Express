import express from "express"
import { createUser,getUser,getById } from "../controller/AuthController.js"


const route=express.Router()


route.post("/create",createUser)
route.get("/get",getUser)
route.put("/get/:getId",getById)


export default route

// http://localhost:4000/api/user/create
// http://localhost:4000/api/user/get
// http://localhost:4000/api/user/get/69e08e24cc1b19eb7006954b

// http://localhost:4000/api/user/get/69e08e24cc1b19eb7006954b