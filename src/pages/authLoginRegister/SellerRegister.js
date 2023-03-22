import React, { useState } from "react";
import axios from "axios"
import "./LoginRegister.css";

const SellerRegister = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [FullName, setFullName] = useState("")

    const validate = () => {
        // const emailRegex = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";
        // if(!email.match(emailRegex)) return {message: "email is not valid"}
        if(password.length < 8) return {message: "Password can not be less then 8 charectors"}
        if(phone.length <= 10) return {message: "number can not be less then 10 digit"}
        return {success: true}
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = validate()
        console.log(result)
        if(!result.success) return setMessage(result.message)
        try {
            const { data } = await axios.post("http://localhost:4000/auth/seller/register", {
                name: FullName,
                email: email,
                password: password,
                number: phone,
                address: address
            }
            )
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
                <form className="form" onSubmit={handleSubmit}>
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
                    <p>Number</p>
                    <input
                        type="tel"
                        id="number"
                        value={phone}
                        placeholder="Enter your Phone number"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <p>address</p>
                    <textarea
                        type="tel"
                        id="address"
                        value={address}
                        placeholder="Enter your address"
                        onChange={(e) => setAddress(e.target.value)}
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
                    <button>submit</button>
                </form>

                {message && <p>{message}</p>}
                <div>
                    socials
                </div>
            </div>
        </div>
    );
};

export default SellerRegister;

