import React, { useEffect, useState } from 'react';
import "../css/navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  })

  function changeBackground() {
    if (window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <div id='navbar' className={active ? "navbar active" : "navbar"}>
      <h1 className='h1-title header-title'><Link to='/'>Sandra McDaniels</Link></h1>
      <ul className='pages'>
        {/* <li><Link to="/hireme">Hire me!</Link></li> */}
        {/* <li><Link to="/resume">Resume</Link></li> */}
        {/* <li><Link to="/projects">Projects</Link></li> */}
      </ul>
    </div>
  )
}

export default Navbar;