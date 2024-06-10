import './Home.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx'
import Me from './images/me.png';
function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/test");
}

  return (
    <>
    <Navbar/>
      {/* <h1 onClick={handleNavigate}>Hello World!</h1> */}
      <div className="header-name"><p>nicholasAckley();</p></div>
      <div className="body">
        <div className="bio-container">
            <div className="name"><h1> Hi, I'm Nicholas Ackley</h1></div>
              <div className="front-end-text"><b>Front-End Developer</b></div>
                <div className="biography"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
                Ipsum.</p>
              </div>
            <img src={Me} className='circle-object'></img>
        </div>
        
      </div>
    </>
  )
}

export default Home
