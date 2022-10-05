import React from 'react';
import '../css/verticalNavbar.css';

const VerticalNavbar = () => {

  const handleClick = (index) => {
    document.getElementById(index).scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div id="vertical-navbar">
      <div className="bar">
        <div className="bar-items">
          <div className="bar-item">
            <div className="bar-circle" onClick={() => handleClick("home-part-projects")}></div>
            <div className="bar-content">Projects</div>
          </div>
          <div className="bar-item">
            <div className="bar-circle" onClick={() => handleClick("home-part-timeline")}></div>
            <div className="bar-content">Experience</div>
          </div>
          <div className="bar-item">
            <div className="bar-circle" onClick={() => handleClick("home-part-hireme")}></div>
            <div className="bar-content">Hire me!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerticalNavbar;