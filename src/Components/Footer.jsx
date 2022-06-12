import React, { useEffect } from 'react'
import { FaGithub, FaFacebook, FaInstagram, FaMobileAlt, FaAt, FaEnvelope, FaEllipsisV, FaLinkedin } from 'react-icons/fa'
import './Footer.css'
import { Link } from 'react-router-dom'
import {browserName, browserVersion} from "react-device-detect"

function Footer() {

  return (
    <div className='footer'>
      <h3 className='footer-h3'>Let's work together!</h3>
      <div className="contacts-cont">
        <a className="contact" style={browserName = 'Safari' ? {color: 'transparent'} : {color: 'lightgray'}} href='https://github.com/LucianAiolos'>
          <svg width='0' height='0'>
            <linearGradient id="blue-gradient" x1="00%" y1="00%" x2="0%" y2="100%" >
              <stop stopColor='white' offset='0%'/> 
              <stop stopColor='#38495a' offset='100%'/>
            </linearGradient>
          </svg>
          <FaGithub style={{ fill: "url(#blue-gradient)", marginRight: "10px" }} />GitHub
        </a>
        <a className="contact" style={browserName = 'Safari' ? {color: 'transparent'} : {color: 'lightgray'}} href='https://www.linkedin.com/in/lucian-brooks-a6aba0232/'>
        <svg width='0' height='0'>
          <linearGradient id="blue-gradient" x1="0%" y1="00%" x2="0%" y2="100%" >
            <stop stopColor='white' offset='0%'/> 
            <stop stopColor='#38495a' offset='100%'/>
          </linearGradient>
        </svg>
        <FaLinkedin style={{ fill: "url(#blue-gradient)", marginRight: "10px"}} />LinkedIn
        </a>
        <Link className="contact" style={browserName = 'Safari' ? {color: 'transparent'} : {color: 'lightgray'}} to='/email' >
          {/* onClick={()=> window.scroll(0,0)} */}
          <svg width='0' height='0'>
            <linearGradient id="env-gradient" x1="0%" y1="0%" x2="0%" y2="100%" >
              <stop stopColor='white' offset='0%'/> 
              <stop stopColor='#38495a' offset='100%'/>
            </linearGradient>
          </svg>
          <FaEnvelope style={{ fill: "url(#env-gradient)" , marginRight: "10px"}} />Email
        </Link>
        
      </div>
    </div>
  )
}

export default Footer