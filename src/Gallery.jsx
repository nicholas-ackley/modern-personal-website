// src/components/Gallery.js
import React from 'react';
import Polaroid from './Polaroid';
import './Gallery.css'; // Styling for the gallery
import Teacher from './images/gallery4.jpg'

const Gallery = () => {
  const images = [
    { src: './images/gallery4.jpg', label: 'Beach' },
    { src: './images/gallery4.jpg', label: 'Forest' },
    { src: './images/gallery4.jpg', label: 'Mountain' }
  ];

  return (
    <div className="gallery">
      {images.map((img, index) => (
        <Polaroid key={index} imageSrc={Teacher} label={img.label} />
      ))}
    </div>
  );
}

export default Gallery;
