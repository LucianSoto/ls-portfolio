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


const ProjectAbout = ({ 
  id,
  title,
  about, 
  likes, 
  difficulties, 
  dislikes, 
  time, 
  link, 
  images,
  graph
}) => {

  const [windowWidth, setWindowWidth] = useState(0)
  window.addEventListener('resize', ()=> {setWindowWidth(window.screen.width)})

  const imagesForCarousel = images.map((image, i) => 
    <div key={i} className="images-cont" 
    >
      <img src={image}  alt="" height={ windowWidth > 800 ? 400 : windowWidth < 600 ? 250 : 300 }/>
    </div>
  )

  return ( 
    <div className="project 1" key={id}>
      <h3 className="project-title">{title}</h3>
      <div className='project-inner-cont'>
        <div className="project-description">
          <p className="about-project">
            <b>About:</b>{about}
          </p>
          <p className='likes'>
          <b>Likes:</b>&nbsp;{likes}  
          </p>
          <p className="difficulties">
          <b>Difficulties:</b>&nbsp;{difficulties}
          </p>
          <p className="dislikes">
          <b>Dislikes:</b>&nbsp;{dislikes}
          </p>
          <p className="time">
          <b>Time:</b>&nbsp;{time}
          </p>
          <a href={link} >Visit Project Here 🚀</a>
        </div>
        <div className="project-media-cont">
          {/* <img src={images[0]} alt="" className="project-about-img" /> */}
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
          <div className="graph-cont">
            <h3 className='graph-title'>Languages Used</h3>
            <ResponsiveContainer 
              height={windowWidth > 800 ? 350 : windowWidth < 600 ? 200 : 250}
            >
              <BarChart data={graph}>
                <XAxis dataKey="name" stroke='white' />
                <YAxis stroke='lightgray' />
                <Bar dataKey="uv" className='bar' barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectAbout





