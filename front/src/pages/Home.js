import React from 'react';
import { ScrollDown } from '../components/index.js';
import '../css/home.css';
import '../css/main.css';
import { Link } from 'react-router-dom';
import oceanPicture from '../assets/images/ocean.jpeg';
import portraitPicture from '../assets/images/portrait-2.jpg';

const Home = () =>{

  return (
    <div id="home-page">
      <div id='home-part-one'>
        <div className='void'></div>
        <div className='welcome-msg'>
          <h2 className='h2-title'>WELCOME to my online portfolio</h2>
          <p className='introduction'>I am Sandra, <span className='underlined-highlight'>full stack web developper</span>, actively looking for my first job!
This website has been coded using React.js, Express.js, Css, MongoDb along with passion and love. 
Scroll down to discover all the cool features! </p>
        </div>
        {/* create a component for scroll down one widow size, take argument of how it should look like  */}
        {/* <ScrollDown name='learn more' value={window.innerHeight - document.getElementById('navbar').clientHeight}/> */}
        <ScrollDown name='learn more'/>
      </div>
      {/* Part two = Green ingredient checker*/}
      <div id='home-part-two'>
        <div id='light-blue-gradient'></div>
        <div className='inline-flexbox'>
          <div className='text-ov-img-cont'>
            <img className='rounded-image' src={oceanPicture} alt='Ocean waves'/>
            <p className='centered-text h1-title'>GREEN?</p>
          </div>
          <div id='green-description'>
            <p>Because I am passionate about ecology, reducing foot print by lowering the amount of waste and protecting our water systems, 
            I created my own
            <em> ingredient checker </em>
            with a unique system of notation. </p>
          </div>
        </div>
          <Link to="/green">Try it now!</Link>
        </div>
        {/* Part three = Hire me ! */}
        <div id='home-part-three' className='eighty-vh-div'>
          <div className='void'></div>
          <div className='inline-flexbox'>
            <div className='about'>
              <p>My dream job would be for a company who share the same values about equity and sustainability. And the perfect 
              team would be made of passionate, positive and outgoing people. I am actively looking for my first job, to learn more about my 
              education and past experiences visit&nbsp;
              <Link to='/hireme' >my resume.</Link></p>
              <em>I am looking forwart to meeting you soon!</em>
            </div>
            <img className='portrait' src={portraitPicture} alt='portrait of me' />
          </div>
        </div>
    </div>
);
}
export default Home;