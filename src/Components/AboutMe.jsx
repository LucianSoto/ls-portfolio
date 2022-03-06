import React from 'react'
import './AboutMe.css'
// import '/public/imgs/me.png'

function AboutMe() {
  return (
    <div className='about-container'>
      {/* <img src="/imgs/pageDivider.png" alt="" /> */}
      <p className="about-paragraph">
      &nbsp;&nbsp;&nbsp;&nbsp;Hi I'm <span >Lucian! </span>It feels wrong saying "self-taught" when I learned from several online sources and I was blessed to have a few friends give me some direction.
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;as;ldkfja;sldkfj;aksdjf;lkasdjf;lkadjjlkj.
      With intrests in learning more about animations and effects.
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;l;kj;lkj;lkj;lkjkl;j!
      </p>
      <div className="me-div">
        <img src='http://localhost:3000/static/media/me.mia.8edeaa2cc00d61827b05.jpg' className='me' alt="" />
      </div>
    </div>
  )
}

export default AboutMe