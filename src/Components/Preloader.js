import React from 'react';
import logo from '../Assets/logo.png';
import '../Styles/Preloader.css';

function Preloader() {
  return (
    <div className="preloader">
      <img src={logo} alt="Health Plus Logo" className="preloader-logo" />
      <div className="preloader-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default Preloader;
