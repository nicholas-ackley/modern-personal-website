import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.jsx';
import Test from './Test.jsx';
import Projects from './Projects.jsx';
// import Photos from './Photos.jsx'
// import Navbar1 from './Navbar1.jsx'
import ContactMe from './ContactMe.jsx';
// import Projects from './Projects.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/test", element: <Test /> },
  { path: "/projects", element: <Projects /> },  // Ensure path consistency
  // { path: "/photos", element: <Photos /> },   // Ensure path consistency

  { path: "/contactme", element: <ContactMe /> }, // Ensure path consistency
  // { path: "/music", element: <Music /> }  // Correctly format the element assignment
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
