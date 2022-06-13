import React from 'react'
import './Portfolio.css'
import ProjectsData from './ProjectsData.js'
import Project from './Project'
import { State } from 'react'

// import waitlistImage from '/public/imgs/ProjectImages/waitlist.PNG'

// import wI from '/imgs/waitlist.png'


function Portfolio() {
  const [data, setData] = React.useState(ProjectsData)
  
  const ProjectComponents = data.map((project) => 
  <Project
      key={project.id}
      name={project.name}
      image={project.image}
      string={project.address}
      projectStyle={project.projectStyle}
      info={project.info}
      // onClick={}
    // {console.log(project.name)}
  />)
  return (
    <div className='portfolio-cont'>
      <h3 className='portfolio-title'>Projects</h3>
      <div className="projects-grid">
        {ProjectComponents}
      </div>      
    </div>
  )
}

export default Portfolio