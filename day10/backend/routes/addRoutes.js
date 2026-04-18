import express from "express"
import { createdata,finduser,findbyid,updatedata,deletedata} from "../controller/addController.js"

const route=express.Router()

route.post("/create",createdata)
route.get("/use/data",finduser)
route.get("/use/:userid",findbyid)
route.get("/update/:userid",updatedata)
route.delete("/delete/:userid",deletedata)
export default route



// http://localhost:4000/api/user/create
// http://localhost:4000/api/user/use/data
// http://localhost:4000/api/user/use/69e34d1899e5b0d901f3a9c8
// http://localhost:4000/api/user/update/69e34d1899e5b0d901f3a9c8
// http://localhost:4000/api/user/delete/69e34d1899e5b0d901f3a9c8
