import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";

const NavBar = () => {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);
  return (
    <div>
      <Link to="/">Home</Link>
      {loggedIn === false && (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Log In</Link>
        </>
      )}
      {loggedIn && (
        <>
          <Link to="/customer">Customers</Link> <LogOutBtn />
        </>
      )}
    </div>
  );
};

export default NavBar;
