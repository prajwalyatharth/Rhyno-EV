import React, { useEffect, useState } from 'react';
import './FrontPage.css';
import bike2 from '../../assets/bike 2.png';

const FrontPage = () => {
  const messages = ['Style', 'Elegance', 'Minimalism', 'Comfort'];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="front-page">
      <div className="overlay-text container">
        <h1>Let's Elevate Your Ride Experience <br /> With Rhyno</h1>
        <p>– Where Superiority Meets {messages[currentIndex]}</p>
      </div>
      <img src={bike2} alt="Bike" />
    </div>
  );
};

export default FrontPage;
