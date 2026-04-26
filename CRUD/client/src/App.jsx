import React, { useState } from 'react'
import axios from "axios"

const App = () => {
  const[formdata,setFormdata]=useState({name:"",email:"",password:""})

  const handlechange=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }

  const handlesubmit=async(e)=>{
    e.preventDefault()
    try {
      const datas=await axios.post("http://localhost:4000/api/user/create",formdata)
      console.log(datas.data);
      alert(datas.data.msg)
      setFormdata({name:"",email:"",password:""})
  
      
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div>
      <form  onSubmit={handlesubmit}>
        <input type="text"name='name' value={formdata.name} placeholder='enter your name' onChange={handlechange}/>
        <input type="email"name='email' value={formdata.email} placeholder='enter your email' onChange={handlechange}/>
        <input type="password"name='password' value={formdata.password} placeholder='enter your password' onChange={handlechange}/>
        <input type="submit" value={"Register"} />
      </form>
      
    </div>
  )
}

export default App
