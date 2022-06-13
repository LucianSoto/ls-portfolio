import React from 'react'
import './ProjectStyles.css'
// import { useNavigate } from 'react-router-dom'

function Project({ id, name, image, address, info }) {
  return (
    <>
      <div className='project-cont' >
          <img className='project-image' src={image} alt="" />
          <div className="overlay">
            <p className="project-overlay-info"></p>
          </div>
          <h4 className="project-name" onClick={()=> window.open(`${address}`, '_blank') }><span>{name}</span></h4>
      </div>
    </>
  )
}

export default Project