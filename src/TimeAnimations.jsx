import React, { useState, useEffect } from 'react';

const TimedAnimations = () => {
  const [visible, setVisible] = useState({ box1: false, box2: false, box3: false });

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisible(v => ({ ...v, box1: true })), 500),
      setTimeout(() => setVisible(v => ({ ...v, box2: true })), 1500),
      setTimeout(() => setVisible(v => ({ ...v, box3: true })), 2500)
    ];

    return () => timers.forEach(clearTimeout); // Cleanup all timers
  }, []);

  return (
    <div>
      <div className={`box ${visible.box1 ? 'visible' : ''}`}>Box 1</div>
      <div className={`box ${visible.box2 ? 'visible' : ''}`}>Box 2</div>
      <div className={`box ${visible.box3 ? 'visible' : ''}`}>Box 3</div>
    </div>
  );
};

export default TimedAnimations;
