import React from 'react';
import '../css/footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div id='footer'>
      <ul>
        {/* <li><Link to="/green">Green?</Link></li> */}
        <li><Link to="/hireme">Hire me!</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        {/* <li><Link to="/resources">Resources</Link></li> */}
        {/* <li><Link>Blog</Link></li> */}
      </ul>
      <h1 className='h1-title footer-title'>Sandra McDaniels</h1>
    </div>
  )
}

export default Footer;