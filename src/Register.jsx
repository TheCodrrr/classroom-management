import React from "react";
import './UserAccess.css';
import logo from '../public/logo.png';

export default function Register() {
    return (
        <>
            <div className="user_access_form_container dff">
                <div className="header_access">
                    <div className="webname_access"><h1>Website Name is here</h1></div>
                </div>
                <div className="content_access">
                    <div className="form_access">
                        <div className="logo_access">
                        <img rel="icon" src={logo}/>
                        </div>
                        <div className="username_access">
                            <input className="input_access" type="text" placeholder="First Name"/>
                            <input className="input_access" type="text" placeholder="Last Name"/>
                        </div>
                        <input className="input_access" type="email" placeholder="Email"/>
                        <input className="input_access" type="password" placeholder="Creat Password"/>
                        <input className="input_access" type="password" placeholder="Confirm Password"/>
                        <button className="button_access">Register</button>
                        <div className="message_access"><a href="/login">Already have an account? Click here to login</a></div>
                    </div>
                </div>
            </div>
        </>
    );
}