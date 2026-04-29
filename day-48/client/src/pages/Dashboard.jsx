import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Dashboard = () => {
  const navigate = useNavigate()
const [getusers,setgetusers] = useState("")
  const getData=async()=>{
    try {
      const gettoken=localStorage.getItem("jwttoken")

       const getValue = await axios.get(" http://localhost:4000/api/user/Dashinfo",{headers:{Authorization:gettoken}})
      setgetusers(getValue.data.Users)
    } catch (error) {
      alert(error.response.data.msg)
        navigate("/")
        localStorage.removeItem("jwttoken")
    }

  }
useEffect(()=>{
    (async()=>{getData()})()
  },[])
  
  return (

<>

<h1>dashboard</h1>
<h1>welcome user {getusers.email}</h1>

</>
  
  )
}

export default Dashboard
