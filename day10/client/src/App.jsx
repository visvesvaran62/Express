import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const[formdata,setFormdata]=useState({name:"",mobilenumber:"",email:""})

  const[userdata,setUserdata]=useState([])

  const handlechange=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }
  
  const handlesubmit=async(e)=>{
  try {
    e.preventDefault()
    const userdata=await axios.post("http://localhost:4000/api/user/create",formdata)
       console.log(userdata.data.msg);
   
  
    alert(userdata.data.msg)
     setFormdata({name:"",mobilenumber:"",email:""})
     finddata()
    
  } catch (error) {
    console.log(error); 
  }
  }

  const finddata=async()=>{
    try {
      const res=await axios.get("http://localhost:4000/api/user/get/data")
      console.log(res.data);
       setUserdata(res.data)
      

      
    } catch (error) {
      console.log(error);
      
      
    }

  }
  useEffect(()=>{
    // console.log("effet running");
    
    finddata()
  },[])
  return (
    <>
    <form  onSubmit={handlesubmit}>
      <input type="text" name='name' value={formdata.name} onChange={handlechange} placeholder='enter your name' />
      <input type="tel" name='mobilenumber' value={formdata.mobilenumber} onChange={handlechange}  placeholder='enter your mobilenumber' />
      <input type="email" name='email'  value={formdata.email} onChange={handlechange} placeholder='enter your email' />
      <input type="submit" value='register' />
    </form>


    <div className='bg-black h-screen '>
      <div className='bg-amber-400 h-screen p-2 text-white flex gap-10 flex-wrap'>
        {userdata.map((e,i)=>(
          <div className='bg-black flex   flex-col items-center p-2 ' key={i}>
            <h1>{e.name}</h1>
            <h3>{e.mobilenumber}</h3>
            <h3>{e.email}</h3>

          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
