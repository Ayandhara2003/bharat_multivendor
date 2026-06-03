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
                    <li className="navhover">RealState</li>
                </ul>
            </div>
            <input type="search" name="" id="" />
            <Link to='/Register' id="sign">
                <form action="" method="get"id="signup">Sign Up</form>
            </Link>
        </div>

    )
}

export default Nav