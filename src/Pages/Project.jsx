import { useState, useEffect, useRef } from 'react'
import { Carousel } from 'react-responsive-carousel'
import Slider from 'react-slick'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './projectsSection.css'
import "../Components/Graph.css"
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

  const mounted = useRef(true)

  useEffect(()=> {
    if(mounted.current) {
      // imagesForCarousel()
      mounted.current = false
    }
  },[])

  const imagesForCarousel = images.map((image, i) => 
    <div key={i}  className='images-cont' >
      <img className='imageWindow' src={image}  alt=""/>
    </div>
  )

  const toolsUsed = tools.map((tool, i) =>  
    <p key={i} >✔ &nbsp;{tool}</p>
  )

  return ( 
      <div className='project-inner-cont' >
        <div className="project-description">
          <p className="about-project">
            <b>About:</b>&nbsp;{about}
          </p>
          <p className="about-why">
            <b>Why:</b>&nbsp;{why}
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
        </div>
        <div className="project-media-cont">
          <div className="graph-cont">
            <h3 className='graph-title'>Tools Used</h3>
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
  )
}

export default Project





