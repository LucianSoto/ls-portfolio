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

  console.log(images)

  const [windowWidth, setWindowWidth] = useState(0)
  window.addEventListener('resize', ()=> {setWindowWidth(window.screen.width)})

  const imagesForCarousel = images.map((image, i) => 
    <div key={i}  className='images-cont' >
      <img className='imageWindow' src={image}  alt=""/>
    </div>
  )

  const toolsUsed = tools.map((tool, i) =>  
    <p key={i} >✔ &nbsp;{tool}</p>
  )
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return ( 
    // <div className="project" > 
      <div className='project-inner-cont' >
        <div className="project-description">
          <h3 className="project-title">{title}</h3>
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
          <a href={link} >Website</a>
          <br />
          <br />
          {repo ? <a href={repo}>Repository</a> : null }
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
          {/* <Slider {...settings} >
           {imagesForCarousel}
          </Slider> */}
        </div>
      </div>
    // </div>
  )
}

export default Project





