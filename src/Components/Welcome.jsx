import './Welcome.css'
import { useState } from 'react'
import AboutMe from './AboutMe'

function Welcome() {
  const [windowPosition, setWindowPosition] = useState(0)
  console.log(window.screenY, 'out here', window)


  const stopTwinkle = () => {

    console.log(window.scrollY, 'function', window)
    var twinkles = document.getElementById('twinkling')
  }

  window.addEventListener('scroll', stopTwinkle, false) 



  return (
    <div className="welcome-section">
      <div className="stars" id="stars" ></div>
      <div className="twinkling" id='twinkling'></div>
      <div className="name-wrapper">
        <h1>LUCIAN BROOKS</h1>
      </div>
      <h3 className='welcome-h3'>A Web Developer</h3>
      

    </div>
  )
}

export default Welcome