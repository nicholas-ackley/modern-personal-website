import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onHomeClick, onAboutClick }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-item bounce-hover"><b>nicholasAckley();</b></Link>
        <button onClick={onHomeClick} className="nav-item bounce-hover"><b>Home</b> </button>
        <button onClick={onAboutClick} className="nav-item bounce-hover"><b>About</b></button> 
        <Link to="/services" className="nav-item bounce-hover"><b>Projects</b></Link>
        <Link to="/contact" className="nav-item bounce-hover"><b>Contact</b></Link>
      </nav>
    </>
  );
}

export default Navbar;
