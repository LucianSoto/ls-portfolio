import React, { useEffect, useState } from 'react'
import './Portfolio.css'
import ProjectsData from './ProjectTilesData.js'
import ProjectTile from './ProjectTile'
import ProjectSection from './ProjectSection'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Carousel } from 'react-responsive-carousel'
// import waitlistImage from '/public/imgs/ProjectImages/waitlist.PNG'
// import wI from '/imgs/waitlist.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { selectDisplay } from '../app/gridSlice'
import { useDispatch, useSelector } from 'react-redux'

function Portfolio() {
  const [data, setData] = useState(ProjectsData)
  const [currentProject, setCurrentProject] = useState(0)
  const [grid, setGrid] = useState(true)
  const [display, setDisplay] = useState(false)

  const dispatch = useDispatch()
  const reduxDisplay = useSelector(selectDisplay)

  useEffect(() => {
    if(!grid) {
      setGrid(true)
      setCurrentProject(null)
      setDisplay(false)
    }
  }, [reduxDisplay])

  const changeCurrentProject = (num) => {
    if(grid){
      setGrid(false)
    }
    setCurrentProject(num)
    setDisplay(true)
  }

  const ProjectsGrid = data.map((project) => 
    <ProjectTile
        changeCurrentProject={changeCurrentProject}
        key={project.id}
        id={project.id}
        name={project.name}
        image={project.image}
        info={project.info}
        display={display}
        emulateTouch={true}
        width={80}
    />
  )

  return (
    <div className='portfolio-cont'>
      <h3 className='portfolio-title'>    Featured Projects</h3>
      <div className='projects-cont'>
        <div className={ grid ? 
          "projects-grid-lg" : "projects-grid-small"}
        >
          {ProjectsGrid}
        </div> 
        <ProjectSection 
          displayProject={display} 
          sentProject={currentProject}
        />
      </div>
      <p className='thanks'>Thanks for browsing, for any questions feel free to reach out 👉<span><Link to="/email"> here</Link></span></p>
    </div>
  )
}

export default Portfolio