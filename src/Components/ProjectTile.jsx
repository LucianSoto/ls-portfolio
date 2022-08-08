import React from 'react'
import './ProjectTileStyles.css'
import { Link } from 'react-router-dom'

function Project({ id, name, image, address, info, link }) {
  const openProject = () => {

  }

 

  return (
    <>
      <div className='project-tile-cont' >
          <img className='project-image' src={image} alt="" />
          <div className="project-overlay">
            <p className="project-overlay-info" >{info}</p>
            <div className="learn-button" onClick={() => openProject()}>Learn More</div>
          </div>
          {/* <h4 className="project-name" onClick={()=> window.open(`${address}`, '_blank') }>{name}</h4> */}
          
      </div>
    </>
  )
}

export default Project