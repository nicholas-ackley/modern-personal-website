import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onHomeClick, onAboutClick }) {
  return (
    <>
        {/* DEFAULT NAVBAR ON EVERY PAGE  */}
      <nav className="navbar">
        <Link to="/none" className="nav-item bounce-hover"><b>nicholasAckley();</b></Link>
        <Link to="/" button onClick={onHomeClick} className="nav-item bounce-hover"><b>Home</b></Link>
        <Link to="/" button onClick={onAboutClick} className="nav-item bounce-hover"><b>About</b></Link>
        <Link to="/Projects" className="nav-item bounce-hover"><b>Projects</b></Link>
        <Link to="/ContactMe" className="nav-item bounce-hover"><b>Contact</b></Link>
        <span className='animate' style={{ '--i':1}}></span>
      </nav>

    </>
  );
}

export default Navbar;
