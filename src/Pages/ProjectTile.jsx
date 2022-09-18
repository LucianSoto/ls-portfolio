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
            <p className="name" style={display? {fontSize: 18} : {fontSize: 23}}>{name}</p>
            <div className={display ? "learn-button-left" : "learn-button"} id={id} onClick={() =>
              openProjectSection(id)}>Learn More
            </div>
          </div>
      </div>
    </>
  )
}

export default ProjectTile