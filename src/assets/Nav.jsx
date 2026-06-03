import React from "react";
import logo from "./picture/Logo.png";
import './nav.css';
import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <div id="navmain">
            <img src={logo} alt="Logo" id="logo" />
            <div id="com">
                <ul>
                    <li className="navhover">Home</li>
                    <li className="dropdown navhover">Electronics
                        <ul className="dropdown-menu">
                            <li>Mobiles</li>
                            <li>laptops</li>
                            <li>Tablets</li>
                            <li>Smart Watches</li>
                            <li>Cameras</li>
                            <li>Headphones</li>
                            <li>Speakers</li>
                            <li>Computer Accessories</li>
                            <li>Gaming Console</li>
                            <li>Smart TVs</li>
                        </ul>
                    </li>
                    <li className="dropdown navhover">
                        Grocery 
                        <ul className="dropdown-menu">
                            <li>Fruits</li>
                            <li>Vegetables</li>
                            <li>Dairy</li>
                            <li>Snacks</li>
                            <li>Beverages</li>
                        </ul>
                    </li>
                    <li className="dropdown navhover">
                        AutoMobile
                        <ul className="dropdown-menu">
                            <li>Cars</li>
                            <li>Bikes</li>
                            <li>Scooters</li>
                            <li>Electric Vehicles</li>
                            <li>Trucks</li>
                            <li>Auto Parts</li>
                            <li>Tyres</li>
                            <li>Accessories</li>
                            <li>Car Care</li>
                            <li>Helmets</li>
                        </ul>
                    </li>
                    <li className="navhover dropdown">
                        Books
                        <ul className="dropdown-menu">
                            <li>উপন্যাস</li>
                            <li>রহস্য</li>
                            <li>কল্প-বিজ্ঞান</li>
                            <li>ছোটগল্প</li>
                            <li>কবিতা</li>
                        </ul>
                        </li>
                </ul>
            </div>
            <div id="search-box">
                <input
                    type="search"
                    placeholder="Search products..."
                    id="search"
                />
                <button id="search-btn">🔍</button>
            </div>

            <Link to="/Register" id="sign">
                <button id="signup">Sign Up</button>
            </Link>
        </div>

    )
}

export default Nav