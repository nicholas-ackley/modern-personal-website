import React from 'react';
import { useNavigate } from 'react-router-dom';


const Test = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClickPiano = () => {
    navigate(to);
  };

  return (
    <>


    <button onClick={handleClickPiano} className="navigate-button">
      {children}
    </button>
    </>
  );
};

export default Test;
