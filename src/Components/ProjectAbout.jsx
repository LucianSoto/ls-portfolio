import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carouse.min.css"
// general styles
// import 'style!css!react-responsive-carousel/lib/styles/main.css';

// carousel styles
// import 'style!css!react-responsive-carousel/lib/styles/carousel.css';

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
  title,
  about, 
  likes, 
  difficulties, 
  dislike, 
  time, 
  link, 
  images,
  graph
}) => {

  const [windowWidth, setWindowWidth] = useState(0)
  window.addEventListener('resize', ()=> {setWindowWidth(window.screen.width)})
  
  console.log(images.length)

  const imageCarousel = images.map((image, index) => 
    <div>
      <img src={image[index]} alt="" />
    </div>
  )

  return (
    <>
      <div className="project 1">
        <h3 className="project-title">{title}</h3>
          <div className='project-inner-cont'>
            <div className="project-description">
              <p className="about-project">
                <b>About:</b>{about}
              </p>
              <p className='likes'>
              <b>Likes:</b>{likes}  
              </p>
              <p className="difficulties">
              <b>Difficulties:</b>{difficulties}
              </p>
              <p className="dislikes">
              <b>Dislikes:</b>{dislike}
              </p>
              <p className="time">
              <b>Time:</b>{time}
              </p>
              <a href={link} >Visit Project Here</a>
            </div>
            <div className="project-media-cont">
              {/* <img src={images[0]} alt="" className="project-about-img" /> */}
              <Carousel>
                <div>
                  <img src={images[0]} alt="" />
                </div>
                <div>
                  <img src={images[1]} alt="" />
                </div>
                <div>
                  <img src={images[2]} alt="" />
                </div>
              </Carousel>
              <div className="graph-cont">
                <h3 className='graph-title'>Languages Used</h3>
                <ResponsiveContainer 
                  height={windowWidth > 800 ? 400 : windowWidth < 600 ? 250 : 300}>
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
    </>
  )
}

export default ProjectAbout





