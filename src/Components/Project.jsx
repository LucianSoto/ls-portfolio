import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './projectsSection.css'

import { 
  BarChart, 
  Bar, XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Legend, 
  ResponsiveContainer 
} from 'recharts'
import './Graph.css'
import './projectsSection.css'


const Project = ({ 
  id,
  title,
  about, 
  likes, 
  difficulties, 
  dislikes, 
  time, 
  link, 
  images,
  graph,
  repo,
  why,
  tools
}) => {

  const [windowWidth, setWindowWidth] = useState(0)
  window.addEventListener('resize', ()=> {setWindowWidth(window.screen.width)})

  const imagesForCarousel = images.map((image, i) => 
    <div key={i} className="images-cont" 
    >
      <img className='imageWindow' src={image}  alt="" height={ windowWidth > 800 ? 400 : windowWidth < 600 ? 250 : 300 }/>
    </div>
  )

  const toolsUsed = tools.map((tool, i) => 
    <p key={i}>✔ &nbsp;{tool}</p>
  )

  // const techUsedIcons 

  return ( 
    // <div className="project" > 
      <div className='project-inner-cont' key={id}>
        <div className="project-description">
          <h3 className="project-title">{title}</h3>
          <p className="about-project">
          <b>About:</b>&nbsp;{about}
          </p>
          <p className='likes'>
          <b>Likes:</b>&nbsp;{likes}  
          </p>
          <p className="difficulties">
          <b>Difficulties:</b>&nbsp;{difficulties}
          </p>
          <p className="time" style={{ paddingBottom: 20 }}>
          <b>Time:</b>&nbsp;{time}
          </p>
          <a href={link} >Website</a>
          <br />
          <br />
          {repo ? <a href={repo}>Repository</a> : null }
        </div>
        <div className="project-media-cont">
          <div className="graph-cont">
            <h3 className='graph-title'>Tools Used</h3>
            {/* <ResponsiveContainer 
              height={windowWidth > 800 ? 350 : windowWidth < 600 ? 200 : 250}
            >
              <BarChart data={graph} className="responsive-container">
                <XAxis dataKey="name" stroke='white' />
                <YAxis stroke='lightgray' />
                <Bar dataKey="uv" className='bar' barSize={50} />
              </BarChart>
            </ResponsiveContainer> */}
            <div className='tools'>
              {toolsUsed}
            </div>
          </div>
          <Carousel 
            className='carousel' 
            infiniteLoop 
            autoPlay 
            showThumbs={false}
            interval={3000}
            centerSlidePercentage={80} 
            transitionTime={1000}
            
          >
            {imagesForCarousel}
          </Carousel>
          
        </div>
      </div>
    // </div>
  )
}

export default Project





