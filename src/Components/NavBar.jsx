import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { FaEllipsisV, FaXmark } from 'react-icons/fa'
import { useState } from 'react'

function NavBar() {

  const [dd, setDD] = useState(false)

  const changeDD = () => {
    setDD(!dd)
  }

  return (
    <nav className="nav-bar">
        <Link className="menu-item lb-logo" to="/" >LB</Link>
        {/* <Link className='nav-item'>About</Link> */}
        <div className='menu-div' id='menu-div'>
          { dd? null :
            <FaEllipsisV className='ellipsis' style={{ color: "lightgrey",}} onClick={changeDD} />
          }
          { dd? 
            <div className="menu-dd" onClick={changeDD}>
              <Link className="menu-item navLink" to="/portfolio" >Portfolio</Link>
              <Link className="menu-item navLink" to="/resume" >Resume</Link>
              <p className='menu-item' id='x'>X</p>
              {/* internal link to CONTACTS */}
            </div> 
            :
            null
          }
        </div >
    </nav>

  )
}

export default NavBar