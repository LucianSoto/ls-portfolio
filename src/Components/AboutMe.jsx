import React from 'react'
import './AboutMe.css'
// import '/public/imgs/me.png'

function AboutMe() {
  return (
    <div className='about-container'>
      {/* <img src="/imgs/pageDivider.png" alt="" /> */}
      <p className="about-paragraph">
      Hi I'm <span >Lucian! </span>&nbsp; A self-taught developer - though it feels wrong to say "self-taught" when I've been blessed with guidance from a few friends and we all learn through community-driven online resources.
      <br/>
      <br />
      My coding journey began when a friend introduced me to FreeCodeCamp as a way to dip my toes into coding. At first I felt indifferent about it but I stuck with it, and now I can say that I truly enjoy it!
      <br />
      <br />
      Currently, I work with JavaScript, ReactJS and NodeJS. I've done some freelance gigs and although my main focus is in front-end work, my goal is to become a full-stack developer.
      <br />
      <br />
      In my free time, I enjoy playing badminton and making music on my laptop.
      </p>
      <div className="me-div">
        <img src='https://live.staticflickr.com/65535/51930346556_b48c6880f3_z.jpg' className='me' alt="" />
      </div>
    </div>
  )
}

export default AboutMe