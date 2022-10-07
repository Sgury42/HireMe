import React from 'react';
import '../css/projects.css';
import { BsGithub } from 'react-icons/bs'

const ProjectsScrollThrough = (props) => {

  const colors = ['#6ea0a1', '#3d8181', '#257172', '#0c5758', '#0a4e4e', '#094445'];

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // console.log(props.datas[0].tech[0]);

  return (
    <div>
      {props.datas.map((project, index) => (
        project.id !== "comment" ?
        <div id="projects-scroll-through" className='inline-flexbox' key={project.id} style={index % 2 === 0 ? null : {flexDirection: "row-reverse"}}>
          <div className='column-flexbox project-left-part'>
            <div id='project-description' className='half-screen'>
            <div className='project-details'>
              <tt><p><b><u>Type:</u></b> {project.description.type}</p>
              <p><b><u>Team size:</u></b> {project.description.teamSize}</p>
              <p><b><u>Duration:</u></b> {project.description.duration}</p></tt>
            </div>
            <p>{project.description.descriptionPartOne}<b>{project.description.descriptionHighlight}</b>{project.description.descriptionPartTwo}</p>
            </div>
            <div className='buttons'>
              <button className='project-link' onClick={()=>openInNewTab(project.githubURL)} >
                <BsGithub className='github-icon'/>
                <p>VISIT GITHUB PAGE</p>
              </button>
              {project.liveURL ? 
              <button className="project-link" onClick={()=>openInNewTab(project.liveURL)}>
                <p>VISIT LIVE SITE</p>
              </button> : null}
            </div>
          </div>
          <div className='project-right-part'>
            <div className='technos'>
              <p className='tech1' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{project.technos[0]}</p>
              <p className='tech2' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{project.technos[1]}</p>
              <p className='tech3' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{project.technos[2]}</p>
            </div>
            {project.mockupURL === null ? "image coming soon" :
            <img className='mockup' src={project.mockupURL} alt='project mockup' /> 
            }
            <div className='technos'>
              <p className='tech4' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{project.technos[3]}</p>
              <p className='tech5' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{project.technos[4]}</p>
              <p className='tech6' style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}}>{project.technos[5]}</p>
            </div>
          </div>
        </div> : null
      ))}
    </div>
  )
}

export default ProjectsScrollThrough;