import './Welcome.css'
import { useState } from 'react'
import AboutMe from './AboutMe'

function Welcome() {

  return (
    <div className="welcome-section">
      <div className="stars" id="stars" ></div>
      <div className="twinkling"></div>
      <div className="name-wrapper">
        <h1>LUCIAN BROOKS</h1>
      </div>
      <h3 className='welcome-h3'>A Web Developer</h3>
      

    </div>
  )
}

export default Welcome