// Login.js

import React, { useState } from 'react';
import "./css/log.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        console.log(result);
        if (result.data.message === "Congratulations, you are logged in!") {
          navigate("/cong");
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <div>
        <div>
          <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
              <h2>Login</h2>
              <div className="input-group">
                <label htmlFor="email">Email</label> <br />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label> <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div> <br />
              <button className="register-button" type="submit">LOGIN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
