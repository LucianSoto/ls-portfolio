import React from 'react'
import './blurb.css'
import MeImage from '../assets/images/other-images/me-vancouver.jpg'

const Blurb = () => {
  return (
    <div className='blurb'>
      <div className="blurb-p">
        <p className="blurb-p">Another freelance web developer who fell in love with React, JavaScript and fascinated by CSS animations. 😵⭐🌠</p>
        <p className="blurb-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus necessitatibus accusantium atque nesciunt obcaecati qui ducimus consequuntur eaque pariatur commodi?👨‍💻🧙‍♂️</p>
      </div>
      <img src={MeImage} alt="" />
    </div>
  )
}

export default Blurb
