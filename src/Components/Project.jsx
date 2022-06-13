import React from 'react'
import './ProjectStyles.css'

function Project({ id, name, image, string, info }) {

  return (
    <>
      <a className='project-a' rel={'external'} target={"_blank"} href={string} 
      // style={{ background:`url(${image})`}} 
      >
          <img className='project-image' src={image} alt="" />
          <div className="overlay">
            <p className="project-overlay-info"></p>
          </div>
          <h4 className="project-name">{name}</h4>
      </a>
    </>
  )
}

export default Project