import './Home.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx'
import Me from './images/me.png';
import { useState, useEffect } from 'react';

function Home() {
  const navigate = useNavigate();
  const message = 'Front End Developer';
  let index = 0;

  // const [currentText, setCurrentText] = useState('');
      // const [First, setFirst] = useState(false);

  useEffect(() =>{
    console.log(message.charAt(0))
  },[])

  const handleNavigate = () => {
    navigate("/test");
}

  return (
    <>
    {/* <Navbar/> */}
      <div className="header-name"><p>nicholasAckley();</p><Navbar/><div className="animation" ></div></div>
      <div className="body">
        <div className="bio-container">
            <div className="name"><h1><b> Hi, I'm Nicholas Ackley</b></h1> <div className="animation"></div></div>
              <div className="front-end-text">Front-End Developer
                <div className="animation"></div>
              </div>
                <div className="biography"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book. .</p><div className="animation"></div>
              </div>
              <div className="button-container1">
                <button className='linked-in'>Old Website </button>
              <div className="animation"></div>
              </div>
              <div className="button-container2">
                <button className='git-hub'>GitHub</button>
              <div className="animation"></div>
              </div>

            <img src={Me} className='circle-object'></img>
        </div>
        <div className="social-media-container">
          <div className="social-media-circle"><box-icon className='gram'
            name='instagram' 
            type='logo' 
            rotate='90' 
            color='#00abf0'></box-icon>
          </div>
          <div className="social-media-circle"><box-icon name='linkedin' type='logo' rotate='360' color='#00abf0' ></box-icon></div>
          <div className="social-media-circle"><box-icon name='github' type='logo' color='#00abf0' ></box-icon></div>
        </div>
        
      </div>
      
    </>
  )
}

export default Home
