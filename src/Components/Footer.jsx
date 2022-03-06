import React from 'react'
import { FaGithub, FaFacebook, FaInstagram, FaMobileAlt, FaAt, FaEnvelope, FaEllipsisV } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <h3 className='footer-h3'>Let's work together</h3>
      <div className="contacts-cont">
        <p className="contact"><a href=""><FaGithub style={{marginRight: 5}}/>GitHub</a></p>
        <p className="contact"><a href=""><FaInstagram style={{fontSize: 28, marginRight: 5}}/>Instagram</a></p>
        <p className="contact"><a href=""><FaMobileAlt style={{marginRight: 5}} />Phone</a></p>
        <p className="contact"><a href=""><FaEnvelope style={{marginRight: 5}} />Email</a></p>
      </div>
    </div>
  )
}

export default Footer