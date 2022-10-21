import React, { useState } from 'react'
import './NavBar.css'
import { Link, NavLink, useSearchParams } from 'react-router-dom'
import { FaClose } from 'react-icons/fa'
import { GrMenu } from 'react-icons/gr'
import { FaReact } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { changeProjects, selectDisplay }  from '../app/gridSlice'
import { useDispatch, useSelector } from 'react-redux'

function NavBar() {
  const [dd, setDD] = useState(false)
  const [nav, setNav] = useState(false)
  const params = useSearchParams()

  const dispatch = useDispatch()
  const display = useSelector(selectDisplay)

  const winWidth = window.addEventListener('resize', null)
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
      setNav(true)
    } else {
      setNav(false)
    }
  })

 const changePortfolio = () => {
  setDD(!dd)
  dispatch( changeProjects() )
  // console.log(display, 'nav display')
 }

  return (
    <nav className='nav-bar'
        style={nav? {backgroundColor: 'black'}: null }
    >
      <Link className="menu-item lb-logo" to="/" >LB</Link>
      <div 
        id='menu-div' 
        className={winWidth > 800 ? 'menu-div' : 
          !dd? 'menu-div' : 'menu-div menu-display'
        }
      >
        <NavLink  className='menu-item' to='/' exact={true} onClick={() =>setDD(!dd)}>Home</NavLink>
        <NavLink  className="menu-item" to="/portfolio" onClick={() => {changePortfolio()}}>Portfolio</NavLink>
        <NavLink  className="menu-item" to="/about" onClick={() =>setDD(!dd)} >About</NavLink>
        <NavLink  className="menu-item" to="/email" onClick={() =>setDD(!dd)} >Contact</NavLink>                
        {/* <Link className="menu-item navLink" to="/resume">Resume</Link> */}
      </div > 
      {dd ?
        <AiOutlineClose className='dd-btn' onClick={() =>setDD(!dd)}/>
        // make funciton on click hides the menu and loads clicked page
        // also using useParams if page=portfolio then reload grid
        :
        <FaBars className='dd-btn' onClick={() =>setDD(!dd)}/>
      }
    </nav>
  )
}

export default NavBar