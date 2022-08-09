import React, { useState } from 'react';
import '../css/projects.css';
import Projects from '../json/projects.json';
// import mockup from '../assets/images/mockups/MatchaMockup.png';
import { ProjectOverview } from '../components/index.js';

const ProjectsPage = () =>{

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
    <div id='projects' className='inline-flexbox'>
        <button className='arrow-back' onClick={(e => handleClick("back"))}>
          <span class="material-symbols-rounded">arrow_back_ios</span>
        </button>
        {Projects[index]["_comment"] ? handleClick('forward') : 
        <ProjectOverview id={Projects[index]["id"]} description={Projects[index]["description"]} mockupURL={Projects[index]["mockupURL"]}/>
        }
        <button className='arrow-forward' onClick={(e => handleClick("forward"))}>
          <span class="material-symbols-rounded">arrow_forward_ios</span>
        </button>


    </div>
);
}
export default ProjectsPage;