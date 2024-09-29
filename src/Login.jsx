import React, { useRef, useState } from "react";
import axios from "axios";
import './UserAccess.css';
import logo from '../public/logo.png';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const userNameRef = useRef(null);  // Create a ref for the User ID input
    const passwordRef = useRef(null);  // Create a ref for the Password input
    const [errorMessage, setErrorMessage] = useState('');  // State to manage error messages

    const handleLogin = async () => {
        const userName = userNameRef.current.value;  // Get the value of User ID input
        const password = passwordRef.current.value;  // Get the value of Password input
        
        console.log("User ID:", userName, "Password:", password);  // Print the values
        const data = { email: userName, password };  // Assume you're using email as username

        try {
            // Send data to backend using axios POST
            const response = await axios.post('http://127.0.0.1:5000/api/login', data, {
                headers: {
                    'Content-Type': 'application/json',  // Tell the backend you're sending JSON
                }
            });

            console.log('Login Success:', response.data);
            if (response.data.message === 'Login successful') {
                // Redirect to home page if login is successful
                navigate('/');
            } else {
                // Handle invalid login
                setErrorMessage('Invalid username or password');
            }
        } catch (error) {
            setErrorMessage("You havn't registered yet, going to registration page...");
            setInterval(() => {
                navigate('/register')
            }, 3000);
            // console.error('Login Error:', error);
        }
    };

    return (
        <>
            <div className="user_access_form_container dff">
                <div className="header_access">
                    <div className="webname_access"><h1>Ease Desc</h1></div>
                </div>
                <div className="content_access">
                    <div className="form_access">
                        <div className="logo_access dff">
                            <img rel="icon" src={logo}/>
                        </div>
                        {/* Use refs to access the input fields */}
                        <input 
                            className="input_access" 
                            type="text" 
                            placeholder="User Id" 
                            ref={userNameRef}  // Associate the ref with the input field
                        />
                        <input 
                            className="input_access" 
                            type="password" 
                            placeholder="Password" 
                            ref={passwordRef}  // Associate the ref with the input field
                        />
                        <button className="button_access" onClick={handleLogin}>Log in</button>
                        <div className="message_access">
                            <a href="/register">Don't have an account? Click here to register</a>
                        </div>
                        {/* Display error message conditionally */}
                        {errorMessage && <div className="error_message"><h3>{errorMessage}</h3></div>}
                    </div>
                </div>
            </div>
        </>
    );
}
