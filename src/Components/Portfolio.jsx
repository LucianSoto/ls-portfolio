import React from 'react'
import './Portfolio.css'
import ProjectsData from './ProjectTilesData.js'
import ProjectTile from './ProjectTile'
import ProjectsSection from './ProjectsSection'
import { useState, useEffect } from 'react'
import Email from './Email'
// import waitlistImage from '/public/imgs/ProjectImages/waitlist.PNG'
// import wI from '/imgs/waitlist.png'


function Portfolio() {

  const [data, setData] = useState(ProjectsData)
  const ProjectComponents = data.map((project) => 
    <ProjectTile
        key={project.id}
        name={project.name}
        image={project.image}
        address={project.address}
        projectStyle={project.projectStyle}
        info={project.info}
    />
  )
  return (
    <div className='portfolio-cont'>
      <h3 className='portfolio-title'>Portfolio</h3>
      <p className="under-construction">Under Construction</p>
      <div className="projects-grid">
        {ProjectComponents}
      </div>   
      <ProjectsSection/>
      <h3 className='footer-h3'>Let's work together!</h3>
      <Email/>
    </div>
  )
}

export default Portfolio