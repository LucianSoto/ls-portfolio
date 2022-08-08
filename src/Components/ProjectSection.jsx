import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts'
import { ProjectsGraphData } from './ProjectsGraphData'
import { ProjectsAboutData } from './ProjectsAboutData'
import Graph from './Graph'
import './Graph.css'
import './projectsSection.css'
import Project from './Project'
//images 
import MamHanoiImage from '../assets/images/project-images/mamhanoi.png'
import ProjectsData from './ProjectTilesData.js'
import ProjectTile from './ProjectTile'

const ProjectsSection = () => {
  
  const [currentProject, setCurrentProject] = useState(0)

  const project = ProjectsAboutData[currentProject]
  const [data, setData] = useState(ProjectsData)

  // const ProjectsGrid = data.map((project) => 
  //   <ProjectTile
  //       key={project.id}
  //       name={project.name}
  //       image={project.image}
  //       address={project.address}
  //       projectStyle={project.projectStyle}
  //       info={project.info}
  //   />
  // )
  return (
  <div className="project-cont">
    {/* <img src={require('../assets/images/project-images/feedback-app.png')} alt="" /> THIS FUCKING WOKRS!!!!!!! :D)))*/}

    {/* <div className="projects-grid-open">
      {ProjectsGrid}
    </div>  */}
    <Project
      key={project.id}
      title={project.title}
      about={project.about}
      likes={project.likes}
      difficulties={project.difficulties}
      dislikes={project.dislikes}
      time={project.time}
      link={project.link}
      images={project.images}
      graph={project.graphData}
    />
  </div> 
  )
}

export default ProjectsSection
