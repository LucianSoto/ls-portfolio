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
        Last year I decided to see how some education would benefit me and after graduating from Skillspire Bootcamp I can say it was beneficial gave me the confidence to move forward and I found making full stack applications quite fascinating. Learning how all the pieces come together to create <span className='highlight'>APIs</span>, handle authorization and having it all work with the client side harmoniously. It gave a deep sense of satisfaction, very similar to when I used to work on my cars. Because there are so many components and things that come together in order to make the whole thing work. In addition, I was always googling and reading forums for information but all in all it boiled down to a passion for <span className="highlight">Problem Solving</span> and diving deep into subjects that are of importance to me.
        <br />
        <br />
        Currently, my work includes but is not limited to technoligies such as <span className="highlight">ReactJS</span> and <span className='highlight'>TailwindCSS</span> for client side applicaitons. And <span className="hightlight">NodeJS</span>, <span className='highlight'>ExpressJS</span>, and <span className='highlight'>Firebase</span> for the backend. Currently working on <span className='highlight'>TypeScript</span> and on my <span className='highlight'>AWS</span> certificate. I've done several freelance gigs mostly involving front-end work for private clients i.e. Seattle Badminton Club but now I am focusing on finding employment in a team where I can flourish.
        <br />
        <br />
        In my free time, I also play badminton, and go hiking!
        </div>
        <div className="me-div">
          <img src={MyPic} className='me' alt="Selfie" />
        </div>
      </div>
    </>
  )
}

export default AboutMe