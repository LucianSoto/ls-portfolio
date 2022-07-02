import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts'
import { ProjectsGraphData } from './ProjectsGraphData'
import { ProjectsAboutData } from './ProjectsAboutData'
import Graph from './Graph'
import './Graph.css'
import './projectsSection.css'
import ProjectAbout from './ProjectAbout'
//images 
import MamHanoiImage from '../assets/images/project-images/mamhanoi.png'


const ProjectsSection = () => { 

const Projects = ProjectsAboutData.map((project) => 
  <ProjectAbout
    key={project.title}
    title={project.title}
    about={project.about}
    likes={project.likes}
    difficulties={project.difficulties}
    dislike={project.dislike}
    time={project.time}
    link={project.link}
    images={project.images}
    graph={project.graphData}
    // what can i do about the graph data??
  />
)

  return (
  <div className="projects-cont">
    {Projects}
    {/* <img src={require('../assets/images/project-images/feedback-app.png')} alt="" /> THIS FUCKING WOKRS!!!!!!! :D)))*/}

  </div> 
  )
}

export default ProjectsSection
