import React, {useState} from 'react'
import './NavBar.css'
import { Link, NavLink, useSearchParams } from 'react-router-dom'

function NavBar() {
  const [dd, setDD] = useState(false)
  const params = useSearchParams()

  console.log(params, 'hi')

  const changeDD = () => {
    setDD(!dd)
  }

  return (
    <nav 
    // className={navBar ? 'nav-bar active' : 'nav-bar'}
      className='nav-bar'
    >
        <Link className="menu-item lb-logo" to="/" >LB</Link>
        <div className='menu-div' id='menu-div'>
              <div className="menu-dd" onClick={changeDD}>
                <NavLink  className='menu-item' to='/'>Home</NavLink>
                <NavLink  className="menu-item " to="/portfolio" >Portfolio</NavLink>
                <NavLink  className="menu-item " to="/about" >About</NavLink>
                <NavLink  className="menu-item " to="/email" >Contact</NavLink>                
                {/* <Link className="menu-item navLink" to="/resume">Resume</Link> */}
                <p className='menu-item' style={{display: "none"}} id='x'>X</p>
              </div>
        </div >
    </nav>
  )
}

export default NavBar