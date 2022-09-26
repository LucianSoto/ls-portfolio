import React from 'react'
import './Portfolio.css'
import ProjectsData from './ProjectTilesData.js'
import ProjectTile from './ProjectTile'
import ProjectSection from './ProjectSection'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Carousel } from 'react-responsive-carousel'
// import waitlistImage from '/public/imgs/ProjectImages/waitlist.PNG'
// import wI from '/imgs/waitlist.png'

function Portfolio() {

  const [data, setData] = useState(ProjectsData)
  const [currentProject, setCurrentProject] = useState(0)
  const [grid, setGrid] = useState(true)
  const [display, setDisplay] = useState(false)

  const changeCurrentProject = (num) => {
    if(grid){
      setGrid(false)
    }
    setCurrentProject(num)
    setDisplay(true)
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };
  
  // console.log(grid, display)

  const sliderPics = data.map((p) => 
    <div 
    // onClick={changeCurrentProject(p.id)} 
    >
      <img src={p.image} alt="" />
    </div>
  )

  const ProjectsGrid = data.map((project) => 
    <ProjectTile
        changeCurrentProject={changeCurrentProject}
        key={project.id}
        id={project.id}
        name={project.name}
        image={project.image}
        info={project.info}
        display={display}
    />
  )
  return (
    <div className='portfolio-cont'>
      <h3 className='portfolio-title'>    Featured Projects</h3>
        <p className="under-construction">Currently Under Construction 🐱‍💻</p>
      <div className='projects-cont'>
        
      <Carousel
      className='projects-carousel'
      >
        {sliderPics}
      </Carousel>
      {/* <Slider {...settings}>
        {sliderPics}
        <div>
          <img src="" alt="" />
        </div>
      </Slider>
      <h1>hi</h1> */}

        {/* <div className={ grid ? 
          "projects-grid-lg" : "projects-grid-small"}
        >
          {ProjectsGrid}
        </div>    */}
        <ProjectSection 
          displayProject={display} 
          sentProject={currentProject}
        />
      </div>
      <p className='thanks'>Thanks for browsing, for any questions feel free to reach out <span><Link to="/email"> here</Link></span></p>
    </div>
  )
}

export default Portfolio