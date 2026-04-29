import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {
   const navigate=useNavigate()
    const [formdata,setFormdata]=useState({email:"",password:""})

    const handlechange=(e)=>{
        const{name,value}=e.target
        setFormdata({...formdata,[name]:value})

    }



    const handlesubmit=async(e)=>{
      e.preventDefault()
      try {
        const Logindata= await axios.post("http://localhost:4000/api/user/LoginUser",formdata)
        // alert(Logindata.data.msg)
         navigate("/Dashboard")

        localStorage.setItem("jwttoken",Logindata.data.token)
        setFormdata({
       
        email: "",
        password: ""
      })
       
      } catch (error) {
        alert(error.resposnse.data.msg)
       
      }


    }

  return (
    <div>
      <form onSubmit={handlesubmit}>
       <input type="email"  placeholder="enter Your email"  autoComplete="current-password" name="email" value={ formdata.email} onChange={handlechange}/>
       <input type="password"  placeholder="enter Your password" name="password" value={formdata.password } onChange={handlechange}/>
     <input type="submit" value={"register"}/>
      </form>
    </div>
  )
}

export default Login
