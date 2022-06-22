import React from 'react'
import './Portfolio.css'
import ProjectsData from './ProjectsData.js'
import Project from './Project'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import waitlistImage from '/public/imgs/ProjectImages/waitlist.PNG'
// import wI from '/imgs/waitlist.png'


function Portfolio() {
  // const notificationString = ;
  useEffect(() => {
    setTimeout(()=> notify(), 3000)
  }, [])

  const [data, setData] = useState(ProjectsData)
  const notify = () => toast("Hover and click on project descriptions to learn more or click on the titles to go to site")

  const ProjectComponents = data.map((project) => 
  <Project
      key={project.id}
      name={project.name}
      image={project.image}
      address={project.address}
      projectStyle={project.projectStyle}
      info={project.info}
      // onClick={}
    // {console.log(project.name)}
  />)
  return (
    <div className='portfolio-cont'>
      <h3 className='portfolio-title'>Projects</h3>
      <p className="under-construction">Under Construction</p>
      
      <div className="projects-grid">
        {ProjectComponents}
      </div>  
      <ToastContainer theme="dark" />    
    </div>
  )
}

export default Portfolio