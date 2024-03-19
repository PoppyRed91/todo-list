import React from "react";
import "./SignUp.css";
import logo from "../Assets/TaskZilla-logo.png";
import { Link } from "react-router-dom";
export const SignUp = () => {
  return (
    <>
      <div className="signUp-container">
        <header className="header">
          <img src={logo}></img>
          <h1 className="text">Sign Up</h1>
        </header>
        <div className="inputs">
          <label>Name</label>
          <input type="text" placeholder="Your name"></input>
          <label>Email</label>
          <input type="email" placeholder="youremail@gmail.com"></input>
          <label>Password</label>
          <input type="password" placeholder="******"></input>
          <div className="submit-container">
            <button className="submit-button">Sign up</button>
            <a href="#">Already have an account? Sign in</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
