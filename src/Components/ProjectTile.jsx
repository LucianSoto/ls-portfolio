import React from 'react'
import './ProjectStyles.css'
import { Link } from 'react-router-dom'

function Project({ id, name, image, address, info }) {
  return (
    <>
      <div className='project-cont' >
          <img className='project-image' src={image} alt="" />
          <div className="project-overlay">
            <p className="project-overlay-info" 
              // make a LINK!!!!
            >{info}</p>
            {/* <Link rel="stylesheet" href="" />Go To Project<Link/> */}
          </div>
          <h4 className="project-name" onClick={()=> window.open(`${address}`, '_blank') }>{name}</h4>
      </div>
    </>
  )
}

export default Project