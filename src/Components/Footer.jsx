// import React, { useEffect } from 'react'
import { FaGithub, FaFacebook, FaInstagram, FaMobileAlt, FaAt, FaEnvelope, FaEllipsisV, FaLinkedin } from 'react-icons/fa'
import './Footer.css'
import { Link } from 'react-router-dom'
import { browserName } from "react-device-detect"

function Footer() {
  let browserType = browserName

  return (
    <div className='footer'>
      <h3 className='footer-h3'>Let's work together!</h3>
      <div className="contacts-cont">
        <a className="contact" 
           style={browserType === 'Safari' ? {color: '#8a8a8a'} : {color: 'transparent'}} 
           href='https://github.com/LucianAiolos'
        >
          <svg width='0' height='0'>
            <linearGradient id="blue-gradient" x1="00%" y1="00%" x2="0%" y2="100%" >
              <stop stopColor='white' offset='0%'/> 
              <stop stopColor='#38495a' offset='100%'/>
            </linearGradient>
          </svg>
          <FaGithub style={{ fill: "url(#blue-gradient)"}} className='gradient-svg'/>
          <span className='footer-span'>GitHub</span>
        </a>
        <a className="contact" 
           style={browserType === 'Safari' ? {color: '#8a8a8a'} : {color: 'transparent'}} 
           href='https://www.linkedin.com/in/lucian-brooks-a6aba0232/'>
        <svg width='0' height='0'>
          <linearGradient id="blue-gradient" x1="0%" y1="00%" x2="0%" y2="100%" >
            <stop stopColor='white' offset='0%'/> 
            <stop stopColor='#38495a' offset='100%'/>
          </linearGradient>
        </svg>
        <FaLinkedin style={{ fill: "url(#blue-gradient)"}} className='gradient-svg' />
        <span className='footer-span'>LinkedIn</span>
        </a>
        <Link className="contact" 
           style={browserType === 'Safari' ? {color: '#8a8a8a'} : {color: 'transparent'}} 
           to='/email' >
          <svg width='0' height='0'>
            <linearGradient id="env-gradient" x1="0%" y1="0%" x2="0%" y2="100%" >
              <stop stopColor='white' offset='0%'/> 
              <stop stopColor='#38495a' offset='100%'/>
            </linearGradient>
          </svg>
          <FaEnvelope style={{ fill: "url(#env-gradient)"}} className='gradient-svg'/>
          <span className='footer-span'>Email</span>
        </Link>
      </div>
    </div>
  )
}

export default Footer