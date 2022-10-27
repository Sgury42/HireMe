import React from 'react';
import '../css/footer.css';
import { FaGithubSquare, FaLinkedin} from 'react-icons/fa';
// import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div id='footer'>
      <ul>
        {/* <li><Link to="/hireme">Hire me!</Link></li> */}
        {/* <li><Link to="/resume">Resume</Link></li> */}
        {/* <li><Link to="/projects">Projects</Link></li> */}
      </ul>
      <h1 className='h1-title footer-title'>Sandra McDaniels</h1>
      <div id="social-links">
        <a href="https://www.linkedin.com/in/sandra-mcdaniels-083635146/" target="_blank" rel="noreferrer">
          <FaLinkedin className='social-icon' />
        </a>
        <a href="https://github.com/Sgury42" target="_blank" rel="noreferrer">
          <FaGithubSquare className='social-icon' />
        </a>
      </div>
    </div>
  )
}

export default Footer;