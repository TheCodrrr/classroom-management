import React from "react";
import { useState } from "react";
import './Navbar.css';

export default function Navbar() {

    const [isLightMode, setIsLightMode] = useState(false);

    // Function to toggle between light and dark modes
    let toggleMode = () => {
        setIsLightMode(!isLightMode); // Toggle the mode
    };

    return (
        <div class="navbar df-ai">
            <div class="webname">Name here</div>
            <div class="webscontainer">
                <div class="user_login">
                    <a href="#" className="login">Login</a>
                    /
                    <a href="#" className="register">Register</a>
                </div>
                <div class="logo dff" onClick={toggleMode}>
                    {isLightMode ? (
                        <i className="fa-solid fa-sun"></i> // Light Mode Icon
                    ) : (
                        <i className="fa-solid fa-moon"></i> // Dark Mode Icon
                    )}
                </div>
                <div class="op-logo dff">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    );
}