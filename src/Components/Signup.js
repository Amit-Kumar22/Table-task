import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import Toggle from './Toggle';
import "../Css/Signup.css"

function Signup() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handle = async (e) => {
        e.preventDefault();

        if (password.length >= 8 ) {
            setLoading(true);
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({ email, password });
            localStorage.setItem('users', JSON.stringify(users));
            navigate("/Login");
        }
    }
  return (
    <div>
    <Toggle />
    <div className="container">
      <div className="signup">
        <form className="login2 signup2" method="POST">
          <h2 className="insta">Create Account</h2>
          <div className="name">
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="name">
            <input
              type="text"
              name="Fullname"
              value={name}
              id="name"
              placeholder="Full Name..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="name">
            <input
              type="text"
              name="userName"
              value={username}
              id="name"
              placeholder="Username..."
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="password">
            <input
              type={visible ? "text" : "password"}
              value={password}
              name="password"
              id="pass"
              placeholder="Password.."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br></br>
          <div className="button">
          
          <button onClick={handle}>
            {loading ? "loading..." : "signup"}
          </button>

          </div>
          
        </form>
        <div className="other-account">
          <div>
            Have an Account?{" "}
            <span>
              <NavLink to="Login">Log In</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup
