import React from 'react'
import './ProjectTileStyles.css'
import { Link, useNavigate } from 'react-router-dom'

function Project({ key, id, name, image, info, link, changeCurrentProject, display }) {

  const openProjectSection = (id) => {
    changeCurrentProject(id)
  }

  return (
    <>
      <div className='project-tile-cont' key={key} >
          <img className={ display ? 'project-image-side' : 'project-image'} src={image} alt="" />
          <div className="project-overlay">
            <p className="project-overlay-info" >{info}</p>
            {/* {id && ( */}
              <div className="learn-button" id={id} onClick={() =>
                openProjectSection(id)}>Learn More
              </div>
            {/*  )} */}
          </div>
          {/* <h4 className="project-name" onClick={()=> window.open(`${address}`, '_blank') }>{name}</h4> */}
      </div>
    </>
  )
}

export default Project