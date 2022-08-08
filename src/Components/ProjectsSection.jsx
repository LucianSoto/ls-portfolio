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


const ProjectsSection = () => {
  
  const [currentProject, setCurrentProject] = useState(0)

  const project = ProjectsAboutData[currentProject]

  return (
  <div className="project-cont">
    {/* <img src={require('../assets/images/project-images/feedback-app.png')} alt="" /> THIS FUCKING WOKRS!!!!!!! :D)))*/}
    <Project
      key={project.id}
      // don't really need key prop?
      title={project.title}
      about={project.about}
      likes={project.likes}
      difficulties={project.difficulties}
      dislikes={project.dislikes}
      time={project.time}
      link={project.link}
      images={project.images}
      graph={project.graphData}
      // what can i do about the graph data??
    />
  </div> 
  )
}

export default ProjectsSection
