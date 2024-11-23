import React from 'react';
import '../../components/css/Incubator.css';
import incubatorBanner from '../../assets/images/Incubator.jpg';

const Incubator = () => {
  return (
    <div className="incubator-container">
      <div className="banner">
        {/* Left Content */}
        <div className="banner-left">
          <h1 className="banner-title">
            <span className="primary-text">STARTUP</span>
        
            <span className="secondary-text">INCUBATOR</span>
          </h1>
          <p className="banner-subtitle">
            Empowering Innovation & Entrepreneurship
          </p>
        </div>
        
        {/* Right Content */}
        <div className="banner-right">
          <img src={incubatorBanner} alt="Startup Incubator Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Incubator;
