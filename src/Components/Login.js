import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import Toggle from './Toggle';
import "../Css/Signup.css"

function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
          navigate('/Home');
        } else {
          alert('Invalid email or password');
        }
      };
  return (
    <div>
    <Toggle />
    <div className="container">
      <div className="signup">
        <div className="login2">
          <h2 className="insta">Create Account</h2>
          <div className="name">
            <input
              type="email"
              name="task"
              value={email}
              id="name"
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password">
            <input
              name="password"
              type={visible ? "text" : "password"}
              value={password}
              id="pass"
              placeholder="Password.."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button">
            <button onClick={handleLogin}>
              {loading ? "loading..." : "Log in"}
            </button>
          </div>
          <div className="condition">Forget Password?</div>
        </div>
        <div className="other-account">
          <div>
            Dont'nt Have an Account?{" "}
            <span>
              <NavLink to="/">Sign Up</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
