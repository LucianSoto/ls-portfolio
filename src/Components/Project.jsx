import React from 'react'
import './ProjectStyles.css'

function Project({ id, name, image, string }) {

  return (
    <>
    {/* <div className="project-styles" key="id" > */}
      <a className='project-a' rel={'external'} target={"_blank"} href={string} 
      // style={{ background:`url(${image})`}} 
      >
          <img className='project-image' src={image} alt="" />
          <h4 className="project-name">{name}</h4>
      </a>
    {/* </div> */}
    </>
  )
}

export default Project