import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx';
import Test from './Test.jsx';
// import Projects from './Projects.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/test", element: <Test /> },
  // { path:"projects", element: <Projects/>}
  // { path: "/music", element <Music/>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
