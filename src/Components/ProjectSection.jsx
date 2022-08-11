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
// import ProjectTile from './ProjectTile'

const ProjectsSection = ({displayProject, sentProject}) => {
  const project = ProjectsAboutData[sentProject]
  const [data, setData] = useState(ProjectsData)

  return (
  <div 
    className="project-cont"
    style={displayProject? {display: 'flex'} : {display: 'none'}}
  >
    {/* <img src={require('../assets/images/project-images/feedback-app.png')} alt="" /> THIS FUCKING WOKRS!!!!!!! :D)))*/}
    <Project
      key={project.id}
      title={project.title}
      about={project.about}
      likes={project.likes}
      difficulties={project.difficulties}
      why={project.why}
      time={project.time}
      link={project.link}
      images={project.images}
      graph={project.graphData}
      repo={project.repo}
      tools={project.tools}
    />
  </div> 
  )
}

export default ProjectsSection
