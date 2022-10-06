import React, {useState} from 'react'
import './NavBar.css'
import { Link, NavLink, useSearchParams } from 'react-router-dom'
import {FaClose} from 'react-icons/fa'
import {GrMenu} from 'react-icons/gr'
import {FaReact} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'

function NavBar() {
  const [dd, setDD] = useState(false)
  const [nav, setNav] = useState(false)
  const params = useSearchParams()

  // window on scroll change nav background color 
  const winWidth = window.addEventListener('resize', null)

 window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    setNav(true)
  } else {
    setNav(false)
  }
 })

  return (
    <nav className='nav-bar'
        style={nav? {backgroundColor: 'black'}: null }
    >
      <Link className="menu-item lb-logo" to="/" >LB</Link>
      <div 
        // className='menu-div' 
        id='menu-div' 
        className={winWidth > 800 ? 'menu-div' : 
          dd? 'menu-div' : 'menu-div menu-display'
        }
        // style={dd? {display: 'flex'} : {display: 'none'}}
      >
          <NavLink  className='menu-item' to='/'>Home</NavLink>
          <NavLink  className="menu-item" to="/portfolio" >Portfolio</NavLink>
          <NavLink  className="menu-item" to="/about" >About</NavLink>
          <NavLink  className="menu-item" to="/email" >Contact</NavLink>                
          {/* <Link className="menu-item navLink" to="/resume">Resume</Link> */}
        </div > 
      {!dd ?
        <AiOutlineClose className='dd-btn' onClick={() =>setDD(!dd)}/>
        :
        <FaBars className='dd-btn' onClick={() =>setDD(!dd)}/>
      }
    </nav>
  )
}

export default NavBar