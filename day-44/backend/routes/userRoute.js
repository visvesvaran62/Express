import express from "express";
import { createUser } from "../controller/authControlle.js";


const routes=express.Router()

routes.post("/data",createUser)
export default routes

// http://localhost:4000/api/user/data


