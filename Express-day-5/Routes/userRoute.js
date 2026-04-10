import express from 'express'
 import { sendData, userId } from '../controller/userController.js'


const router=express.Router()


router.post("/data",sendData)
router.get("/:userid",userId)



export default router

// http://localhost:5000/api/user/data
// http://localhost:5000/api/user/:userid