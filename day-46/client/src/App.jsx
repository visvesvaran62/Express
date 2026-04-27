import { useState } from "react"
import axios from "axios"


const App = () => {
  const[formdata,setFormdata]=useState({userName:"",email:"",password:""})

  const handlechange=(e)=>{
    const{name,value}=e.target
   setFormdata({...formdata,[name]:value})

  }

  const handlesubmit=async(e)=>{
    e.preventDefault()
    try {
      const datas=await axios.post("http://localhost:4000/api/auth/data",formdata)
      console.log(datas);
      alert(datas.data.msg)
      setFormdata({userName:"",email:"",password:""})
      
      
    } catch (error) {
      console.log(error);
      
      
    }
  }
  return (
   <>
   <form onSubmit={handlesubmit}>
    <input type="text" name="userName" value={formdata.userName} placeholder="enter the name"  onChange={handlechange}/>
    <input type="email" name="email" value={formdata.email} placeholder="enter the email" onChange={handlechange} />
    <input type="password" name="password" value={formdata.password} placeholder="entre the password" onChange={handlechange} />
    <input type="submit" value={"register"} />

   </form>
   
   </>
  )
}

export default App
