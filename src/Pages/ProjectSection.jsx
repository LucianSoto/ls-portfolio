
import { ProjectsAboutData } from './ProjectsAboutData'
import '../Components/Graph.css'
import './projectsSection.css'
import Project from './Project'

const ProjectsSection = ({displayProject, sentProject}) => {
  const project = ProjectsAboutData[sentProject]
  // const [data, setData] = useState(ProjectsData)

  return (
  <div
    className="project-cont"
    style={displayProject? {display: 'flex', flexDirection: "column"} : {display: 'none'}}
  >
    <h3 className="project-title">{project.title}</h3>

    {/* <img src={require('../assets/images/project-images/feedback-app.png')} alt="" /> THIS FUCKING WOKRS!!!!!!! :D)))*/}
    <Project
      id={project.id}
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
    <div className="link-btns">
      <a href={project.link} >Website</a>
      <br />
      <br />
      {project.repo ? <a href={project.repo}>Repository</a> : null }
    </div>
  </div> 
  )
}

export default ProjectsSection
