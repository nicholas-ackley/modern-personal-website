import './Navbar.css'
import React from 'react'
import {Link }  from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Navbar () {



        return(
            <>
                <nav className="navbar">
                <Link to="/" className="nav-item bounce-hover"><b>Home</b></Link>
                <Link to="/about" className="nav-item bounce-hover"><b>Projects</b></Link>
                <Link to="/services" className="nav-item bounce-hover"><b>Music</b></Link>
                <Link to="/contact" className="nav-item bounce-hover"><b>Contact</b></Link>
                </nav>
            
            </>
        )


    
}
export default Navbar