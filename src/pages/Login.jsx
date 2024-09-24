import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8800/api/login", {
        username: username,
        password: password,
      });

      console.log("Full response:", response);
      console.log("Login status:", response.data.message);
      console.log("User details:", response.data.user);

      if (response.data.message === "Login approved") {
        navigate("/main");
      }
      if (response.data.message === "Login denied, incorrect password") {
        setMessage("LOGIN HAS BEEN DENIED!");
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <form className="login" onSubmit={handleLogin}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
      <p className="message">{message}</p>
    </form>
  );
};

export default Login;
