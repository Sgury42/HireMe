import React from 'react';
import '../css/projects.css';
// import { Link } from 'react-router-dom';


const ProjectOverview = (props) => { //id, description, tech, mockupURL, githubURL

  // const techStyle = {
  //   setTimeout(() => opacity: '0%', 2000)
  //   opacity: '50%',
  // };

  console.log(props)

  const colors = ['#6ea0a1', '#3d8181', '#257172', '#0c5758', '#0a4e4e', '#094445'];

  return (
    <div id="ProjectOverview" className='inline-flexbox'>
      <div className='column-flexbox project-left-part'>
        <div id='project-description' className='half-screen'>{props.description}</div>
        {/* <div class='link-box'> */}
          <a href={props.githubURL} target='_blank' rel='noopener noreferrer' className='github-link'>
            <img className='github-icon' src='/assets/GitHub-Mark-120px-plus.png' alt='See Github repostory'/>
            <p>VISIT GITHUB PAGE</p>
          </a>
        {/* </div> */}
      </div>
      <div className='project-right-part'>
        <div className='technos'>
          <p className='tech1' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{props.tech[0]}</p>
          <p className='tech2' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{props.tech[1]}</p>
          <p className='tech3' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{props.tech[2]}</p>
        </div>
        {props.mockups === 0 ? "image coming soon" :
        <img className='mockup' src={props.mockupURL} alt='project mockup' /> 
        }
        <div className='technos'>
          <p className='tech4' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{props.tech[3]}</p>
          <p className='tech5' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{props.tech[4]}</p>
          <p className='tech6' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{props.tech[5]}</p>
        </div>
      </div>
      
    </div>
  )
}

export default ProjectOverview;