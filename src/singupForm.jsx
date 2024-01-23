import React, { useState } from 'react';
import "./css/sig.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const SignupForm = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/register", { username, email, password })
      .then(result => {
        console.log(result);
        navigate("/login");
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <div>
        <div>
          <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-group">
              <h2>register</h2>
                <label htmlFor="username">Username</label> <br />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
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
              <button className="register-button" type="submit">REGISTER</button>
              <Link to="/login" className='login'>login</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
