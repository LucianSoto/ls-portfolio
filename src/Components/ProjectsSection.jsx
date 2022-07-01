import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts'
import  { ProjectsGraphData } from './ProjectsGraphData'
import Graph from './Graph'

import './Graph.css'
import './projectsSection.css'

//images 
import MamHanoi from '../assets/images/project-images/mamhanoi.png'

const ProjectsSection = () => {
  
const [windowWidth, setWindowWidth] = useState(0)

window.addEventListener('resize', ()=> {setWindowWidth(window.screen.width)}) 
console.log(windowWidth)

  return (
  <div className="projects-cont">
    <h3 className="project-title">Mam Hanoi</h3>
    <div className="project 1">
      <div className="project-description">
        <p className="about-project">
          <b>About:</b> &nbsp; This was my very first deployed project.  This project was for a restaurant that just opened so I knew they still had to work on the menu and I knew there were going to be several other bumps along the way for them so I knew I had to be patient.  Originally with the first version i was going to build and structure the menu myself, with the abitlity to click on food item images and have JavaScript open modal with a larger image to give customers a better look at the dishes they were interested in.  They liked it but in the end they went with a PDF style menu because it would be easier for them to main. 
        </p>
        <p className='likes'>
         <b>Likes:</b> &nbsp; Well I as pretty stoked, it being my very first gig and all, I enjoyed the pressure of having to deliver. It suddenly felt different, when it actually became work and I had to put my skills to the test. 
        </p>
        <p className="difficulties">
        <b>Difficulties:</b> &nbsp; The hardest part of the job was deployment. Figuring out how it all went together, what everything did (DNS, SSL), and troubleshooting/debugging when things weren't working how I inteded them to even though they worked on my computer.
        </p>
        <p className="dislikes">
        <b>Dislikes:</b>  &nbsp; What I didn't enjoy was that it took the client far too long to finalize a menu, leaving me in limbo for over a month. But it was a great lesson learned because from then on I try to keep clients on schedule. 
        </p>
        <p className="time">
        <b>Time:</b> &nbsp;  It honeslty took about 15 hours to get to the finish line (Not including the wait time in between). Building it was not too difficult albeit I was still not that agile with CSS I admit. It was the fact that it was my first time having to deploy, but it was great because I learned a lot along the way about how the internet works and how it all comes together.
        </p>
        <a href="https://www.mamhanoi.com/">Visit Project Here</a>
      </div>
      <div className="project-media-cont">
        <img src={MamHanoi} alt="" className="project-about-img" />
        <div className="graph-cont">
          <h3 className='graph-title'>Languages Used</h3>
          <ResponsiveContainer 
            width="100%" 
            height={windowWidth > 800 ? 400 : windowWidth < 600 ? 250 : 300}>
            <BarChart data={ProjectsGraphData[0]}>
              <XAxis dataKey="name" stroke='white' />
              <YAxis stroke='lightgray' />
              <Bar dataKey="uv" className='bar' barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>

    {/* <Graph /> */}

    <div className="project 2">

    </div>
    <div className="project 3">

    </div>
    <div className="project 4">

    </div>
  </div> 
  )
}

export default ProjectsSection
