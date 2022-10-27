import React from 'react';
import '../css/home.css';
import '../css/main.css';
import Projects from '../json/projects.json';
import { Timeline, ScrollDown, VerticalNavbar, ProjectsScrollThrough } from '../components/index.js';
import portraitPicture from '../assets/images/portrait-2.webp';
import resume from '../assets/SandraMcDanielsResume.pdf';



const Home = () =>{

  return (
    <div id="home-page">
      <div id='home-part-one'>
        <div className='void'></div>
        <div className='welcome-msg'>
          <h2 className='h2-title'><p className="hi">Hi!</p><p className="my-name-is">I am Sandra,</p></h2>
          <p className='introduction'><span className='underlined-highlight'>junior web developper</span>, actively looking for a company to devote my coding skills to.
This website has been coded using React.js, Css, HTML, node, along with passion and love. Take a scroll and discover more projects I had the opportunity to work on.</p>
        </div>
        <ScrollDown/>
      </div>
      {/* Part two = Projects */}
        <VerticalNavbar />
        <div id='home-part-projects'>
          <ProjectsScrollThrough datas={Projects} />
        </div>
          {/* Part three = Timeline */}
        <div id='home-part-timeline' className='eighty-vh-div'>
          <Timeline/>
        </div>
          {/* Part four = Hire me ! */}
        <div id='home-part-hireme' className='full-height-div'>
          <div className='inline-flexbox'>
            <div className='about'>
              <p>My dream job would be for a company who shares the same values about equity and sustainability. And the perfect 
              team would be made of passionate, positive and outgoing people.&nbsp;
              </p>
              <em>I am looking forwart to meeting you soon!</em>
              <div className='contact-buttons'>
                <a className='hireme-button border-buttons' href={`mailto:${'sandra.mcdnls@gmail.com'}?subject=${encodeURIComponent('We would like to hire you!') || ''}`}>HIRE ME!</a>
                <a className='resume-button border-buttons' href={resume} target="_blank" rel="noreferrer">RESUME</a>
              </div>
            </div>
            <img className='portrait' src={portraitPicture} alt='portrait of me' />
          </div>
        </div>
      </div>

);
}
export default Home;