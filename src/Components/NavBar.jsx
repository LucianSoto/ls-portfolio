import React, {useState, useEffect} from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { FaEllipsisV, FaXmark } from 'react-icons/fa'


function NavBar() {
  // const [navBar, setNavBar] = useState(false)
  const [dd, setDD] = useState(false)

  const changeDD = () => {
    setDD(!dd)
  }

  // const changeNavBackground = () => {
  //   window.scrollY >= 120 ? setNavBar(true) : setNavBar(false)
  // }

  // window.addEventListener('scroll', changeNavBackground)

  return (
    <nav 
    // className={navBar ? 'nav-bar active' : 'nav-bar'}
      className='nav-bar'
    >
        <Link className="menu-item lb-logo" to="/lb-portfolio" >LX</Link>
        {/* <Link className='nav-item'>About</Link> */}
        <div className='menu-div' id='menu-div'>
          { dd? null :
            // <FaEllipsisV className='ellipsis'  onClick={changeDD} />
            <>
              <svg width='0' height='0'>
                <linearGradient id='blue-gradient' x1="00%" y1="00%" x2="0%" y2="100%">
                  <stop stopColor='white' offset='0%'/> 
                  <stop stopColor='#38495a' offset='100%'/>
                </linearGradient>
              </svg>
              <FaEllipsisV className='ellipsis' style={{ fill: "url(#blue-gradient)" }}  onClick={changeDD} />
            </>
          }
          { dd? 
            <div className="menu-dd" onClick={changeDD}>
              <Link className="menu-item navLink" to="/portfolio" >Portfolio</Link>
              {/* <Link className="menu-item navLink" to="/resume" >Resume</Link> */}
              <Link className="menu-item navLink" to="/email" >Contact</Link>
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