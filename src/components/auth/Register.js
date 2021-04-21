import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      const register = {
        email, password, passwordVerify
      }
      await axios.post("http://localhost:5000/auth/", registerData)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h1>Register a new account</h1>
      <form onSubmit={register}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} valie={password} />
        <input type="passwordVerify" placeholder="Verify your password" onChange={(e) => setPasswordVerify(e.target.value)} value={passwordVerify} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
