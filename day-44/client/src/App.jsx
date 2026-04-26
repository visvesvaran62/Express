import axios from 'axios'
import { useState } from 'react'


const App = () => {
   const[formdata,setFormdata]=useState({userName:"",email:"",password:""})

  const[userdata,setUserdata]=useState([])

  const handlechange=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }
  
  const handlesubmit=async(e)=>{
  try {
    e.preventDefault()
    const usersdata=await axios.post("http://localhost:4000/api/user/data",formdata)
       console.log(usersdata.data.msg);
       setUserdata(usersdata.data.msg);
   
  
    alert(userdata.data.msg)
     setFormdata({userName:"",email:"",password:""})
    
  } catch (error) {
    console.log(error); 
  }
  }
  return (
    <div>
       <form  onSubmit={handlesubmit}>
      <input type="text" name='userName' value={formdata.userName} onChange={handlechange} placeholder='enter your name' />
      <input type="email" name='email' value={formdata.email} onChange={handlechange}  placeholder='enter your mobilenumber' />
      <input type="password" name='password'  value={formdata.password} onChange={handlechange} placeholder='enter your email' />
      <input type="submit" value='register' />
    </form>
    </div>
  )
}

export default App
