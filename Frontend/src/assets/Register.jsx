// Register.jsx
import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div id="register">
      <div className="register-box">
        <div id="registertxt">
          <h1>Create Account</h1>
          <p>Please fill in your details to register</p>

          <div className="input-box">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
            />
          </div>

          <div className="input-box">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-box">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
            />
          </div>

          <div className="input-box">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="password"
              id="cpassword"
              placeholder="Confirm your password"
            />
          </div>

          <div className="terms">
            <input type="checkbox" id="check" />
            <label htmlFor="check">
              I agree to the Terms & Conditions
            </label>
          </div>

          <button className="register-btn">Create Account</button>

          <div className="bottom-text">
            <span>Already have an account?</span>
            <a href="/"> Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;