import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("Admin");
  const [password, setPassword] = useState("Admin");
  const [userLogin, seUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  const handleChangeLogin = (e) => {
    seUserLogin(e.target.value);
  };
  console.log(userLogin);
  const handleChangePassword = (e) => {
    setUserPassword(e.target.value);
  };
  console.log(userPassword);

  function loginClick() {
    if (userLogin === login && userPassword === password) {
      navigate("/main");
      console.log("Geri prisijungimo duomenys");
    } else {
      alert("Blogi prisijungimo duomenys");
    }
  }
  return (
    <div className="login">
      <h2>Please login to enter site</h2>
      <span>
        <p>User login </p>
        <input
          type="text"
          placeholder="Enter LOGIN"
          value={userLogin}
          onChange={handleChangeLogin}
        />
      </span>
      <span>
        <p>User Password</p>
        <input
          type="password"
          placeholder="Enter password"
          value={userPassword}
          onChange={handleChangePassword}
        />
      </span>

      <button onClick={loginClick}>LOGIN</button>
    </div>
  );
};

export default Login;
