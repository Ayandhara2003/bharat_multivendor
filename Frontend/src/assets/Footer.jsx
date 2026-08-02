import React from "react";
import "./Footer.css";
import logo from "./picture/Logo.png";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaShieldAlt,
  FaHeadset,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bharat-footer">

      {/* Main Footer */}
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">

          <div className="footer-brand">

            <img src={logo} alt="Logo" id="logo" />

            <div>
              <h2 className="footer-title">
                Bharat
              </h2>

              <p className="footer-subtitle">
                Digital Marketplace
              </p>
            </div>

          </div>

          <p className="footer-description">
            Build scalable auction and multi-vendor
            marketplaces with a modern responsive
            bidding experience.
          </p>

          <p className="footer-description">
            Call our Manager Sreedip Das:
            <span className="highlight-text">
              {" "}6290357236
            </span>
          </p>

          {/* Trust Badges */}
          <div className="trust-badges">

            <span>
              <FaCheckCircle />
              Verified Sellers
            </span>

            <span>
              <FaShieldAlt />
              Secure Payments
            </span>

            <span>
              <FaTruck />
              Fast Delivery
            </span>

            <span>
              <FaHeadset />
              24/7 Support
            </span>

          </div>

          {/* Social Icons */}
          <div className="footer-socials">

            <button className="social-btn">
              <FaFacebookF />
            </button>

            <button className="social-btn">
              <FaTwitter />
            </button>

            <button className="social-btn">
              <FaInstagram />
            </button>

            <button className="social-btn">
              <FaLinkedinIn />
            </button>

          </div>

        </div>

        {/* Marketplace */}
        <div className="footer-section">

          <h3 className="footer-heading">
            Marketplace
          </h3>

          <ul className="footer-links">

            <li>
              <a href="#" className="footer-link">
                Live Auctions
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Electronics
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Grocery
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                AutoMobile
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                RealEstate
              </a>
            </li>

          </ul>

        </div>

        {/* Company */}
        <div className="footer-section">

          <h3 className="footer-heading">
            Company
          </h3>

          <ul className="footer-links">

            <li>
              <a href="#" className="footer-link">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Our Sellers
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Pricing
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Blog & News
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Newsletter */}
        <div className="footer-section">

          <div className="newsletter-card">

            <h3 className="footer-heading">
              Newsletter
            </h3>

            <p className="footer-description">
              Subscribe to get latest auction listings,
              marketplace updates and bidding tips.
            </p>

            <div className="newsletter-box">

              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />

              <button className="newsletter-btn">
                Subscribe Now
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © 2026 Bharat. All rights reserved.
          </p>

          <div className="footer-policy-links">

            <a href="#" className="footer-link">
              Privacy Policy
            </a>

            <a href="#" className="footer-link">
              Terms & Conditions
            </a>

            <a href="#" className="footer-link">
              Support
            </a>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Footer;