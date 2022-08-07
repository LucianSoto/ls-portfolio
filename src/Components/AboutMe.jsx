import React from 'react'
import './AboutMe.css'
import MyPic from '../assets/images/other-images/me-mia.jpg'

function AboutMe() {
  return (
    <>
      <h3 className='hi' > Hi I'm Lucian! 👋</h3>
      <div className='about-container'>
        <p className="about-paragraph">
        TLDR: I'm A self-taught developer - though it feels wrong to say "self-taught" when I've had plenty of guidance from friends and we all learn through community-driven online resources.
        <br/>
        <br />
        My coding journey began when a friend introduced me to FreeCodeCamp as a way to dip my toes into coding. At first I felt indifferent about it but I stuck with it, and now I can say that I truly enjoy it! 💜
        <br />
        <br />
        Currently, I work with JavaScript, ReactJS and NodeJS. I've done some freelance gigs and although my main focus is in front-end work, my goal is to become a full-stack developer.
        <br />
        <br />
        In my free time, I enjoy playing badminton and making music on my laptop.
        </p>
        <div className="me-div">
          <img src={MyPic} className='me' alt="Selfie" />
        </div>
      </div>
    </>
  )
}

export default AboutMe