import React from 'react'
import './AboutMe.css'
import MyPic from '../assets/images/other-images/me-linkedin.jpg'

function AboutMe() {
  return (
    <>
      
      <div className='about-container'>
        <div className="about-paragraph">
        <h3 className='hi' > Hi I'm <span>Lucian!</span> 👋</h3>
        A <span className="highlight">Full Stack</span> Web Developer and recent graduate from Skillspire's Full Stack Bootcamp.
        <br/>
        <br />
        My coding journey began when a friend introduced me to FreeCodeCamp as a way to dip my toes into coding. At first I felt indifferent about it but I stuck with it, and now I can say that I truly enjoy it! 💜
        <br />
        <br />
        I really enjoyed Skillspire Bootcamp, it gave me the confidence to move forward and I found making full stack applications quite fascinating. Learning how all the pieces come together to create <span className='highlight'>APIs</span>, handle authorization and having it all work with the client side harmoniously. It gave a deep sense of satisfaction, similar to when you finish a big puzzle. Not to mention I have always had a thing for puzzles, legos, and as a young adult I basically took apart and rebuilt my entire car and helped my other gear head friends with theirs. 
        <br />
        <br />
        Currently, my work includes but is not limited to technoligies such as -<span className="highlight">ReactJS</span> and <span className='highlight'>TailwindCSS</span> for client side applicaitons. And <span className="hightlight">NodeJS</span>, <span className='highlight'>ExpressJS</span>, and <span className='highlight'>Firebase</span> for the backend. Currently working on <span className='highlight'>TypeScript</span> and on my <span className='highlight'>AWS</span> certificate. I've done several freelance gigs mostly involving front-end work for private clients i.e. Seattle Badminton Club but now I am focusing on finding employment in a team where I can flourish.
        <br />
        <br />
        In my free time, I also enjoy playing badminton and hiking!
        </div>
        <div className="me-div">
          <img src={MyPic} className='me' alt="Selfie" />
        </div>
      </div>
    </>
  )
}

export default AboutMe