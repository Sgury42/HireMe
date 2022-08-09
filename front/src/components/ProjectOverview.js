import React from 'react';
import '../css/projects.css';
// import { Link } from 'react-router-dom';


const ProjectOverview = (props) => { //id, description, techos, mockupURL, githubURL
  console.log(props.mockupURL)
  return (
    <div id="ProjectOverview" className='inline-flexbox'>
      <div id='project-description' className='half-screen'>{props.description}</div>
      {props.mockups === 0 ? "image coming soon" :
      <img className='mockup' src={props.mockupURL} alt='project mockup' /> 
      }
    </div>
  )
}

export default ProjectOverview;