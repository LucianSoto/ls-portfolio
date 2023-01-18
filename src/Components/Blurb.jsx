import React from 'react'
import './blurb.css'
import MeImage from '../assets/images/other-images/me-arms-down.jpg'

const Blurb = () => {
  return (
    <div className='blurb'>
      <p className="blurb-p">
        Full Stack Web Developer based in Seattle. In love with React, fascinated by CSS animations and eager to learn! Recent graduate from Skillspire Full Stack Bootcamp.
        <br /><br />
        This is a personal website to showcase some of my work. 👨‍💻
      </p>
      <img className='blurb-img' src={MeImage} alt="" />
    </div>
  )
}

export default Blurb

