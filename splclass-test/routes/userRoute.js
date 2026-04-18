import express from "express"
import { createData,getingData,getingDatabyid,updatebyid,deletedatabyid} from "../controller/userController.js"


const route=express.Router()
route.post("/create",createData)
route.get("/getdata",getingData)
route.get("/getdata/:userid",getingDatabyid)
route.put("/updatedata/:userid",updatebyid)
route.delete("/deletedata/:userid",deletedatabyid)

export default route

// http://localhost:4000/api/user/create
// http://localhost:4000/api/user/getdata
// http://localhost:4000/api/user/getdata/69e381873d8f44f7e766406e
// http://localhost:4000/api/user/updatedata/69e381873d8f44f7e766406e
// http://localhost:4000/api/user/deletedata/69e381873d8f44f7e766406e
