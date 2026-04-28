import { Route, Routes } from "react-router-dom"
import Register from "../src/pages/Register"
import Login from "../src/pages/Login"
import Dashboard from "../src/pages/Dashboard"


const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes
