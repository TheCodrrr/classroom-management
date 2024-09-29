import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './navbar';
import Content from './Content';
import Login from './Login';
import Register from './Register';

function App() {

  fetch('http://127.0.0.1:5000/api/', {
    headers: {}
  })
  .then(response => response.json())  // Parse the response from Flask
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  const [message, setMessage] = useState('');
  const [isLightMode, setIsLightMode] = useState(false);

  // Function to toggle between light and dark modes
  let toggleMode = () => {
      setIsLightMode(!isLightMode); // Toggle the mode
  };

  // useEffect(() => {
  //   axios.get('/api/login')
  //     .then(response => {
  //       console.log(response.data.hello);
  //       setMessage(response.data.hello);
  //     })
  //     .catch(error => {
  //       console.error("There was an error!", error);
  //     });
  // }, []);

  let toggleButton = (
    <div className="logo dff" onClick={toggleMode}>
        {isLightMode ? (
            <i className="fa-solid fa-sun toggle_logo"></i> // Light Mode Icon
        ) : (
            <i className="fa-solid fa-moon toggle_logo"></i> // Dark Mode Icon
        )}
    </div>
  )

  return (
    <>
      { isLightMode ? (
        <div className="container change_mode">
          <Navbar toggleButton={ toggleButton }/>
          <Content/>
        </div>
      ) : (
        <div className="container">
          <Navbar toggleButton={ toggleButton }/>
          <Content/>
        </div>
      ) }


      {/* <p>{ message }</p> */}
      
    </>
  )
}

export default App
