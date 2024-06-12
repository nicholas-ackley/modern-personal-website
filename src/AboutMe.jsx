import React, { useRef } from 'react';
import Navbar from './Navbar';
import './AboutMe.css';
import Formal from './images/delete1.png';
import Typing from './Typing.jsx'

function AboutMe() {
  const aboutRef = useRef(null);  // Reference to the About section
  const homeRef = useRef(null);  // Reference to the Home section
  // const longestLength = Math.max(...lines.map(line => line.length));



  const handleHomeScroll = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar onHomeClick={handleHomeScroll}  onAboutClick={handleAboutScroll}/>
      <div ref={homeRef} className="home-section">
        <h1>Home Page</h1>
      </div>
      <div className="about-body">
        <div ref={aboutRef} className="about-section"> 
        </div>
        <div className="about-me-title"><h1>About</h1>
          <div className="blue"><h1>Me</h1></div>
        </div>
          <div className="about-me-container">
            <img src={Formal} className='about-me-picture'></img>
          </div>  
          <Typing/>
      </div>
    </>
  );
}

export default AboutMe;
