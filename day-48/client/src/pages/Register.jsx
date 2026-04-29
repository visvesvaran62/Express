import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    userName: "",
    email: "",
    password: ""
  });

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const UserData = await axios.post(
        "http://localhost:4000/api/user/data",
        formdata
      );

      alert(UserData.data.msg);

      setFormdata({
        userName: "",
        email: "",
        password: ""
      });

      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
    }
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="userName"
          value={formdata.userName}
          onChange={handlechange}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={formdata.email}
          onChange={handlechange}
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={formdata.password}
          onChange={handlechange}
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;