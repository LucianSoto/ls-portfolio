import React from 'react'
import './AboutMe.css'
// import '/public/imgs/me.png'

function AboutMe() {
  return (
    <div className='about-container'>
      {/* <img src="/imgs/pageDivider.png" alt="" /> */}
      <p className="about-paragraph">
      &nbsp;&nbsp;&nbsp;&nbsp;Hi I'm <span >Lucian! </span>It feels wrong to say that I am "self-taught" when I learned from several online sources and I was blessed to have friends to give me some guidance.
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;I am currently working with ReactJS and have interests in learning more about animations and effects, not to mention that I have dipped my toes in NodeJS to make a few simple full-stack applications.
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;My coding journey started when someone told me about FreeCodeCamp. After a while I started seeing myself sticking with this for the long run and also realized that I would be doing front-end so I decided to keep at it and took courses on Javascript and React through sources such as Udemy and Scrimba.
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;In my free time I play badminton, and make music in my tiny home studio!
      </p>
      <div className="me-div">
        <img src='https://live.staticflickr.com/65535/51930346556_b48c6880f3_z.jpg' className='me' alt="" />
      </div>
    </div>
  )
}

export default AboutMe