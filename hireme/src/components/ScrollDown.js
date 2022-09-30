import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';


const ScrollDown = (props) => {

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
      <button className='button-link' onClick={() => handleClick()}>{props.name}</button>
  )
}

export default ScrollDown;