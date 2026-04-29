import { Navigate } from "react-router-dom"


const ProductedRoute = ({children}) => {

    const checktoken=localStorage.getItem("jwttoken")

     if(!checktoken){
    alert("Your not a Valid User Please Login again")
    return <Navigate to={"/"} />
  }

  return children
}

export default ProductedRoute
