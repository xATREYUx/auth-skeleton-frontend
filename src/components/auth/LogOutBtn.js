import React, { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import domain from "../../util/domain";

export const LogOutBtn = () => {
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  const logOut = async () => {
    await axios.get(`${domain}/auth/logout`);
    await getLoggedIn();
    history.push("/");
  };
  return <button onClick={logOut}>Log out</button>;
};

export default LogOutBtn;
