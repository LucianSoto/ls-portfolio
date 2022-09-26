import React from 'react'
import './ProjectTileStyles.css'

function ProjectTile({ projectKey, id, name, image, info, link, changeCurrentProject, display }) {

  const openProjectSection = (id) => {
    changeCurrentProject(id)
  }

  return (
    <>
      <div 
        className='project-tile-cont' 
        key={projectKey} 
        onClick={() => openProjectSection(id)} 
      >
          <img className={ display ? 'project-image-side' : 'project-image'} src={image} alt="" />
          <div className={ display ? "project-overlay-side" : "project-overlay" }>
            <p 
              id="tile-name" 
              style={display? {fontSize: 18} : {fontSize: 23}}
              onClick={() => openProjectSection(id)}
            >
              {name}
            </p>
          </div>
      </div>
    </>
  )
}

export default ProjectTile