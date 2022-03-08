import React from 'react'
import './AboutMe.css'
// import '/public/imgs/me.png'

function AboutMe() {
  return (
    <div className='about-container'>
      {/* <img src="/imgs/pageDivider.png" alt="" /> */}
      <p className="about-paragraph">
      &nbsp;&nbsp;&nbsp;&nbsp;Hi I'm <span >Lucian! </span>It feels wrong saying "self-taught" when I learned from several online sources and I was blessed to have a few friends give me some guidance.
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;I am currently still working on my React  
      With intrests in learning more about animations and effects, not to mention that I have dipped my toes in NodeJS to make a few simple fullstack applicaitons.
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;My coding journey started when someone told me about FreeCodeCamp. After a while I started seeing myself sticking with this for the long run and also realized that I would be doing front-end so I decied to keep at it and took courses on Javascript and React thorugh sources such as Udemy and Scrimba.
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;On my free time I play badminton, and make music on my laptop!
      </p>
      <div className="me-div">
        <img src='http://localhost:3000/static/media/me.mia.8edeaa2cc00d61827b05.jpg' className='me' alt="" />
      </div>
    </div>
  )
}

export default AboutMe