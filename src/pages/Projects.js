import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import '../css/projects.css';
import Projects from '../json/projects.json';
import { ProjectGallery } from '../components/index.js';

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
        <button className='arrow-back chevron' onClick={(e => handleClick("back"))}>
          <BsChevronCompactLeft />
        </button>
        {Projects[index]["_comment"] ? handleClick('forward') : 
        <ProjectGallery id={Projects[index]["id"]} description={Projects[index]["description"]} tech={Projects[index]["technos"]} mockupURL={Projects[index]["mockupURL"]} githubURL={Projects[index]["githubURL"]} liveURL={Projects[index]["liveURL"]}/>
        }
        <button className='arrow-forward chevron' onClick={(e => handleClick("forward"))}>
          <BsChevronCompactRight />
        </button>


    </div>
);
}
export default ProjectsPage;