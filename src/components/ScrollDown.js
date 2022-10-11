import React, { useEffect, useState } from 'react';
import { BsChevronCompactDown } from "react-icons/bs";


const ScrollDown = () => {

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', changeWindowHeight);
  }, []);

  function changeWindowHeight () {
    if (window.innerHeight < document.getElementById('home-part-one').clientHeight) {
      setWindowHeight(document.getElementById('home-part-one').clientHeight);
    } else {
      setWindowHeight(window.innerHeight);
    }
  }

  const handleClick = () => {
    window.scrollTo({
      top: windowHeight - document.getElementById('navbar').clientHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
  
  return (
      <button className='button-link' onClick={() => handleClick()}>
        <BsChevronCompactDown className='chevron-down'/>
      </button>
  )
}

export default ScrollDown;