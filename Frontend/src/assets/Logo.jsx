import React from "react";
import "./Logo.css";
import bharatLogo from "./logo.jpeg";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={bharatLogo} alt="Bharat Logo" className="logo-image" />
    </div>
  );
};

export default Logo;