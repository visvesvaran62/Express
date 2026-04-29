import { Link } from "react-router-dom"
// import AppRoutes from "../../route/AppRoutes"



const Navbar = () => {
  return (
    <div>
        <Link to="/">Register</Link>
        <Link to="/login">login</Link>
        <Link to="/Dashboard">Dashboard</Link>
        {/* <AppRoutes/> */}
    
    </div>
  )
}

export default Navbar
