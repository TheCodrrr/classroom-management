import React from 'react'
import App from './App.jsx'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDom from "react-dom/client";
import Login from './Login.jsx';
import Register from './Register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
])

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
