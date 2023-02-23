import React, { useState } from "react";
import axios from "axios"
import "./LoginRegister.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [FullName, setFullName] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {   
      const {data} = await axios.post("http://localhost:4000/auth/register",{
      name: FullName,
      email: email, 
      password: password
    }
    )
    console.log(data.message)
    setMessage(data.message)

    } catch (error) {
      console.log(error.response.data.message)
      setMessage(error.response.data.message)
    }
  };

  return (
    <div className="conatiner">
      <div className="wrapper">

      
      <h1>Registor</h1>
      <form className="form">
      <p>Full Name</p>
          <input
            type="text"
            // id="email"
            value={FullName}
            placeholder="Enter your Full Name"
            onChange={(e) => setFullName(e.target.value)}
            required
            />
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

export default Register;

