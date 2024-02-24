// import React, { useEffect } from 'react'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <div className='footer'>
      <p className="footer-design">Designed and Developed by Lucian Soto</p>
      <div className="contacts-cont">
        <a className="contact"  
           href='https://github.com/LucianAiolos'
        >
        <FaGithub/>
          <span className='footer-span'>GitHub</span>
        </a>
        <a className="contact"  
           href='https://www.linkedin.com/in/lucian-brooks-a6aba0232/'>
          <FaLinkedin/>
          <span className='footer-span'>LinkedIn</span>
        </a>
        <Link className="contact" 
           to='/email' >
          <FaEnvelope/>
          <span className='footer-span'>Email</span>
        </Link>
      </div>
    </div>
  )
}

export default Footer