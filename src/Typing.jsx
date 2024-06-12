import React, { useState, useEffect } from 'react';
import './Typing.css';

const Typing = () => {
  const text = "I'm a software engineer and classical musician studying computer science at The University of Texas at Dallas ";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const delay = 2000; // 2 seconds delay before starting the typing animation
    const delayTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, []);

  useEffect(() => {
    if (isTyping && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 100); // Adjust the speed of typing here
      return () => clearTimeout(timeout);
    }
  }, [isTyping, index, displayedText, text]);

  return (
    <div className="typing-container">
      <p className="typing-text">{displayedText}<span className="cursor">|</span></p>
    </div>
  );
};

export default Typing;
