// Signin.jsx
import React, { useRef, useEffect } from "react";
import "./signin.css";

const Signin = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div id="signin" ref={containerRef}>
      <div className="signin-box">
        <div id="signtxt">
          <h1>Welcome Back</h1>
          <p>Please enter your details to sign in</p>

          <div className="input-box">
            <label htmlFor="un">Username or Email</label>
            <input type="text" id="un" placeholder="Enter your email" />
          </div>

          <div className="input-box">
            <label htmlFor="ps1">Password</label>
            <input type="password" id="ps1" placeholder="Enter your password" />
          </div>

          <div className="extra">
            <div className="remember">
              <input type="checkbox" id="check" />
              <label htmlFor="check">Remember me</label>
            </div>
            <a href="/">Forgot Password?</a>
          </div>

          <button className="signin-btn">Sign In</button>

          <div className="bottom-text">
            <span>Don't have an account?</span>
            <a href="/"> Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;