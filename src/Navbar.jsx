import React from "react";
import './Navbar.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
    const navigate = useNavigate();

    let isLoggedIn = false;
    let user_id = "aryan_hansoti_01";
    

    let navbar_show_user_id = (
        <div className="user_login">
            { user_id }
        </div>
    )

    let navbar_show_login = (
        <div className="user_login">
            <button onClick={() => navigate('/login')} className="login user_access_btn">Login</button>
            /
            <button onClick={() => navigate('/register')} className="register user_access_btn">Register</button>
        </div>
    )

    return (
        <div className="navbar df-ai">
            <div className="webname">Name here</div>
            <div className="webscontainer">
                { isLoggedIn ? navbar_show_user_id : navbar_show_login }
                { props.toggleButton }
                <div className="op-logo dff">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    );
}