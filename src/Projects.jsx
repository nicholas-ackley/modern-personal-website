import React from 'react';
import './Projects.css';
// import Navbar from './Navbar';
import Navbar from './Navbar.jsx';
import Piano from './images/pi.png'
import Snake from './images/snake.png'
import Traver from './images/traver.png'
import Arduino from './images/arduino.png'
import Cam from './images/cam.png'
import React1 from './images/react.png'
import Test from './Test.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const projects = [
  {
    title: 'Project One',
    description: 'This is a brief description of Project One.',
    image: 'https://via.placeholder.com/300'
  },
  {
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    image: 'https://via.placeholder.com/300'
  },
  {
    title: 'Project Three',
    description: 'This is a brief description of Project Three.',
    image: 'https://via.placeholder.com/300'
  },
  {
    title: 'Project Four',
    description: 'This is a brief description of Project Four.',
    image: 'https://via.placeholder.com/300'
  }
];



const Projects = () => {
    return (
      <>
 <Navbar />
      <div className="body1">
        <div className="title"><h1>Personal</h1>
          <div className="white"><h1>Projects</h1></div>
        </div>
        <div className="project-card-container">
          <div className="project-card1">
            <img
              src={React1}
              alt="Project One"
              className="project-image"
            />
            <div className="project-info">
              <h2 className="project-title">Project One</h2>
              <p className="project-description">
                A React Application I made for 
              </p>
              <a href="http://example.com" className="project-link">
                View Project
              </a>
            </div>
          </div>

          <div className="project-card2">
            <img
              src={Snake}
              alt="Project Two"
              className="project-image"
            />
            <div className="project-info">
              <h2 className="project-title">Project Two</h2>
              <p className="project-description">
                A snake game created in Python using Pygame
              </p>
              <a href="http://example.com" className="project-link">
                View Project
              </a>
            </div>
          </div>

          <div className="project-card3">
            <img
              src={Arduino}
              alt="Project Three"
              className="project-image"
            />
            <div className="project-info">
              <h2 className="project-title">Project Three</h2>
              <p className="project-description">
                A Project that uses WS2B Lights and an Arduino to display cool affects on an LED Strip
              </p>
              <a href="http://example.com" className="project-link">
                View Project
              </a>
            </div>
          </div>


          <div>
      {/* <h1>Piano Page</h1> */}
      {/* <Test to="/Piano" className='project-card4'>Go to Contact Page</Test> */}
      {/* Add more content here */}
    </div>



          <div className="project-card4">
            <img
              src={Piano}
              alt="Project Four"
              className="project-image"
            />
            <div className="project-info">
              <h2 className="project-title">Project Four</h2>
              <p className="project-description">
                My personal Piano Reperetoire Website
              </p>
              <a href="http://example.com" className="project-link">
                View Project
              </a>
            </div>
          </div>


            <div className="project-card5">
              <img
                src={Cam}
                alt="Project Five"
                className="project-image"
              />
              <div className="project-info">
                <h2 className="project-title">Project Five</h2>
                <p className="project-description">
                  My personal Photo Album of people, places, and things.
                </p>
                <a href="http://example.com" className="project-link">
                  View Project
                </a>
              </div>
            </div>

          <div className="project-card6">
            <img
              src={Traver}
              alt="Project Six"
              className="project-image"
            />
            <div className="project-info">
              <h2 className="project-title">Project Six</h2>
              <p className="project-description">
                Applications I've worked on as an intern at Traver Companies.
              </p>
              <a href="http://example.com" className="project-link">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Projects;
