import React from 'react';
import '../css/projects.css';
// import { Link } from 'react-router-dom';


const ProjectOverview = (props) => { //id, description, tech, mockupURL, githubURL

  // const techStyle = {
  //   setTimeout(() => opacity: '0%', 2000)
  //   opacity: '50%',
  // };

  const colors = ['#6ea0a1', '#3d8181', '#257172', '#0c5758', '#0a4e4e', '#094445'];

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="ProjectOverview" className='inline-flexbox'>
      <div className='column-flexbox project-left-part'>
        <div id='project-description' className='half-screen'>
        <div className='project-details'>
          <tt><p><b><u>Type:</u></b> {props.description.type}</p>
          <p><b><u>Team size:</u></b> {props.description.teamSize}</p>
          <p><b><u>Duration:</u></b> {props.description.duration}</p></tt>
        </div>
        <p>{props.description.descriptionPartOne}<b>{props.description.descriptionHighlight}</b>{props.description.descriptionPartTwo}</p>
        </div>
          <button className='github-link' onClick={()=>openInNewTab(props.githubURL)} >
            <img className='github-icon' src='/assets/GitHub-Mark-120px-plus.png' alt='visit github page'/>
            <p>VISIT GITHUB PAGE</p>
          </button>
      </div>
      <div className='project-right-part'>
        <div className='technos'>
          <p className='tech1' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{props.tech[0]}</p>
          <p className='tech2' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{props.tech[1]}</p>
          <p className='tech3' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{props.tech[2]}</p>
        </div>
        {props.mockups === null ? "image coming soon" :
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