import React from 'react'
import './ProjectTileStyles.css'

function ProjectTile({ projectKey, id, name, image, info, link, changeCurrentProject, display }) {

  const openProjectSection = (id) => {
    changeCurrentProject(id)
  }

  return (
    <>
      <div className='project-tile-cont' key={projectKey} >
          <img className={ display ? 'project-image-side' : 'project-image'} src={image} alt="" />
          <div className={ display ? "project-overlay-side" : "project-overlay" }>
            { display? name : <p className="project-overlay-info" >{info}</p> }
            <div className="learn-button" id={id} onClick={() =>
              openProjectSection(id)}>Learn More
            </div>
          </div>
      </div>
    </>
  )
}

export default ProjectTile