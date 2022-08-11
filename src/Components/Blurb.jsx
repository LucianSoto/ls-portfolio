import React from 'react'
import './blurb.css'
import MeImage from '../assets/images/other-images/me-vancouver.jpg'

const Blurb = () => {
  return (
    <div className='blurb'>
      <div className="blurb-p">
        <p className="blurb-p">Another freelance web developer who fell in love with React!😵⭐🌠</p>
        <p className="blurb-p">Fascinated by CSS animations and eager to learn! 😈 
        <br />
        This is a personal website to showcase some of my work and eventually some of my music. 👨‍💻🧙‍♂️</p>
      </div>
      <img className='blurb-img' src={MeImage} alt="" />
    </div>
  )
}

export default Blurb
