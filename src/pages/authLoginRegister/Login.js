import React, { useState, } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios"
import "./LoginRegister.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {   
      const {data} = await axios.post("http://localhost:4000/auth/login",{email: email, pass: password})
      localStorage.setItem("user", JSON.stringify(data))
      navigate('/')
    } catch (error) {
      setMessage(error.response.data.message)
    }
  };

  return (
    <div className="conatiner">
      <div className="wrapper">

      
      <h1>login</h1>
      <form className="form">
        <p>email id</p>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <p>password</p>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <button onClick={handleSubmit}>submit</button>
        </form>

      {message && <p>{message}</p>}
        <div>
          socials
        </div>
        </div>
    </div>
  );
};

export default Login;

