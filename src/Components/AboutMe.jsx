import React from 'react'
import './AboutMe.css'
// import '/public/imgs/me.png'

function AboutMe() {
  return (
    <div className='about-container'>
      {/* <img src="/imgs/pageDivider.png" alt="" /> */}
      <p className="about-paragraph">
      Hi I'm <span >Lucian! </span>Hi, I'm Lucian! I'm a self-taught developer — though it feels wrong to say "self-taught" when I was blessed to receive guidance from a few friends and learned through community-driven online resources.
      <br/>
      <br />
      My coding journey began when I expressed interest in being a developer to a close friend, who then introduced me to FreeCodeCamp as a way to dip my toes in coding. After continuing the coursework for a while, I started seeing myself really sticking with this for the long run. I also realized during the course that I wanted to do front-end web development; since this was my focus, I took courses on JavaScript and React through other resources like Udemy and Scrimba.
      <br />
      <br />
      Currently, I'm continuing to expand on my skills and knowledge of React. I've also branched out to get experience in other facets of web development: I've gained an interest in learning more about animations and effects in the front-end and have even played around with NodeJS to make a few simple full stack applications.
      <br />
      <br />
      In my free time, I enjoy playing badminton and making music in my tiny home studio!
      </p>
      <div className="me-div">
        <img src='https://live.staticflickr.com/65535/51930346556_b48c6880f3_z.jpg' className='me' alt="" />
      </div>
    </div>
  )
}

export default AboutMe