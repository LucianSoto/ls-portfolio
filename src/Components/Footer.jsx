import React from 'react'
import { FaGithub, FaFacebook, FaInstagram, FaMobileAlt, FaAt, FaEnvelope, FaEllipsisV } from 'react-icons/fa'
import './Footer.css'
// import { Icon } from 'react-native-gradient-icon'  this did not work!!??

function Footer() {
  return (
    <div className='footer'>
      <h3 className='footer-h3'>Let's work together</h3>
      <div className="contacts-cont">
        <a className="contact" href='https://github.com/LucianAiolos'>
        <svg width='0' height='0'>
          <linearGradient id="blue-gradient" x1="00%" y1="00%" x2="0%" y2="100%" >
            <stop stopColor='white' offset='0%'/> 
            <stop stopColor='#38495a' offset='100%'/>
          </linearGradient>
        </svg>
        <FaGithub style={{ fill: "url(#blue-gradient)", marginRight: "10px" }} />GitHub
        </a>
        <a className="contact" href='https://www.instagram.com/kapitan_luxian/'>
        <svg width='0' height='0'>
          <linearGradient id="blue-gradient" x1="0%" y1="00%" x2="0%" y2="100%" >
            <stop stopColor='white' offset='0%'/> 
            <stop stopColor='#38495a' offset='100%'/>
          </linearGradient>
        </svg>
        <FaInstagram style={{ fill: "url(#blue-gradient)", marginRight: "10px"}} />Instagram
        </a>
        <a className="contact" href='https://www.instagram.com/kapitan_luxian/'>
        <svg width='0' height='0'>
          <linearGradient id="env-gradient" x1="0%" y1="0%" x2="0%" y2="100%" >
            <stop stopColor='white' offset='0%'/> 
            <stop stopColor='#38495a' offset='100%'/>
          </linearGradient>
        </svg>
        <FaEnvelope style={{ fill: "url(#env-gradient)" , marginRight: "10px"}} />Email
        </a>
        
      </div>
    </div>
  )
}

export default Footer