import { Route, Routes } from "react-router-dom"
import Register from "../src/pages/Register"
import Login from "../src/pages/Login"
import Dashboard from "../src/pages/Dashboard"
import ProductedRoute from "../Productedroute/ProductedRoute"


const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
import Dashboard from "../src/pages/Dashboard"
        <Route path="/Dashboard" element={<ProductedRoute><Dashboard/></ProductedRoute>}/>
    </Routes>
    </>
  )
}

export default AppRoutes
