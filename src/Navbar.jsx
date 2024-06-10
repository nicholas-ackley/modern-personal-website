import './Navbar.css'
import React from 'react'
import {Link }  from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Navbar () {



        return(
            <>
                <nav className="navbar">
                <Link to="/" className="nav-item"><b>Home</b></Link>
                <Link to="/about" className="nav-item"><b>Projects</b></Link>
                <Link to="/services" className="nav-item"><b>Music</b></Link>
                <Link to="/contact" className="nav-item"><b>Contact</b></Link>
                </nav>
            
            </>
        )


    
}
export default Navbar