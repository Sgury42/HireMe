import React, {useState} from 'react';
import { ScrollDown } from '../components/index.js';
import '../css/home.css';
import '../css/main.css';
import '../css/projects.css';
// import { Link } from 'react-router-dom';
import Projects from '../json/projects.json';
import { ProjectOverview, Timeline } from '../components/index.js';
// import oceanPicture from '../assets/images/ocean.jpeg';
import portraitPicture from '../assets/images/portrait-2.jpg';



const Home = () =>{

  //project section
  const [index, setIndex] = useState(0);

  const handleClick = (action) => {
    if (action === "back") {
      if (index === 0) {
        setIndex(Projects.length - 2);
      } else {
      setIndex(index - 1);
      }
    } else if (action === "forward") {
      if (index === Projects.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  }

  return (
    <div id="home-page">
      <div id='home-part-one'>
        <div className='void'></div>
        <div className='welcome-msg'>
          <h2 className='h2-title Hi'>Hi! <br></br>I am Sandra,</h2>
          <p className='introduction'><span className='underlined-highlight'>full stack web developper</span>, actively looking for my first job!
This website has been coded using React.js, Css, along with passion and love.</p>
        </div>
        {/* create a component for scroll down one widow size, take argument of how it should look like  */}
        {/* <ScrollDown name='learn more' value={window.innerHeight - document.getElementById('navbar').clientHeight}/> */}
        <ScrollDown name='learn more'/>
      </div>

      {/* Part two = Projects */}
      <div id='home-part-two'>
        <div id='projects' className='inline-flexbox'>
          <button className='arrow-back' onClick={(e => handleClick("back"))}>
            <span class="material-symbols-rounded">arrow_back_ios</span>
          </button>
          {Projects[index]["_comment"] ? handleClick('forward') : 
          <ProjectOverview id={Projects[index]["id"]} description={Projects[index]["description"]} tech={Projects[index]["technos"]} mockupURL={Projects[index]["mockupURL"]} githubURL={Projects[index]["githubURL"]}/>
          }
          <button className='arrow-forward' onClick={(e => handleClick("forward"))}>
            <span class="material-symbols-rounded">arrow_forward_ios</span>
          </button>
        </div>
      </div>

        {/* Part three = Timeline */}
      <div id='home-part-timeline' className='eighty-vh-div'>
        <Timeline/>
      </div>

        {/* Part four = Hire me ! */}
      <div id='home-part-hireme' className='eighty-vh-div'>
        {/* <div className='void'></div> */}
        <div className='inline-flexbox'>
          <div className='about'>
            <p>My dream job would be for a company who shares the same values about equity and sustainability. And the perfect 
            team would be made of passionate, positive and outgoing people.&nbsp;
            {/* <Link to='/resume' >my resume.</Link> */}
            </p>
            <em>I am looking forwart to meeting you soon!</em>
            <div className='contact-buttons'>
              <button className='hireme-button border-buttons'>HIRE ME!</button>
              <button className='resume-button border-buttons'>RESUME</button>
            </div>
          </div>
          <img className='portrait' src={portraitPicture} alt='portrait of me' />
        </div>
      </div>
    </div>
);
}
export default Home;