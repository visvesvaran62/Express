import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {
   const navigate=useNavigate()
    const [formdata,setFormdata]=useState({userName:"",email:"",password:""})

    const handlechange=(e)=>{
        const{name,value}=e.target
        setFormdata({...formdata,[name]:value})

    }

    const handlesubmit=async(e)=>{
      e.preventDefault()
      
        const regisdata=await axios.post("http://localhost:4000/api/auth/regist",formdata)
        alert(regisdata.data.msg)

        navigate("/login")
        
     
        
       


    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
       <input type="text"  placeholder="enter Your Name" name="userName" value={ formdata.userName} onChange={handlechange}/>
       <input type="email"  placeholder="enter Your email" name="email" value={ formdata.email} onChange={handlechange}/>
       <input type="password"  placeholder="enter Your password" name="password" value={formdata.password } onChange={handlechange}/>
     <input type="submit" value={"register"}/>
      </form>
    </div>
  )
}

export default Register
