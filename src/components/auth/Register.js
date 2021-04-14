import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  return (
    <div>
      <h1>Register a new account</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="passwordVerify" placeholder="Verify your password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
