import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  const linkStyles = {
    textDecoration: 'none',
    color: 'white',
  }

  return (
    <nav className="nav-bar">
      <div className="nav-items">
        <Link className="nav-item" to="/" style={linkStyles}>Home</Link>
        {/* <Link className='nav-item'>About</Link> */}
        <Link className="nav-item" to="/portfolio" style={linkStyles}>Portfolio</Link>
        <Link className="nav-item" to="/resume" style={linkStyles}>Resume</Link>
        {/* <p className="nav-item"><a href="footer">Contact</a></p> */}
      </div>
    </nav>

  )
}

export default NavBar